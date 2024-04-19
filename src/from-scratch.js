const helloWorldRegex = (str) => {
 return /Hello World/gi.test(str)
};

const hasAVowel = (str) => {
  return /[aeiou]/gi.test(str)
};

const hasCatsOrDogs = (str) => {
  return /(dogs|cats)/gi.test(str)
};

const hasVowelStart = (str) => {
  return /^[aeiou]/gi.test(str)
};

const hasPunctuationEnd = (str) => {
  return /[.!?]$/g.test(str)
};

const hasNothingOrDigits = (str) => {
  return /^\d*$/gi.test(str)
};

const hasNoFlippers = (str) => {
  return /^[^BCcDEHIKOoXxl]*$/g.test(str)
};

const isValidEmail = (str) => {
  return /^([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/g.test(str)
};
// I've searched the internet and none of the combinations I've found works.
const isValidPhoneNumber = (str) => {
  return /^\d{3}[-.\s]?\d{3}[-.\s]?\d{4}$/gi.test(str)
};

const matchAllNumbers = (str) => {
  let testMatch = str.match(/\d+/g)
return testMatch ? testMatch: []
 
};

const matchAllNumbersAsNumbers = (str) => {
  let match = str.match(/\d+/g)
  return match ? match.map(num => num * 1) : []
};

const matchAllWords = (str) => {
  let wordMatch = str.match(/[a-z'"]+/gi)
  return wordMatch ? wordMatch : []
};

const replaceAllNumbers = (str) => {
  let regex = /\d+/g
  return str.replace(regex, '???') 
};
// I was confused on one of the tests that wants me to close the gap in "hello  wolrd "
const fixFileName = (str) => {
  let regex = /\s/g
  return str.replace(regex , '_')
};
// I don't know how to stop the I in ITZEL to not clash with capital  alone 
const nameRedacter = (str) => {
  let regex = /\b(?!AI)(?!a|i)[A-Z]+\b/g
  return str.replace(regex, ' REDACTED')
};

const camelToSnakeCase = (str) => {
  let regex = /[A-Z]/g
  return str.replace(regex, (match) => '_' + match.toLowerCase())
};

module.exports = {
  helloWorldRegex,
  hasAVowel,
  hasCatsOrDogs,
  hasVowelStart,
  hasPunctuationEnd,
  hasNothingOrDigits,
  hasNoFlippers,
  isValidEmail,
  isValidPhoneNumber,

  matchAllNumbers,
  matchAllNumbersAsNumbers,
  matchAllWords,

  replaceAllNumbers,
  fixFileName,
  nameRedacter,
  camelToSnakeCase,
};
