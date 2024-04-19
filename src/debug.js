/* eslint-disable no-unused-vars, no-useless-escape */
// I tried adding an extra \ next to the d and w, I'm sure what's still wrong 
const isValidCompanyUsername = (username, firstName, lastName) => {
  const regex = new RegExp(`^(sales|tech)\\d\\w-${firstName[0]}${lastName}\\d?$`);
  console.log(regex) 
  // to help you debug, look at the final regex
  return regex.test(username);
};
console.log(isValidCompanyUsername())

module.exports = {
  isValidCompanyUsername,
};
