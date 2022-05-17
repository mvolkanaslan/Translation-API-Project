const langTranslatedFrom = document.getElementById("langTranslatedFrom");
const langTranslatedTo = document.getElementById("langTranslatedTo");
const mainLangTextArea = document.getElementById("mainText");
const targetLangTextArea = document.getElementById("translatedText");
const textTranslatedFrom = document.getElementById("textTranslatedFrom");
const textTranslatedTo = document.getElementById("textTranslatedTo");

eventListener();
const ui = new UI();
const request = new Request();
const translation = new Translation('','','','');

function eventListener(){
    // wıth window load set languages to select elements and initialize translation object
    window.addEventListener("load",()=>{
        request.getLangs().then(langs=>{
            ui.setLangsToSelectElements(langs);
        });
        translation.langFrom = langTranslatedFrom.value;
        translation.langTo = langTranslatedTo.value;
        translation.textLangFrom = textTranslatedFrom.value;
        translation.textLangTo = textTranslatedTo.value;
    });
    //when selected language change the translation object and run translation
    langTranslatedFrom.addEventListener("change",()=>{
        mainLangTextArea.children[1].childNodes[1].innerText = langTranslatedFrom.selectedOptions[0].text.toUpperCase();
        translation.langFrom = langTranslatedFrom.value;
        ui.translate(translation)
        
    });
    //when selected language change the translation object and run translation
    langTranslatedTo.addEventListener("change",()=>{
        targetLangTextArea.children[1].childNodes[1].innerText = langTranslatedTo.selectedOptions[0].text.toUpperCase();
        translation.langTo = langTranslatedTo.value;
        ui.translate(translation)
    });
    // while typing change state of translation object and run translation at the moment
    textTranslatedFrom.addEventListener("input",()=>{
        translation.textLangFrom = textTranslatedFrom.value;
        ui.translate(translation)
    });

    
    
    
}
