var agreeEI_number = 0
var disagreeEI_number = 0

function eicounter(){
var selected_buttons_a = document.querySelectorAll('input[type="radio"]:checked[value="agree"]');
agreeEI_number= selected_buttons_a.length 


var selected_buttons_d =document.querySelectorAll('input[type="radio"]:checked[value="disagree"]');
disagreeEI_number= selected_buttons_d.length 

console.log(agreeEI_number)
console.log(disagreeEI_number)

localStorage.setItem("agreeEI",agreeEI_number)
localStorage.setItem("disagreeEI",disagreeEI_number)


}




var agreeSN_number = 0
var disagreeSN_number = 0
function SNcounter(){
var selected_buttonsSN = document.querySelectorAll('input[type="radio"]:checked[value="agreeSN"]');
agreeSN_number = selected_buttonsSN.length 

var selected_buttonsSN = document.querySelectorAll('input[type="radio"]:checked[value="disagreeSN"]');
disagreeSN_number = selected_buttonsSN.length 



localStorage.setItem("agreeSN",agreeSN_number)
localStorage.setItem("disagreeSN",disagreeSN_number)



}

var agreeTF_number = 0
var disagreeTF_number = 0
function TFcounter(){
var selected_buttonsTF = document.querySelectorAll('input[type="radio"]:checked[value="agreeTF"]');
agreeTF_number = selected_buttonsTF.length 

var selected_buttonsTF = document.querySelectorAll('input[type="radio"]:checked[value="disagreeTF"]');
disagreeSN_number = selected_buttonsTF.length 

localStorage.setItem("agreeTF",agreeTF_number)
localStorage.setItem("disagreeTF",disagreeTF_number)

}



var agreeJP_number = 0
var disagreeJP_number = 0
function JPcounter(){
var selected_buttonsJP = document.querySelectorAll('input[type="radio"]:checked[value="agreeJP"]');
agreeJP_number = selected_buttonsJP.length 

var selected_buttonsJP = document.querySelectorAll('input[type="radio"]:checked[value="disagreeJP"]');
disagreeSN_number = selected_buttonsJP.length 

localStorage.setItem("agreeJP",agreeJP_number)
localStorage.setItem("disagreeJP",disagreeJP_number)
}


function finalresults(){
var agreeEI = localStorage.getItem("agreeEI")
var disagreeEI = localStorage.getItem("disagreeEI")

var agreeSN = localStorage.getItem("agreeSN")
var disagreeSN = localStorage.getItem("disagreeSN")

var agreeTF = localStorage.getItem("agreeTF")
var disagreeTF = localStorage.getItem("disagreeTF")

var agreeJP = localStorage.getItem("agreeJP")
var disagreeJP = localStorage.getItem("disagreeJP")

console.log(agreeEI)
console.log(disagreeEI)

console.log(agreeSN)
console.log(disagreeSN)

console.log(agreeTF)
console.log(disagreeTF)

console.log(agreeJP)
console.log(disagreeJP)


var EI, SN, TF, JP


if(agreeEI > disagreeEI){
    EI = "e"
}
else {
    EI="i"
    console.log(EI)

}

if(agreeSN>disagreeSN){
    SN = "s"
}
else{
    SN = "n"
}


if(agreeTF>disagreeTF){
    TF = "t"
}
else{
    TF = "f"
}

if(agreeJP>disagreeJP){
    JP = "j"
}
else{
    JP = "p"
}


if((EI=="i") && (SN=="s") && (TF=="t") && (JP=="j")){
    //console.log("ISTJ")
    window.location.href="survey.html"
}

 if((EI=="i") && (SN=="s") && (TF=="f") && (JP=="j")){
     //console.log("ISFJ")
    window.location.href="survey.html"
 }

 if((EI=="i") && (SN=="n") && (TF=="f") && (JP=="j")){
    //console.log("INFJ")
    window.location.href="survey.html"
}
if((EI=="i") && (SN=="n") && (TF=="t") && (JP=="j")){
     //console.log("INTJ")
    window.location.href="survey.html"
}
if((EI=="i") && (SN=="s") && (TF=="t") && (JP=="p")){
    //console.log("ISTP")
     window.location.href="survey.html"
    } 
 if((EI=="i") && (SN=="s") && (TF=="f") && (JP=="p")){
    //console.log("ISFP")
    window.location.href="survey.html"
}
if((EI=="i") && (SN=="n") && (TF=="f") && (JP=="p")){
     //console.log("INFP")
    window.location.href="survey.html"
}
 if((EI=="i") && (SN=="n") && (TF=="t") && (JP=="p")){
     console.log("INTP")
    //   window.location.href="survey.html"
    }
if((EI=="e") && (SN=="s") && (TF=="t") && (JP=="p")){
     //console.log("ESTP")
    window.location.href="survey.html"
}

if((EI=="e") && (SN=="s") && (TF=="f") && (JP=="p")){
     //console.log("ESFP")
    window.location.href="survey.html"
   }

if((EI=="e") && (SN=="n") && (TF=="f") && (JP=="p")){
    //console.log("ENFP")
   window.location.href="survey.html"
}

if((EI=="e") && (SN=="n") && (TF=="t") && (JP=="p")){
    console.log("ENTP")
   window.location.href="entp/entp.html"
}

if((EI=="e") && (SN=="s") && (TF=="t") && (JP=="j")){
    //console.log("ESTJ")
   window.location.href="survey.html"
}

if((EI=="e") && (SN=="s") && (TF=="f") && (JP=="j")){
    //console.log("ESFJ")
   window.location.href="survey.html"
}
if((EI=="e") && (SN=="n") && (TF=="f") && (JP=="j")){
    //console.log("ENFJ")
   window.location.href="survey.html"
}

if((EI=="e") && (SN=="n") && (TF=="t") && (JP=="j")){
    //console.log("ENTJ")
   window.location.href="survey.html"
}


}





var imageId = ""
function selectimage(img,x){
imageId=img
console.log(imageId)
document.getElementById("outputimg").src= imageId+".png"
localStorage.setItem("output",imageId)
// document.getElementById("everything").style.cursor="url('https://cdn-icons-png.flaticon.com/28/7591/7591554.png'),pointer";
var elementToChange = document.getElementsByTagName("body")[0];
 elementToChange.style.cursor = "url('"+ x +"'), auto";
 console.log(x)
localStorage.setItem("cursor", x)
}


function petname(){
    var name = document.getElementById("petname").value;
    document.getElementById("petnameplace").innerHTML=name;
    document.getElementById("petselect").style.display='none'
}


function petexp(){
    var outputpic =   localStorage.getItem("output") 
    document.getElementById("outputimg").src = outputpic+".png"
  var c= localStorage.getItem("cursor")
  var elementToChange = document.getElementsByTagName("body")[0];
 elementToChange.style.cursor = "url('"+ c +"'), auto";
}

