const swapAllCases = (str) => {
return str.replace(/[a-zA-Z]/g, letter => {
 return letter.match(/[A-Z]/g) ? letter.toLowerCase() : letter.toUpperCase()
})

}
let test = swapAllCases('SpONGeBoB TeXT')
console.log(test)

module.exports = {
  swapAllCases,
};
