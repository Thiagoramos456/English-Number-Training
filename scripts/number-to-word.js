const randomNumberElement = document.querySelector('#number-to-guess');
const inputNumberElement = document.querySelector('#input-guess');
let answer;
const guessButton = document.querySelector('#btn-guess');

function generateRandomNumber(max) {
  const randomNumber = Math.floor(Math.random() * (max - 0));
  return randomNumber;
}

function startNewRound() {
  inputNumberElement.value = '';
  const generatedNumber = generateRandomNumber(100);
  randomNumberElement.innerText = generatedNumber;
  answer = humanize(generatedNumber).trim();
};

function guessNumber() {
  const userAnswer = inputNumberElement.value.toLowerCase();
  const feedback = answer === userAnswer 
    ? `Parabéns, você acertou!` 
    : `Ahh.. você errou. A resposta correta é ${answer}`
  alert(feedback)
  startNewRound();
}

window.onload = () => {
  startNewRound();
  guessButton.addEventListener('click', guessNumber);
}