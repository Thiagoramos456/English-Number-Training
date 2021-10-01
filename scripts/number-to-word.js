const randomNumberElement = document.querySelector('#number-to-guess');
const inputNumberElement = document.querySelector('#input-guess');
let answer;
const guessButton = document.querySelector('#btn-guess');

// Credits to : https://gist.github.com/ForbesLindesay/5467742
function humanize(num){
  var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
              'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
              'seventeen', 'eighteen', 'nineteen'];
  var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
              'ninety'];

  var numString = num.toString();

  if (num < 0) throw new Error('Negative numbers are not supported.');

  if (num === 0) return 'zero';

  //the case of 1 - 20
  if (num < 20) {
    return ones[num];
  }

  if (numString.length === 2) {
    return tens[numString[0]] + ' ' + ones[numString[1]];
  }

  //100 and more
  if (numString.length == 3) {
    if (numString[1] === '0' && numString[2] === '0')
      return ones[numString[0]] + ' hundred';
    else
      return ones[numString[0]] + ' hundred and ' + humanize(+(numString[1] + numString[2]));
  }

  if (numString.length === 4) {
    var end = +(numString[1] + numString[2] + numString[3]);
    if (end === 0) return ones[numString[0]] + ' thousand';
    if (end < 100) return ones[numString[0]] + ' thousand and ' + humanize(end);
    return ones[numString[0]] + ' thousand ' + humanize(end);
  }
}

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