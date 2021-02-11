'use strict';

let correctCount = 0;

// First question ( Users Name)
let userName = prompt('What is your name?');
alert('Hi ' + userName + ' welcome to my site!');

alert('Try out this guessing game and see how well you know me!. See you around ' + userName + "!");



// Second Question (My name question)
let nameResponse = prompt('Is My Name Elijah?').toLowerCase();

if (nameResponse === 'yes' || nameResponse === 'y') {
    alert('correct');
    correctCount++
    // console.log('correct')
} else if (nameResponse === 'no' || nameResponse === 'n') {
    alert('wrong');
    // console.log('wrong')
} else {
    alert('please write yes or no');
} 



// Third question ( my age question )
let myAgeResponse = prompt('Am I 25?').toLowerCase();

if (myAgeResponse === 'yes' || myAgeResponse === 'y') {
    alert('correct');
    correctCount++
    // console.log('correct')
} else if (myAgeResponse === 'no' || myAgeResponse === 'n') {
    alert('wrong');
    // console.log('wrong')
} else {
    alert('please write yes or no')
}



let dogsResponse = prompt('Do i have 4 dogs?').toLowerCase();

    if (dogsResponse === 'yes' || dogsResponse === 'y') {
        alert('wrong');
        // console.log('wrong')
    } else if (dogsResponse === 'no' || dogsResponse === 'n') {
        alert('correct');
        correctCount++
        // console.log('correct')
    } else {
        alert('please write yes or no');
    }

let jobResponse = prompt('Was my previous job a hair stylist?').toLowerCase();

    if (jobResponse === 'yes' || jobResponse === 'y') {
        alert('wrong');
        // console.log('wrong')
    } else if (jobResponse === 'no' || jobResponse === 'n'){
        alert('correct');
        correctCount++
        // console.log('correct')
    } else {
        alert('please write yes or no');
    }

let gf = prompt('Is my girlfriends name Hannah?');

    if (gf.toLowerCase() === 'yes') {
        alert('correct!');
        correctCount++
        // console.log('correct')
    } else if (gf.toLowerCase() === 'no'){
        alert('wrong')
        // console.log('wrong')
    } else {
        alert('please write yes or no');
    }


let numberOfGuesses = 4
let correctAnswer = '24'
console.log(24);




for(let i= 0; i < numberOfGuesses; i++){
    let askNumber = prompt('pick a number between 1 - 100');
    while (askNumber < 1 || askNumber > 100){
        askNumber = prompt('Incorrect. Please select a number 1-100');
    }
    console.log(askNumber, correctAnswer)
    if (askNumber === correctAnswer){
            alert('Great Job, you got it right');
            correctCount++
            break; 
    } else if (askNumber < correctAnswer){
            alert('Sorry, too low')
    } else if (askNumber > correctAnswer){
            alert('Sorry, too high')

    }
    if(i === 3 ){
    alert('Sorry ' + userName + ' The correct answer was 24!');
    
    }
}

let dogsList = ['german shepherd' , 'mastiff' , 'bulldog' , 'lab']

console.log('dog list' , dogsList)


for(let i= 1; i < 6; i++){
    let dogQuestion = prompt('Guess my favorite dog');
    if(dogQuestion === dogsList[0] || dogQuestion === dogsList[1] || dogQuestion === dogsList[2] || dogQuestion === dogsList[3]){
        alert('Correct!');
        break;
    } else {
        alert('Try Again');
    }


}
    alert('Thanks for playing ' + userName + ' in total you got ' + correctCount + ' right!')

    
