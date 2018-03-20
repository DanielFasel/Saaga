class Language < ApplicationRecord
  has_and_belongs_to_many :users
  has_many :translations,  :dependent => :delete_all

  def self.validate_language(languageId)
    puts languageId[:id]
    @languageToValidate=Language.find_by(id: languageId[:id])
    @languageToValidate.update_attributes(validated: true)
  end


  def self.get_language_hash(languageName)

  # Get all sites and initiate the response array
    sitearray=Site.all
    response={}
    language=Language.find_by(name: languageName)

    response[:name]=language.name
    response[:total]=0
    response[:completed]=0
    response[:sites]=[]
    # Loop through the Sites
    sitearray.each do |site|

      # Initialize the SiteHash aswell as the PageArray which lies within it.
      sitehash={}
      pagearray=[]
      # Attributes of the sites
      sitehash[:name]=site.name
      sitehash[:completed]=0
      sitehash[:total]=0
      sitehash[:pages]=pagearray

      # Looping through the pages to create the PageArray
      site.pages.each do |page|
        # Initialize the PageHash aswell as the WordArray that lies within it
        pagehash={}
        wordarray=[]
        # Attributes of the Pages
        pagehash[:name]=page.name
        pagehash[:completed]=0
        pagehash[:total]=0
        pagehash[:words]=wordarray

        #Looping through the words to create the WordArray
        page.words.each do  |word|
          # fetch the translation of the word and appropriated language and create a hash of it
          translation=word.translations.find_by_language_id(language.id)
          translationhash={}
          # Attributes of the Translations
          translationhash[:translation]=translation.translation
          translationhash[:temporary]=translation.temporary
          translationhash[:validated]=translation.validated
          translationhash[:author]=translation.user_id
          # create word hash and add the translation hash to it
          wordhash={}
          # Attributes of the Words
          wordhash[:keyword]=word.keyword
          wordhash[:translation]=translationhash
          # Push the word and translation has into the WordArrays
          wordarray.push(wordhash)

          # Incriment the total translations
          #Incriment total
          pagehash[:total]+=1
          sitehash[:total]+=1
          response[:total]+=1

        end
        # Push the PageHash into the PageArray
        pagearray.push(pagehash)
      end
      # Push the Sitehash into the Response Array to finalize the response
      response[:sites].push(sitehash)
    end
    return response
  end

end
