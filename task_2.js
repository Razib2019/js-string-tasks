/***
Count how many times a string has the letter "a" or "A"
 */

const sentence = "Amar Sonar Bangla Ami Tomar Valobashi";
let sum = 0;
for (const letter of sentence) {
  if (letter === "a" || letter === "A") {
    sum += 1;
  }
}
console.log(sum);
