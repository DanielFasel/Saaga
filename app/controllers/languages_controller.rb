class LanguagesController < ApplicationController
  respond_to :html, :json
  # to allow visiting this page without being logged in.
  skip_before_action :authenticate_user!, :only => [:get]



  def get

    # Get all sites and initiate the response array
    @sitearray=Site.all
    @response=[]

    # Loop through the Sites
    @sitearray.each do |site|

      # Initialize the SiteHash aswell as the PageArray which lies within it.
      @sitehash={}
      @pagearray=[]
      # Attributes of the sites
      @sitehash[:name]=site.name
      @sitehash[:completed]=site.completed
      @sitehash[:total]=site.total
      @sitehash[:pages]=@pagearray

      # Looping through the pages to create the PageArray
      site.pages.each do |page|
        # Initialize the PageHash aswell as the WordArray that lies within it
        @pagehash={}
        @wordarray=[]
        # Attributes of the Pages
        @pagehash[:name]=page.name
        @pagehash[:completed]=page.completed
        @pagehash[:total]=page.total
        @pagehash[:words]=@wordarray

        #Looping through the words to create the WordArray
        page.words.each do  |word|
          # fetch the translation of the word and appropriated language and create a hash of it
          @translation=word.translations[0]
          @translationhash={}
          @translationhash[:translation]=@translation.translation
          @translationhash[:temporary]=@translation.temporary
          @translationhash[:validated]=@translation.validated
          @translationhash[:author]=@translation.user_id
          # create word hash and add the translation hash to it
          @wordhash={}
          @wordhash[:keyword]=word.keyword
          @wordhash[:translation]=@translationhash
          # Push the word and translation has into the WordArrays
          @wordarray.push(@wordhash)
        end
        # Push the PageHash into the PageArray
        @pagearray.push(@pagehash)
      end
      # Push the Sitehash into the Response Array to finalize the response
      @response.push(@sitehash)
    end

    respond_with(@response)
  end


  def post
    # save a translation, update the Json file and maybe also the seed file
  end


private
  def page_params

    params.require(:name)

  end

end
