const name = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"];
var colorClass = ["thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twentyOne", "twentytwo", "twentythree", "twentyfour"];
var imgClass = ["imgOne", "imgTwo", "imgThree", "imgFour", "imgFive", "imgSix", "imgSeven", "imgEight", "imgNine", "imgTen", "imgEleven", "imgTwelve"];
var imgSrc = ["cat100.jpeg", "dog260.jpg", "dyna250.png", "egg345.jpeg", "pika364.jpg", "tiger800.png", "cat100.jpeg", "dog260.jpg", "dyna250.png", "egg345.jpeg", "pika364.jpg", "tiger800.png"];
var imgId = ["imgThirteen", "imgFourteen", "imgFifteen", "imgSixteen", "imgSeventeen", "imgEighteen", "imgNineteen", "imgTwenty", "imgTwentyOne", "imgTwentytwo", "imgTwentythree", "imgTwentyfour"];

function shuffle(colorClass) {
    var maxIndex = colorClass.length;
    var temporaryValue, randomIndex;
    while (maxIndex !== 0) {
        randomIndex = Math.floor(Math.random() * maxIndex);
        maxIndex -= 1;
        temporaryValue = colorClass[maxIndex];
        colorClass[maxIndex] = colorClass[randomIndex];
        colorClass[randomIndex] = temporaryValue;
    }
}

function addDiv(element, game, index) {
    var newDiv = document.createElement("div");
    game.appendChild(newDiv);
    newDiv.className = element + " " + colorClass[index];
    var newImg = document.createElement("img");
    newDiv.appendChild(newImg);
    newImg.className = imgClass[index];
    newImg.src = "./assets/image/" + imgSrc[index];
}

shuffle(imgSrc);
shuffle(colorClass);

var game = document.getElementById('game');
game.className = "container";

var index = colorClass.length - 1;
name.forEach(element => {
    addDiv(element, game, index);
    index -= 1;
});

var memorySrc = [];
var memory = [];
var dummy;
var temp;
var storeClass = [];

const container = document.querySelectorAll('.container')
container.forEach(element => {
    element.addEventListener('click', flipOperation);
})


function flipOperation(event) {
    if (memorySrc.length === 0) {
        dummy = document.getElementsByClassName(event.target.lastChild.className);
        temp = imgId[imgClass.indexOf(event.target.lastChild.className)];
        dummy[0].id = temp;
        memory.push(event.target.lastChild.className);
        memorySrc.push(event.target.lastChild.src);
    } else {
        if (memory.length === 1) {
            dummy = document.getElementsByClassName(event.target.lastChild.className);
            temp = imgId[imgClass.indexOf(event.target.lastChild.className)];
            dummy[0].id = temp;
            memory.push(event.target.lastChild.className);
            memorySrc.push(event.target.lastChild.src);
            if (memorySrc[0] === memorySrc[1]) {
                memorySrc = [];
                memory = [];
            } else {
                function erase() {
                    dummy = document.getElementsByClassName(memory[0]);
                    dummy[0].id = '';
                    dummy = document.getElementsByClassName(memory[1]);
                    dummy[0].id = '';
                    memory = [];
                    memorySrc = [];
                }
                setTimeout(erase, 1000);
            }
        }
    }

}