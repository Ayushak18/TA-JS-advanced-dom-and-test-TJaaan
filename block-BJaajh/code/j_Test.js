function checkFive(num) {
  let result = '';
  if (num < 5) {
    result = num + ' is less than 5.';
  } else if (num === 5) {
    result = num + ' is equal to 5.';
  } else {
    result = num + ' is greater than 5.';
  }

  return result;
}

function getWinner(guess1, guess2) {
  if (
    guess1 === 'Rock' ||
    'Paper' ||
    ('Scissors' && guess2 === 'Rock') ||
    'Paper' ||
    'Scissors'
  ) {
    if (guess1 === guess2) {
      return 'Tie';
    } else if (guess1 === 'Papper' && guess2 === 'Rock') {
      return 'Paper beats Rock';
    } else if (guess1 === 'Scissors' && guess2 === 'Paper') {
      return 'Scissor beat Paper';
    } else if (guess1 === 'Rock' && guess2 === 'Scissors') {
      return `Rock beats Scissors`;
    }
  } else {
    return 'Incorrect Values';
  }
}

module.exports = {
  checkFive,
  getWinner,
};
