/* eslint-disable no-unused-vars, no-useless-escape */

// I tried adding an extra \ next to the d and w, I'm sure what's still wrong 
const isValidCompanyUsername = (username, firstName, lastName) => {
  const regex = new RegExp(`^(sales|tech)\\d\\w-${firstName[0]}${lastName}\\d?$`);
  console.log(regex) 
  // to help you debug, look at the final regex
  return regex.test(username);
};
/** FEEDBACK: It wasn't passing because the console.log from below was empty and it was trying to run the function when there was no value inside. so you could not get the firstName[0] of null. */
// console.log(isValidCompanyUsername())

module.exports = {
  isValidCompanyUsername,
};
