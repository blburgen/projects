// Possible 8 Ball responses
let responses = [ "Without a doubt", "Ask again later", "Don't count on it", "It is certain", "Reply hazy", 
    "try again","It is decidedly so", "My reply is no", "Better not tell you now", "My sources say no",
    "Yes definitely", "Cannot predict now", "Outlook not so good", "You may rely on it", "Concentrate and ask again",
    "Very doubtful", "As I see it, yes", "Most likely", "Outlook good", "Yes"];
let question = (prompt("What do you want to ask the magic 8 ball? \n (Yes or No Questions please.)"));


// Display a randomly chosen response
let randomNum = Math.floor(Math.random() * responses.length);
let randomTime = Math.floor(Math.random() * 6);
let lastNumberGiven = Math.max(randomTime+1,2);
const questionCustomer = document.getElementById("questionCustomer");
const answerDelay = document.getElementById("answerDelay");
const answerCustomer = document.getElementById("answerCustomer");
const askAgain = document.getElementById("askAgain");
if (question == null || question == ""){
    question = "Do you not have a question?";
    responses = ["Ask again later"];
    randomNum = Math.floor(Math.random() * responses.length);
    randomTime = 0;
    lastNumberGiven = 0;
};
questionCustomer.innerHTML = ("<h2>" + question + "</h2>");

timeDelay();
setTimeout(thisIsHard, 1000 * randomTime);

// this should be on the second line
function timeDelay() {
    if (randomTime <= 1){
        answerDelay.innerHTML = ("<p style='text-align: center;'>This one is too easy... <strong>Can you give me " + randomTime + " seconds</strong>.</p>");
    } else if (randomTime <= 2) {
        answerDelay.innerHTML = ("<p style='text-align: center;'>This one is easy... <strong>Can you give me " + randomTime + " seconds</strong>.</p>");
    }else if (randomTime <= 3) {
        answerDelay.innerHTML = ("<p style='text-align: center;'>This one is a little harder... <strong>Can you give me " + randomTime + " seconds</strong>.</p>");
    }else if (randomTime <= 4) {
        answerDelay.innerHTML = ("<p style='text-align: center;'>This one is starting to get hard... <strong>Can you give me " + randomTime + " seconds</strong>.</p>");
    }else {
        answerDelay.innerHTML = ("<p style='text-align: center;'>This one is hard... <strong>Can you give me " + randomTime + " seconds</strong>.</p>");
    };
}
//this should be on the third line
function thisIsHard(){
    answerCustomer.innerHTML = ("<p style='text-align: center;'>Magic 8 Ball says... <strong>" + responses[randomNum] + "</strong>.</p>");
}
function randomNumbers(){
    randomNum = Math.floor(Math.random() * responses.length);
    randomTime = Math.floor(Math.random() * lastNumberGiven);
    lastNumberGiven = Math.max(randomTime+1,2);
}
function askSecondTime(){
    randomNumbers();
    timeDelay();
    answerCustomer.innerHTML = ("<p style='text-align: center;'>Magic 8 Ball says... <strong></strong>.</p>");
    setTimeout(thisIsHard, 1000 * randomTime);
};
askAgain.addEventListener("click",askSecondTime);