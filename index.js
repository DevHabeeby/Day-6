// ========================================
// ARRAYS
// ========================================

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
];

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
];

const mernStack = ['MongoDB', 'Express', 'React', 'Node'];


// ========================================
// LEVEL 1
// ========================================

// 1. Iterate 0 to 10 using for loop

console.log("1. FOR LOOP 0 TO 10");

for (let i = 0; i <= 10; i++) {
  console.log(i);
}


// 1. Iterate 0 to 10 using while loop

console.log("WHILE LOOP 0 TO 10");

let i = 0;

while (i <= 10) {
  console.log(i);
  i++;
}


// 1. Iterate 0 to 10 using do while loop

console.log("DO WHILE LOOP 0 TO 10");

let j = 0;

do {
  console.log(j);
  j++;
} while (j <= 10);


// ========================================
// 2. Iterate 10 to 0
// ========================================

console.log("2. FOR LOOP 10 TO 0");

for (let i = 10; i >= 0; i--) {
  console.log(i);
}


console.log("WHILE LOOP 10 TO 0");

let a = 10;

while (a >= 0) {
  console.log(a);
  a--;
}


console.log("DO WHILE LOOP 10 TO 0");

let b = 10;

do {
  console.log(b);
  b--;
} while (b >= 0);


// ========================================
// 3. Iterate 0 to n
// ========================================

console.log("3. 0 TO N");

let n = 10;

for (let i = 0; i <= n; i++) {
  console.log(i);
}


// ========================================
// 4. Print # pattern
// ========================================

console.log("4. HASH PATTERN");

let pattern = "";

for (let i = 1; i <= 7; i++) {
  pattern += "#";
  console.log(pattern);
}


// ========================================
// 5. i x i
// ========================================

console.log("5. MULTIPLICATION");

for (let i = 0; i <= 10; i++) {
  console.log(`${i} x ${i} = ${i * i}`);
}


// ========================================
// 6. i, i², i³
// ========================================

console.log("6. POWERS");

console.log("i   i^2   i^3");

for (let i = 0; i <= 10; i++) {
  console.log(i, i ** 2, i ** 3);
}


// ========================================
// 7. EVEN NUMBERS
// ========================================

console.log("7. EVEN NUMBERS");

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}


// ========================================
// 8. ODD NUMBERS
// ========================================

console.log("8. ODD NUMBERS");

for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}


// ========================================
// 9. PRIME NUMBERS
// ========================================

console.log("9. PRIME NUMBERS");

for (let i = 2; i <= 100; i++) {

  let isPrime = true;

  for (let j = 2; j < i; j++) {

    if (i % j === 0) {
      isPrime = false;
      break;
    }

  }

  if (isPrime) {
    console.log(i);
  }
}


// ========================================
// 10. SUM OF 0 TO 100
// ========================================

console.log("10. SUM OF ALL NUMBERS");

let sum = 0;

for (let i = 0; i <= 100; i++) {
  sum += i;
}

console.log(
  `The sum of all numbers from 0 to 100 is ${sum}.`
);


// ========================================
// 11. SUM OF EVENS AND ODDS
// ========================================

console.log("11. SUM OF EVENS AND ODDS");

let evenSum = 0;
let oddSum = 0;

for (let i = 0; i <= 100; i++) {

  if (i % 2 === 0) {
    evenSum += i;
  } else {
    oddSum += i;
  }

}

console.log(
  `The sum of all evens from 0 to 100 is ${evenSum}.`
);

console.log(
  `The sum of all odds from 0 to 100 is ${oddSum}.`
);


// ========================================
// 12. SUM AS ARRAY
// ========================================

console.log("12. SUMS AS ARRAY");

let sums = [evenSum, oddSum];

console.log(sums);


// ========================================
// 13. ARRAY OF 5 RANDOM NUMBERS
// ========================================

console.log("13. FIVE RANDOM NUMBERS");

let randomNumbers = [];

for (let i = 0; i < 5; i++) {

  let number = Math.floor(Math.random() * 100);

  randomNumbers.push(number);

}

console.log(randomNumbers);


// ========================================
// 14. FIVE UNIQUE RANDOM NUMBERS
// ========================================

console.log("14. FIVE UNIQUE RANDOM NUMBERS");

let uniqueNumbers = [];

