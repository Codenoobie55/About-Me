'use strict';
//asking the user to play a game
var quizQuestion = confirm('Hello, do you think you can guess James\' hobbies');
//check information from the hobby input- it checks to see if the user wants to play the game
if(quizQuestion) {
  console.log('ok! lets play');
} else{
  console.log('are you sure you dont want to play?');
  alert('are you sure you dont want to play');
}
//starting to formulate questions in a Yes or No format--#1 out of 5 questions.
function questionOne(){
  quizQuestion = prompt('please answer with Y or N. Does James enjoy fishing?');
  if(quizQuestion.toUpperCase() === 'Y') {
    console.log('yes, he loves to catch Alaskan Salmon!');
    alert('yes, he loves to catch fresh Alaskan Salmon!');
  } else if (quizQuestion.toUpperCase() === 'N') {
    console.log('No! Great White sharks like to bite him in the ass');
    alert('No way! fising is to boring');
  }
}
// question 2 for project
function questionTwo(){
  quizQuestion = prompt('please answer with Y or N. Does James watch Game of Thrones?');
  if(quizQuestion.toUpperCase() === 'Y') {
    console.log('yes, he loves to watch Jon Snow die!');
    alert('yes, he loves to watch Jon Snow die!');
  } else if (quizQuestion.toUpperCase() === 'N') {
    console.log('No, Cersei Lannister is a raging bitch!');
    alert('No, Cersei Lannister is a raging bitch');
  }
}
 //question 3 for the project
function questionThree(){
  quizQuestion = prompt('please answer with Y or N. Does James have his pilots license?');
  if(quizQuestion.toUpperCase() === 'Y') {
    console.log('yes, he loves to fly to Paris and Zurich!');
  } else if (quizQuestion.toUpperCase() === 'N') {
    console.log('No, he flunked out of the Naval Aviator program!');
    alert('No, he flunked out of the Naval Aviator progam');
  }
}
  //question 4 in my quiz series for the project
function questionFour(){
  quizQuestion = prompt('please answer with Y or N. Does James scuba dive off of his boat?');
  if(quizQuestion.toUpperCase() === 'Y') {
    console.log('yes, he loves to dive and sail!');
  } else if (quizQuestion.toUpperCase() === 'N') {
    console.log('No, gas is way too much money!');
    alert('Nope. Gas is way too much money!'); }
}
//fifth and final project question
function questionFive(){
  quizQuestion = prompt('please answer with Y or N. Does James have a dog ?');
  if(quizQuestion.toUpperCase() === 'Y') {
    console.log('yes, he has a Chocolate Lab!');
  } else if (quizQuestion.toUpperCase() === 'N') {
    console.log('No, his Elkhound died when he was a boy.');}
}
//make a sixth question in the guessing game that takes a numeric input by prompting a user to guess a number.
function questionSix(){
  var howManyFish = 7;
  for(var i = 0; i < 4; i++){
    var quizQuestion = prompt('How many fish did I catch yesterday ?');
    if(quizQuestion > howManyFish) {
      alert('too high');
    } else if(quizQuestion < howManyFish){
      alert(' too low');
    }else{
      alert('Great Job!');
    }
  }
}

// Question 7: Here we are required to have another guessing questions. This question has 3 requirements.
// 1. Answer's must be stored in an array. 2. The user only has 6 tries. 3. The user gets a message if they guess correct of if they run out of tries.

  questionOne();
  questionTwo();
  questionThree();
  questionFour();
  questionFive();
  questionSix();
