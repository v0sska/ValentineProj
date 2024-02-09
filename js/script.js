document.querySelector("#yes").addEventListener("click", clickYesButton);
document.querySelector("#no").addEventListener("click", clickNoButton);

var image = document.querySelector("#wha");
var h1 = document.querySelector("h1");
var h3 = document.querySelector("h3");
var gifContainer = document.getElementById("gif-container");

function clickYesButton(){

    image.src = "src/nya.jpg";

    let buttons = document.querySelectorAll(".button");
    buttons.forEach(button => button.style.display = "none");

    h1.textContent = "УРАУРААРУАРУУРА";
    h3.textContent = "люблю тебе настюшкінс:3";

    let audio = document.querySelector("#yesSound");
    audio.play();

    gifContainer.style.display = "flex";
}

function clickNoButton(){

    let noButton = document.querySelector("#no");

    image.src = "src/wha.jpeg";

    h1.textContent = "АХАХАХАХАХАХ,НАЇВНА))))";

    h3.textContent = "Вибач,але в тебе немає вибору:3";

    noButton.style.position = "absolute";
    noButton.style.left = Math.random() * (window.innerWidth - noButton.offsetWidth) + "px";
    noButton.style.top = Math.random() * (window.innerHeight - noButton.offsetHeight) + "px";

    let sound = document.querySelector("#noSound");
    sound.play();
}