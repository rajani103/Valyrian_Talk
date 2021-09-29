var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector(".translateout");
// var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

var serverUrl = "https://api.funtranslations.com/translate/valyrian.json";//translator api from the funtranslations website

function getTranslationURL(text) {
    return serverUrl + "?" + "text=" + text;
}

function errorHandler(error) {
    console.log("error occured ", error);
    alert("something wrong with server! try again later");
}

function clickHandleGuy() {
    // outputDiv.innerText = "something "+ txtInput.value;

    var inputText = txtInput.value; //taking input

    //calling server for processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText; //output
        })
        .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandleGuy)