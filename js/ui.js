class UI{
    //this fonction get lang lists from the local data and set the DOM
   static setLangsToSelectElements(langs){
        langs.map(lang=>{
            langTranslatedFrom.insertAdjacentHTML("beforeend",`<option value="${lang.code}">${lang.name}</option>`);
            langTranslatedTo.insertAdjacentHTML("beforeend",`<option value="${lang.code}">${lang.name}</option>`);
        })
    }
    //after translation set the value of translated text to tesxtarea
    static translate(translation){
        Request.getTranslatedText(translation)
        .then(translation=>{
            translation.textLangFrom==""? translation.textLangTo=translation.textLangFrom:null;
            textTranslatedTo.value=translation.textLangTo.toUpperCase()
        });
    }
    
}