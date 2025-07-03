let currentScreen = 0;
let coins = 0;
let cluesUsed = 0;
let clueIndex = 0;

const screens = document.querySelectorAll('.screen');
const coinDisplay = document.getElementById('coin-count');
const clueText = document.getElementById('clue-text');
const funFacts = document.querySelectorAll('.fun-fact');

function showScreen(index) {
  screens.forEach(screen => screen.style.display = 'none');
  screens[index].style.display = 'block';
  currentScreen = index;
}

function nextScreen() {
  showScreen(currentScreen + 1);
}

function addCoins(amount) {
  coins += amount;
  coinDisplay.innerText = coins;
  spawnCoin();
}

function spawnCoin() {
  const coin = document.createElement('img');
  coin.src = 'coin.png';
  coin.style.position = 'fixed';
  coin.style.left = '50%';
  coin.style.top = '50%';
  coin.style.width = '60px';
  coin.style.transform = 'translate(-50%, -50%) scale(1.2)';
  coin.style.transition = 'transform 0.6s ease, opacity 1s';
  document.body.appendChild(coin);
  setTimeout(() => {
    coin.style.opacity = 0;
    coin.style.transform = 'translate(-50%, -50%) scale(3)';
  }, 100);
  setTimeout(() => {
    coin.remove();
  }, 1000);
}

function revealClue() {
  const clues = [
    "It's something edible 🍞",
    "It's a fruit thing 🍌",
    "It's popular in America and baked 🔥"
  ];
  if (clueIndex < clues.length) {
    clueText.innerText = clues[clueIndex];
    clueText.classList.remove('hidden');
    clueIndex++;
    cluesUsed++;
    nextScreen();
  }
}

function checkPassword() {
  const pass = document.getElementById('password-input').value.toLowerCase();
  if (pass === 'bananabread') {
    addCoins(5);
    nextScreen();
  } else {
    alert('Wrong password 😢');
  }
}

function checkQuizAnswer(correct) {
  if (correct) {
    addCoins(1);
    nextScreen();
  } else {
    alert('Oops! Try again.');
  }
}

function redeemCode() {
  const code = document.getElementById('redeem-input').value.toLowerCase().replace(/\s/g, '');
  if (code === 'playfortnitealready') {
    addCoins(10);
    alert('Bonus received!');
  } else {
    alert('Invalid code.');
  }
}

function showFinalClue() {
  if (coins >= 20) {
    nextScreen();
  } else {
    alert(`You need 20 coins! You only have ${coins}.`);
  }
}

// Show red-marked words one by one
let currentFact = 0;
function cycleFunFacts() {
  funFacts.forEach(fact => fact.style.display = 'none');
  funFacts[currentFact].style.display = 'block';
}
setInterval(() => {
  currentFact = (currentFact + 1) % funFacts.length;
  cycleFunFacts();
}, 5000);
