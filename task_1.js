/***
 Count how many times a string has the letter "a"
 */

const sentence = "Amar Sonar Bangla Ami Tomar Valobashi";
let sum = 0;
for (const letter of sentence) {
  if (letter === "a") {
    sum += 1;
  }
}
console.log(sum);
