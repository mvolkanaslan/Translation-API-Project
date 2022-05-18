class Request{
    static async getLangs(){
        let response = await fetch("./js/languages.json");
        let langs = response.json();
        return langs
    }
    
    // connection API and get Translated Text
   static  async getTranslatedText(translation){
        let apiUrl = `https://api.mymemory.translated.net/get?q=${translation.textLangFrom}&langpair=${translation.langFrom}|${translation.langTo}`;
        let response = await fetch(apiUrl);
        let data = await response.json();
        translation.textLangTo = await data.responseData.translatedText;
        return  translation;
    }

}