while (uniqueNumbers.length < 5) {

  let number = Math.floor(Math.random() * 100);

  if (!uniqueNumbers.includes(number)) {
    uniqueNumbers.push(number);
  }

}

console.log(uniqueNumbers);


// ========================================
// 15. SIX CHARACTER RANDOM ID
// ========================================

console.log("15. RANDOM ID");

let characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

let randomID = "";

for (let i = 0; i < 6; i++) {

  randomID +=
    characters[Math.floor(Math.random() * characters.length)];

}

console.log(randomID);


// ========================================
// LEVEL 2
// ========================================


// ========================================
// 1. RANDOM ID OF ANY LENGTH
// ========================================

console.log("LEVEL 2 - 1. RANDOM ID");

let idLength = 15;

let id = "";

for (let i = 0; i < idLength; i++) {

  id +=
    characters[Math.floor(Math.random() * characters.length)];

}

console.log(id);


// ========================================
// 2. RANDOM HEXADECIMAL NUMBER
// ========================================

console.log("LEVEL 2 - 2. HEX COLOR");

let hexCharacters = "0123456789abcdef";

let hex = "#";

for (let i = 0; i < 6; i++) {

  hex +=
    hexCharacters[Math.floor(Math.random() * hexCharacters.length)];

}

console.log(hex);


// ========================================
// 3. RANDOM RGB COLOR
// ========================================

console.log("LEVEL 2 - 3. RGB COLOR");

let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let blue = Math.floor(Math.random() * 256);

console.log(`rgb(${r},${g},${blue})`);


// ========================================
// 4. COUNTRIES IN UPPERCASE
// ========================================

console.log("LEVEL 2 - 4. UPPERCASE COUNTRIES");

let uppercaseCountries = [];

for (let country of countries) {

  uppercaseCountries.push(
    country.toUpperCase()
  );

}

console.log(uppercaseCountries);


// ========================================
// 5. COUNTRY LENGTHS
// ========================================

console.log("LEVEL 2 - 5. COUNTRY LENGTHS");

let countryLengths = [];

for (let country of countries) {

  countryLengths.push(country.length);

}

console.log(countryLengths);


// ========================================
// 6. COUNTRY INFORMATION
// ========================================

console.log("LEVEL 2 - 6. COUNTRY DATA");

let countryData = [];

for (let country of countries) {

  let abbreviation =
    country.substring(0, 3).toUpperCase();

  countryData.push([
    country,
    abbreviation,
    country.length
  ]);

}

console.log(countryData);


// ========================================
// 7. COUNTRIES CONTAINING LAND
// ========================================

console.log("LEVEL 2 - 7. COUNTRIES WITH LAND");

let landCountries = [];

for (let country of countries) {

  if (country.includes("land")) {
    landCountries.push(country);
  }

}

if (landCountries.length > 0) {
  console.log(landCountries);
} else {
  console.log("All these countries are without land");
}


// ========================================
// 8. COUNTRIES ENDING WITH IA
// ========================================

console.log("LEVEL 2 - 8. COUNTRIES ENDING WITH IA");

let iaCountries = [];

for (let country of countries) {

  if (country.endsWith("ia")) {
    iaCountries.push(country);
  }

}

if (iaCountries.length > 0) {
  console.log(iaCountries);
} else {
  console.log("These are countries ends without ia");
}


// ========================================
// 9. LONGEST COUNTRY
// ========================================

console.log("LEVEL 2 - 9. LONGEST COUNTRY");

let longestCountry = countries[0];

for (let country of countries) {

  if (country.length > longestCountry.length) {
    longestCountry = country;
  }

}

console.log(longestCountry);


// ========================================
// 10. COUNTRIES WITH 5 CHARACTERS
// ========================================

console.log("LEVEL 2 - 10. FIVE CHARACTER COUNTRIES");

let fiveLetterCountries = [];

for (let country of countries) {

  if (country.length === 5) {
    fiveLetterCountries.push(country);
  }

}

console.log(fiveLetterCountries);


// ========================================
// 11. LONGEST WORD IN WEBTECHS
// ========================================

console.log("LEVEL 2 - 11. LONGEST WEB TECHNOLOGY");

let longestTech = webTechs[0];

