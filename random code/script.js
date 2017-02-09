'use strict';
var responseOne = confirm('Hello, would you like to take a quiz?');

if(responseOne) {
  console.log('Chocolate Chip MuffinZ!');
} else {
  console.log('too bad, starting anyways.');
}
var quizResponseOne = prompt('please answer with Y or N. Does James have a dog?');

if(quizResponseOne.toUpperCase() === 'Y'){
  console.log('too bad, starting anyways.');
} else {
  console.log('Yes, Jon!');
}
