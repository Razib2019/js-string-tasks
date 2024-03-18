/***
Capitalize Every first Letter of each word in a String
 */
const mySentence =
  "The xylophone player performed a solo artist named Xubayer in the concert.";
const words = mySentence.split(" ");

for (let i = 0; i < words.length; i++) {
  words[i] = words[i][0].toUpperCase() + words[i].substring(1);
}
console.log(words.join(" "));
