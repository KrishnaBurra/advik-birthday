// script.js

let coins = 0;
let cluesFound = 0;

function updateDisplay() {
  document.getElementById('coins').textContent = coins;
  document.getElementById('clues').textContent = cluesFound;
}

function findClue() {
  cluesFound++;
  coins += 5;
  updateDisplay();
  alert('Clue found! +5 coins');
}

function checkPassword() {
  const passwordInput = document.getElementById('passwordInput').value.toLowerCase();
  if (passwordInput === 'bananabread') {
    alert('Password correct! You unlocked the next step!');
    // Add code here to reveal more clues or next steps if you want
  } else {
    alert('Wrong password. Try again!');
  }
}

function idiotTest() {
  const answer = prompt('Are you an idiot? (yes/no)').toLowerCase();
  if (answer === 'no') {
    alert('Good, you passed!');
  } else if (answer === 'yes') {
    alert('Hmm, try again if you want to proceed!');
  } else {
    alert('Please answer yes or no.');
  }
}

window.onload = function() {
  updateDisplay();
};
