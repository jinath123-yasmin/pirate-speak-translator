var inputText= document.getElementById('input-text');
var btnTranslate= document.getElementById('btn-translate');
var divOutput= document.getElementById('div-output');

var serverURL ="https://api.funtranslations.com/translate/pirate.json"

function  getTranslationURL(text){
    return serverURL + "?" + "text=" + text;
}

function clickEventHandler(){
    var textInput= inputText.value;
    fetch(getTranslationURL(textInput)).then(response => response.json())
.then( json => {

   var translatedText= json.contents.translated;
    divOutput.innerText = translatedText;
})
};


btnTranslate.addEventListener("click",clickEventHandler);