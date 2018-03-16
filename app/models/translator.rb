class Translator < User

  def self.get_languages(user)
    languages=user.languages.all
    #Sorting languages alphabetically so the front end doesn't have issues
    languages.sort_by{ |l| l.name.downcase }
    return languages
  end

end
