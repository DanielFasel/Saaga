class Translator::TranslationsController < ApplicationController
  respond_to :html, :json


  def index
  end

  def show
  end

  def create
  end

  def update
    puts "Arrived to controller"
    languageId=Language.find_by(name: params[:selected][:language][:name]).id
    # Fetch the Id of the word being translated
    word=Word.find_by_keyword(params[:selected][:word][:name])
    # Updates different fields depending on type as well as different response
    if params[:type]=="temporary"
      puts "Temporary"
      translation = word.translations.find_by(language_id: languageId)
      translation.temporary = params[:translation]
      translation.user_id = current_user.id
      translation.validated = false
      translation.save
      puts translation.temporary
      render json: translation
    elsif params[:type]=="translation"
      puts "Translation"
      translation = word.translations.find_by(language_id: languageId)
      translation.translation = params[:translation]
      translation.user_id = current_user.id
      translation.validated=true
      translation.save
      render json: translation
    elsif params[:type]=="save"

      # Create a button for it !! Because it reloads it


      original_json= 'app/javascript/packs/assets/json/languages/homepage/'+params[:selected][:site][:name]+'_'+params[:selected][:language][:name]+'.json'
      new_json = original_json + '.new'
      old_json = original_json + '.old'

      language_json = JSON.parse(File.read('app/javascript/packs/assets/json/languages/homepage/'+params[:selected][:site][:name]+'_'+params[:selected][:language][:name]+'.json'))
      puts language_json
      language_json[params[:selected][:page][:name]][params[:selected][:word][:name]]=params[:translation]
      puts language_json

      File.write(new_json,language_json.to_json)

      File.rename(original_json, old_json)
      File.rename(new_json, original_json)
      File.delete(old_json)
      # Once translator is satisfied with translations he sends a message (within the website to the superadmin) and the superadmin controlls and updates the json file.
    end
  end

  def destroy
  end

end
