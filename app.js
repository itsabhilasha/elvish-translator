var btnTranslate = document.querySelector("#btn-translate")
var txtInput = document.querySelector("#input-txt")
var outputDiv = document.querySelector(".output")
var serverURL = "https://api.funtranslations.com/translate/sindarin.json"

function getTranslationURL(text){
    return serverURL+"?"+"text="+text
}

function errorHandler(error){
    console.log("error occurred: ",error)
    alert("server side issue")
}

function clickhandler(){
    var inputText = txtInput.value //take input

    fetch(getTranslationURL(inputText))
    .then(response=>response.json())
    .then(json=>{
        var translatedText=json.contents.translated
        outputDiv.innerText=translatedText
    })
    .catch(errorHandler)   
}
btnTranslate.addEventListener("click", clickhandler)
