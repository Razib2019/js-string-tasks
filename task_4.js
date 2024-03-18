/***
If a given string has either "x", replace "x" by "y". if the given string has "X", replace it by "Y".
Hint: You should be able to check whether "x" or "X" exists. After that, search online how to replace a character in a string.
 */

let sentence =
  "The xylophone player performed a solo artist named Xubayer in the concert.";
if (sentence.includes("x") || sentence.includes("X")) {
  let firstCheck = sentence.replaceAll("x", "y");
  let secondCheck = firstCheck.replaceAll("X", "Y");
  console.log(secondCheck);
}
