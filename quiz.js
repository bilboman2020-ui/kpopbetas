const questions = [
{
text: "I prefer relationships where expectations are clearly defined.",
trait: "authority"
},
{
text: "I enjoy doing things that make a partner feel valued.",
trait: "service"
},
{
text: "Praise strongly affects my motivation.",
trait: "validation"
},
{
text: "Rules can make a dynamic feel meaningful.",
trait: "discipline"
},
{
text: "Anticipation is often more exciting than immediate reward.",
trait: "tension"
},
{
text: "Playful teasing usually doesn't bother me.",
trait: "ego"
}
];

let currentQuestion = 0;

let scores = {
authority:0,
service:0,
validation:0,
discipline:0,
tension:0,
ego:0
};

function startQuiz(){
document.getElementById("quiz").style.display = "block";
showQuestion();
}

function showQuestion(){

const q = questions[currentQuestion];

document.getElementById("question").innerText = q.text;

}

function answer(value){

const trait = questions[currentQuestion].trait;

scores[trait] += value;

currentQuestion++;

if(currentQuestion >= questions.length){
showResults();
}
else{
showQuestion();
}

}

function showResults(){

document.getElementById("quiz").style.display = "none";

document.getElementById("results").style.display = "block";

document.getElementById("resultText").innerText =
JSON.stringify(scores,null,2);

}
