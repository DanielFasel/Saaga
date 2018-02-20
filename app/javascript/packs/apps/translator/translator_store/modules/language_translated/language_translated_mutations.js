export default{
    languageTranslated(state, language){
      // Extracting key of language amd making it a string
      var key=Object.keys(language)
      var keyString = key[0]
      //setting state of the appropriated language with it's corresponding array
      state.languageTranslated[keyString]=language[keyString]
    }
}
