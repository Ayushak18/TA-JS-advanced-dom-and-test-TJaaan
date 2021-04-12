function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

function isPalindrome(input) {
  input = input.toLowerCase();
  let splitedInput = input;
  return splitedInput === input;
}

function getCir(radius) {
  return `The circumference of the circle is ${2 * 3.14 * radius}`;
}

function getArea(radius) {
  return `The area of circle is ${3.14 * radius * radius}`;
}

module.exports = {
  getFullName,
  isPalindrome,
  getCir,
  getArea,
};
