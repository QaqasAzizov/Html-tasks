"use strict";
// const className = ['Qaqas','Ibrahim','Elnur','Musa','Nigar','Mircefer'];

// const [a, ,b, ...rest] = className

// console.log(rest);

// const oddNumbers = [1, 3, 5, 7, 9];

// const [first, ...rest] = oddNumbers;

// console.log(first + rest[rest.length - 1]);

// const me = {
//   firstName: "Qaqas",
//   lastName: "Azizov",
//   age: 15,
//   birthdate: 2008,
//   hobbies: ["driving", "watching"],
//   favouriteMovie: {
//     name: "Joker",
//     director: "Todd Philips",
//     releaseDate: 2019,
//   },
// };

// const {
//   firstName,
//   age,
//   favouriteMovie: { director },
//   hobbies : [first],
//   lastName,
// } = me;

//let i = 0;

//while (i <= 50) {
// if (i % 2 === 0) {
//console.log(i);
//  }
//  i++;
//}

// const worldWarEvents = new Map([
//   [1939, "German invasion of Poland"],
//   [1940, "German invasion of France"],
//   [1941, "Attack on Pearl Harbor"],
//   [1942, "Battle of Stalingrad"],
//   [1943, "Battle of Kursk"],
//   [1944, "D-Day invasion"],
//   [1945, "Atomic bombings of Hiroshima and Nagasaki"],
// ]);

//for (const [years, happened] of worldWarEvents) {
//   console.log(`${happened} happened in ${years}`);
//}

// const getEventByYear = (year) => {
//   if (worldWarEvents.has(year)) {
//     return worldWarEvents.get(year);
//   } else {
//     console.log(`No event found ${year}`);
//   }
// };
// console.log(getEventByYear(1945));

// worldWarEvents.clear();
// console.log(worldWarEvents);

// 6.07.2023

// Task 1

// const first = (string) => {
//   if (string.length > 20) {
//     console.log("uzunlugu 20den boyukdur");
//   }
//   if (string.length < 20) {
//     console.log("uzunlugu 20den kicikdir");
//   }
//   if (string.length == 20) {
//     console.log("uzunlugu 20e beraberdir");
//   }
// };

// first("hello");

// Task 2

// const countries = [
//   "Kazakhstan",
//   "Azerbaijan",
//   "Lativa",
//   "Uzbekistan",
//   "Turkmenistan",
//   "Iran",
// ];

// for (let i = 0; i < countries.length; i++) {
//   if(countries[i].endsWith("stan")){
//     console.log(countries[i]);
//   }
// }

//Task 3

// const name = "Heil Hitler!";
// const sentence = `Long live motherlands, ${name.repeat(5)}`;
// console.log(sentence);

// Task 4

// const name = "Heil Hitler!";
// const sentence = `Long live motherlands, ${name.repeat(5)}`;
// console.log(sentence.replaceAll(name,`88`));

// Task 5

// const checkSentence = (sentence) => {
//   const words = sentence.split(" ");

//   if (words.length > 1) {
//     console.log("The sentence contains more than one word.");
//   } else {
//     console.log("This is a one word sentence.");
//   }
// };

// checkSentence("salam")

// Task 6

// const howmanywords = (sentence) => {
//   const words = sentence.split(" ");
//   console.log(words.length);
// };

// howmanywords("hello world");

// Task 7

// const names = (firstname, lastname) => {
//   console.log(firstname.toUpperCase().concat(" ", lastname.toUpperCase()));
// };

// names("Qaqas","Azizov");

// Task 8

// const phonenumber = prompt("Whats Your Number?")

// let replacephonenumber = phonenumber.replaceAll(" ", "-").replace("0", "+994-");

// console.log(replacephonenumber);

// Task 9

// let cardnumber = "4169738842800026";

// cardnumber = cardnumber.slice(12);

// console.log(cardnumber.padStart(16, "*"));

// Task 10

// const word = "qaqasazizov";
// let newWord = "";

// for (let i = 0; i < word.length; i++) {
//   if (i % 2 === 0) {
//     newWord += word.charAt(i).toUpperCase();
//   } else {
//     newWord += word.charAt(i).toLowerCase();
//   }
// }

// console.log(newWord);
