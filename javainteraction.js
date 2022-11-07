var heading = document.getElementById('title');
var executeButton = document.getElementById('executeButton');
var outputParagraph = document.getElementById('outputText');
var inputElement = document.getElementById('myInput');
var auras = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "purple", "pink", "silver", "gold", "beige", "brown", "grey", "black", "white"];

executeButton.addEventListener("click", generate);
executeButton.addEventListener("click", restyle);

function generate() {
var inputText = inputElement.value;
var randomAura = Math.floor(Math.random()*auras.length);
outputParagraph.innerText = inputText + ", the color of your aura is "+ auras[randomAura] ;
}
function restyle() {
    var randomR = Math.random() * 255;
    var randomG = Math.random() * 255;
    var randomB = Math.random() * 255;
    var outputColorString = "rgb(" + randomR + "," + randomG + "," + randomB + ")";

    var randomFontSize = Math.floor(Math.random()*fonts.length);

    var randomRotate = -10 + (Math.random() * 15);

    outputParagraph.style.color = outputColorString;
    outputParagraph.style.fontSize = fonts[randomFontSize];
    outputParagraph.style.transform = "rotate(" + randomRotate + "deg)";
}
