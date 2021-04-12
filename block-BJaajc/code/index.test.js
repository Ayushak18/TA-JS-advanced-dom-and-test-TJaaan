const { getFullName, isPalindrome, getCir, getArea } = require('./index');

// Positive Tests

// getFullName
test('This will return Ayush Kamboj', () => {
  expect(getFullName('Ayush', 'Kamboj')).toBe('Ayush Kamboj');
});

test('This will return Vaibhav Kamboj', () => {
  expect(getFullName('Vaibhav', 'Kamboj')).toBe('Vaibhav Kamboj');
});

test('This will return Pumba Simba', () => {
  expect(getFullName('Pumba', 'Simba')).toBe('Pumba Simba');
});

test('This is going to failed', () => {
  expect(getFullName('Fail', 'Test')).toBe('Fail Test');
});

// isPalindrome
test('This should give Madam is palindrome', () => {
  expect(isPalindrome('Madam')).toBe(true);
});

test('This should give raceCar is not a palindrome', () => {
  expect(isPalindrome('raceCar')).toBe(true);
});

// getCir
test('Should give the circumference of Circle', () => {
  expect(getCir(10)).toBe(
    `The circumference of the circle is 62.800000000000004`
  );
});

// getArea
test('Should give the area of Circle', () => {
  expect(getArea(10)).toBe(`The area of circle is 314`);
});

// Negative Tests

// getFullName
test('This is the first Negative Test', () => {
  expect(getFullName('Hakuna', 'Matata')).not.toBe('Ayush Kamboj');
});

test('Second Negative Test', () => {
  expect(getFullName('THis', 'That')).not.toBe('Hakuna Matata');
});

test('Third Negative Test which is going to be failed', () => {
  expect(getFullName('Ayush', 'Kamboj')).not.toBe('Ayush');
});

// isPalindrome
test('This should give Madam is palindrome', () => {
  expect(isPalindrome('Madam')).not.toBe(false);
});

test('This should give raceCar is not a palindrome', () => {
  expect(isPalindrome('raceCar')).not.toBe(false);
});

// getCir
test('Should give the circumference of Circle', () => {
  expect(getCir(10)).not.toBe(`The circumference of the circle is 62.83`);
});

// getArea
test('Should give the area of Circle', () => {
  expect(getArea(10)).not.toBe(`The area of circle is 3140`);
});
