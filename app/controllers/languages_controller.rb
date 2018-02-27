class LanguagesController < ApplicationController
  respond_to :html, :json

  def get
    # When opportunity presents itself check if there is a better way of doing this
    # Get all sites and initiate the response array
    @sitearray=Site.all
    @response={}
    @language=Language.find_by(name: params[:language])


    @response[:name]=@language.name
    @response[:total]=0
    @response[:completed]=0
    @response[:sites]=[]
    # Loop through the Sites
    @sitearray.each do |site|

      # Initialize the SiteHash aswell as the PageArray which lies within it.
      @sitehash={}
      @pagearray=[]
      # Attributes of the sites
      @sitehash[:name]=site.name
      @sitehash[:completed]=0
      @sitehash[:total]=0
      @sitehash[:pages]=@pagearray

      # Looping through the pages to create the PageArray
      site.pages.each do |page|
        # Initialize the PageHash aswell as the WordArray that lies within it
        @pagehash={}
        @wordarray=[]
        # Attributes of the Pages
        @pagehash[:name]=page.name
        @pagehash[:completed]=0
        @pagehash[:total]=0
        @pagehash[:words]=@wordarray

        #Looping through the words to create the WordArray
        page.words.each do  |word|
          # fetch the translation of the word and appropriated language and create a hash of it
          @translation=word.translations.find_by_language_id(@language.id)
          @translationhash={}
          # Attributes of the Translations
          @translationhash[:translation]=@translation.translation
          @translationhash[:temporary]=@translation.temporary
          @translationhash[:validated]=@translation.validated
          @translationhash[:author]=@translation.user_id
          # create word hash and add the translation hash to it
          @wordhash={}
          # Attributes of the Words
          @wordhash[:keyword]=word.keyword
          @wordhash[:translation]=@translationhash
          # Push the word and translation has into the WordArrays
          @wordarray.push(@wordhash)

          # Incriment the total and completed translations
          #Incriment total
          @pagehash[:total]+=1
          @sitehash[:total]+=1
          @response[:total]+=1
          # incriment if validated for completed
          if @translation[:validated]==true
            @pagehash[:completed]+=1
            @sitehash[:completed]+=1
            @response[:completed]+=1
          end

        end
        # Push the PageHash into the PageArray
        @pagearray.push(@pagehash)
      end
      # Push the Sitehash into the Response Array to finalize the response
      @response[:sites].push(@sitehash)
    end

    respond_with(@response)
  end


  def post
    @languageId=Language.find_by(name: params[:selected][:language][:name]).id
    # Fetch the Id of the word being translated
    @word=Word.find_by_keyword(params[:selected][:word][:name])
    # Updates different fields depending on type as well as different response
    if params[:type]=="temporary"
      @translation=@word.translations.find_by(language_id: @languageId)
      @translation.temporary= params[:translation]
      @translation.user_id= current_user.id
      @translation.validated=false
      @translation.save
      render json: @translation
    elsif params[:type]=="translation"
      @translation=@word.translations.find_by(language_id: @languageId)
      @translation.translation= params[:translation]
      @translation.user_id= current_user.id
      @translation.validated=true
      @translation.save
      render json: @translation
    end



    # save a translation, update the Json file and maybe also the seed file
    # received data is in this form {language:"", word:"", translation:"", type:""}
    # get the word and then the translation with the correct language. Then check the type and either save it to translations or temporary. If saved to translations update or

  end


private

  def page_params
    params.require(:name)
  end

end
