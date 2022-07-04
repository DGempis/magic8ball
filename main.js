// Ball Container Elements
const ballContainer = document.getElementById("ball-container");
const eightBallImage = document.getElementById("eight-ball-ele");


// Text Container Elements
const textContainer = document.getElementById("text-container");
const askButton = document.getElementById("ask-btn");
const newButton = document.getElementById("new-btn");

// 8 ball responses

const ballResponse = ["It is certain", "Without a doubt", "Yes - definitely", "Check your slack", "As I see it, yes", "Most likely", "Yes! Wait, No", "Signs point to yes", "Ask again later", "404 error", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful", "Out of memory"];

console.log(ballResponse)
console.log(ballResponse.length); // Length = 18

// 8 Ball Random Response Function
function randomResponse(){
    let randomAnswer = Math.floor(Math.random() * 19) 
    console.log(ballResponse[randomAnswer]);
    return ballResponse[randomAnswer]
};

// Button Functions

askButton.addEventListener("click", function(){
    randomResponse();
    ballContainer.classList.add("ball-animation");
});

newButton.addEventListener("click", function(){
    window.location.reload();
});