for (let tech of webTechs) {

  if (tech.length > longestTech.length) {
    longestTech = tech;
  }

}

console.log(longestTech);


// ========================================
// 12. WEBTECHS WITH LENGTH
// ========================================

console.log("LEVEL 2 - 12. WEBTECH DATA");

let techData = [];

for (let tech of webTechs) {

  techData.push([
    tech,
    tech.length
  ]);

}

console.log(techData);


// ========================================
// 13. MERN ACRONYM
// ========================================

console.log("LEVEL 2 - 13. MERN");

let acronym = "";

for (let tech of mernStack) {

  acronym += tech[0];

}

console.log(acronym);


// ========================================
// 14. PRINT ALL TECHNOLOGIES
// ========================================

console.log("LEVEL 2 - 14. TECHNOLOGIES");

let technologies = [
  "HTML",
  "CSS",
  "JS",
  "React",
  "Redux",
  "Node",
  "Express",
  "MongoDB"
];

for (let tech of technologies) {
  console.log(tech);
}


// ========================================
// 15. REVERSE FRUIT ARRAY
// ========================================

console.log("LEVEL 2 - 15. REVERSE FRUITS");

let fruits = [
  "banana",
  "orange",
  "mango",
  "lemon"
];

let reversedFruits = [];

for (let i = fruits.length - 1; i >= 0; i--) {

  reversedFruits.push(fruits[i]);

}

console.log(reversedFruits);


// ========================================
// 16. FULL STACK
// ========================================

console.log("LEVEL 2 - 16. FULL STACK");

const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"]
];

for (let stack of fullStack) {

  for (let item of stack) {

    console.log(item.toUpperCase());

  }

}


// ========================================
// LEVEL 3
// ========================================


// ========================================
// 1. COPY COUNTRIES
// ========================================

console.log("LEVEL 3 - 1. COPY COUNTRIES");

let countriesCopy = [...countries];

console.log(countriesCopy);


// ========================================
// 2. COPY AND SORT
// ========================================

console.log("LEVEL 3 - 2. SORTED COUNTRIES");

let sortedCountries = [...countries];

sortedCountries.sort();

console.log(sortedCountries);

console.log("Original countries:");
console.log(countries);


// ========================================
// 3. SORT WEBTECHS AND MERNSTACK
// ========================================

console.log("LEVEL 3 - 3. SORT ARRAYS");

let sortedWebTechs = [...webTechs];
let sortedMernStack = [...mernStack];

sortedWebTechs.sort();
sortedMernStack.sort();

console.log(sortedWebTechs);
console.log(sortedMernStack);


// ========================================
// 4. COUNTRIES WITH LAND
// ========================================

console.log("LEVEL 3 - 4. LAND COUNTRIES");

let countriesWithLand = countries.filter(
  country => country.includes("land")
);

console.log(countriesWithLand);


// ========================================
// 5. LONGEST COUNTRY
// ========================================

console.log("LEVEL 3 - 5. LONGEST COUNTRY");

let longest = countries[0];

for (let country of countries) {

  if (country.length > longest.length) {
    longest = country;
  }

}

console.log(longest);


// ========================================
// 6. COUNTRIES WITH LAND
// ========================================

console.log("LEVEL 3 - 6. LAND COUNTRIES");

let land = countries.filter(
  country => country.includes("land")
);

console.log(land);


// ========================================
// 7. COUNTRIES WITH 4 CHARACTERS
// ========================================

console.log("LEVEL 3 - 7. FOUR CHARACTER COUNTRIES");

let fourCharacterCountries = countries.filter(
  country => country.length === 4
);

console.log(fourCharacterCountries);


// ========================================
// 8. COUNTRIES WITH TWO OR MORE WORDS
// ========================================

console.log("LEVEL 3 - 8. MULTI-WORD COUNTRIES");

let multipleWordCountries = countries.filter(
  country => country.split(" ").length >= 2
);

console.log(multipleWordCountries);


// ========================================
// 9. REVERSE AND CAPITALIZE COUNTRIES
// ========================================

console.log("LEVEL 3 - 9. REVERSE COUNTRIES");

let reversedCountries = [];

for (let i = countries.length - 1; i >= 0; i--) {

  reversedCountries.push(
    countries[i].toUpperCase()
  );

}

console.log(reversedCountries);
