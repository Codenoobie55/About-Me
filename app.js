'use strict';
//asking the user to play a game
var quizQuestion = confirm('Hello, do you think you can guess James\' hobbies');
//check information from the hobby input- it checks to see if the user wants to play the game
if(quizQuestion) {
  console.log('ok! lets play');
} else{
  console.log('are you sure you dont want to play?');
}
//starting to formulate questions in a Yes or No format--#1 out of 5 questions.
function questionOne(){
  quizQuestion = prompt('please answer with Y or N. Does James enjoy fishing?');
  if(quizQuestion.toUpperCase() === 'Y') {
    console.log('yes, he loves to catch Alaskan Salmon!');
  } else if (quizQuestion.toUpperCase() === 'N') {
    console.log('No! Great White sharks like to bite him in the ass');
  }
}
// question 2 for project
function questionTwo(){
  quizQuestion = prompt('please answer with Y or N. Does James watch Game of Thrones?');
  if(quizQuestion.toUpperCase() === 'Y') {
    console.log('yes, he loves to watch Jon Snow die!');
  } else if (quizQuestion.toUpperCase() === 'N') {
    console.log('No, Cersei Lannister is a raging bitch!');
  }
}
 //question 3 for the project
function questionThree(){
  quizQuestion = prompt('please answer with Y or N. Does James have his pilots license?');
  if(quizQuestion.toUpperCase() === 'Y') {
    console.log('yes, he loves to fly to Paris and Zurich!');
  } else if (quizQuestion.toUpperCase() === 'N') {
    console.log('No, he flunked out of the Naval Aviator program!');
  }
}
  //question 4 in my quiz series for the project
function questionFour(){
  quizQuestion = prompt('please answer with Y or N. Does James scuba dive off of his yacht in the Florida ?');
  if(quizQuestion.toUpperCase() === 'Y') {
    console.log('yes, he loves to dive and sail!');
  } else if (quizQuestion.toUpperCase() === 'N') {
    console.log('No, his yacht sank and he floated until the coast guard rescued him!');}
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
  quizQuestion = prompt('How many fish did I catch yesterday ?');
  var howManyFish = 7;
  var userGuess = 4;
  if(userGuess > howManyFish) {
    console.log('too high');
    alert('wrong! Try again');
  } else if(userGuess < howManyFish){
    console.log('too low');
    alert('wrong! Try again');
  }else{
    alert('Great Job!');
  }
}

questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();
questionSix();
