//Question 1
function ucFirstLetters(str) {
    let array = str.split(' ') //splits the input string into an array of words
    let upperCase = []; //creates an empty array to store the modified words
    for (let i = 0; i < array.length; i++) { //iterates through each word in the array
      upperCase.push(array[i].charAt(0).toUpperCase() + array[i].slice(1)); //pushes the word with its first letter capitalized 
    }
    return upperCase.join(' ');
};
//console.log(ucFirstLetters("los angeles"));
//console.log(ucFirstLetters("alpha beta gamma delta epsilon"))

//Question 2
function truncate(str, max) {
  if (str.length > max) return str.substring(0, max) + "...";
  else return str;
}

truncate2 = (str, max) => str.length > max ?  str.substring(0, max) + '...' : str
//console.log(truncate('This text will be truncated if it is too long', 25));
//console.log(truncate2('This text will be truncated if it is too long', 25));

//Question 3
const animals = ["Tiger", "Giraffe"];
// add 2 values to end of array
animals.push("Lion");
animals.push("Jaguar");
animals.push("Monkey"); //added because array was even number so middle object could not be replaced, instead something was added
// add 2 values to end of array
animals.unshift("Bear");
animals.unshift("Snake");

//sorts array values alphabetically
animals.sort();

//replaces value in the middle of animals array
function replaceMiddleAnimal(newValue) {
  animals.splice(3, 1, newValue);
  return animals;
}
//console.log(animals)
//console.log(replaceMiddleAnimal('Panda'))

//part e
function findMatchingAnimals(beginsWith) {
  let match = [];
  for (let animal of animals) {
    if (
      animal.substring(0, beginsWith.length).toLowerCase() === beginsWith.toLowerCase()) {
      match.push(animal);
    }
  }
  return match;
}

//console.log(findMatchingAnimals("j"));

//Question 4
//a
function camelCase(cssProp) {
  return cssProp
  .split("-")
  .map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1))
  .join("");
}

//b
function camelCase2(cssProp) {
  const properties = cssProp.split("-");
  let result = properties[0];
  for (let i = 1; i < properties.length; i++) {
    result += properties[i][0].toUpperCase() + properties[i].slice(1);
  }
  return result;
}

//c - conditioal operator
function camelCase3(cssProp) {
  let a = cssProp.split("-");
  x = "";
  for (let i of a) {
    x === "" ? (x += i) : (x = x + i[0].toUpperCase() + i.substring(1));
  }
  return x;
}

function camelCase4(cssProp) {
  let result = "";
  let capitalLetter = false;
  for (let i = 0; i < cssProp.length; i++) {
    if (cssProp[i] === "-") {
      capitalLetter = true;
    } else {
      if (capitalLetter) {
        result += cssProp[i].toUpperCase();
        capitalLetter = false;
      } else {
        result += cssProp[i];
      }
    }
  }
  return result;
}

console.log(camelCase4("margin-left")); // marginLeft
console.log(camelCase4("background-image")); // backgroundImage
console.log(camelCase4("display")); // display


//Question 5
let twentyCents = 0.20
let tenCents = 0.10

//console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);

//onsole.log(fixedTwenty + fixedTen)
 /* a. this does not work because toFixed converts a 
number to a string and the addition sign concatinates 2 strings. */

//b
function currencyAddition(float1, float2) {
  return Number((float1 + float2).toFixed(2));
};

//c and d
function currencyOperation(float1, float2, operation, numDecimals) {
  switch (operation) {
    case "+":
      return (float1 + float2).toFixed(numDecimals);
      break;
      case "-":
      return (float1 - float2).toFixed(numDecimals);
      break;
      case "/":
      return (float1 / float2).toFixed(numDecimals);
      break;
      case "*":
      return (float1 * float2).toFixed(numDecimals);
      break;
      default:
          console.log(
            "Invalid operation."
          );
  }
}

  //console.log(currencyOperation(twentyCents, tenCents, "+", 2))

  //Question 6
  const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow'];
  const testSores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];
  const cars = ['Honda', 'Kia','Ferrari', 'Mustang', 'Ford', 'Honda','Kia','Lincoln']
  
  function unique(duplicatesArray) {
    let a = [];
   for (i = 0; i < duplicatesArray.length; i++) {
    if (a.indexOf(duplicatesArray[i]) === -1) {
      a.push(duplicatesArray[i]);
    }
   }
   return a
  }
  //console.log(unique(cars))

  //Question 7
  const books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { id: 3, title: "1984", author: "George Orwell", year: 1949 },
    { id: 4, title: "Brave New World", author: "Aldous Huxley", year: 1932 },
    { id: 5, title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
  ];
//a. 
function getBookTitle(bookId) {
  const bookTitle = books.find(book => book.id === bookId);
  return bookTitle.title
}

//console.log(getBookTitle(3))

//b. 
function getOldBooks() {
  const oldBooks = books.filter(book => book.year < 1950);
  return oldBooks
}

//console.log(JSON.stringify(getOldBooks()));

//c.
function addGenre(genre) {
  const genres = books.map(book => ({...book, genre: genre}))
  return genres
}

//console.log(JSON.stringify(addGenre('Classic')))

//d. 
function getTitles(authorInitial) {
  const bookByAuthor = books.filter(book => book.author[0] === authorInitial);
  const titles = bookByAuthor.map(book => book.title);
  return titles
}

//console.log(getTitles('A'))

//e.
function latestBook() {
  let latestYear = 1920
  books.forEach(book => {
      if (book.year > latestYear) {
          latestYear = book.year
      }
  })
  return books.find(book => book.year == latestYear)
}
//console.log(latestBook())

//Question 8
const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

//a and b
const phoneBookDEF = new Map()
phoneBookDEF.set('Drake','0406060606')
phoneBookDEF.set('Elizabeth','0410101010')
phoneBookDEF.set('Fiona','0402020202')

//c
phoneBookABC.set('Caroline','1804123456')

//d
function printPhoneBook(contacts) {
  for (let [name, phoneNumber] of contacts) {
    console.log(`${name}: ${phoneNumber}`);
  }
}

//e
const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF])

//f
//printPhoneBook(phoneBook)

//Question 9
let salaries = {
  "Timothy": 35000,
  "David": 25000,
  "Mary": 55000,
  "Christina": 75000,
  "James": 43000,
};

//a
function sumSalaries(salaries) {
  let sum = 0;
  for (let value in salaries){
      sum += salaries[value]
  };
  return sum
}

//console.log(sumSalaries(salaries))

//b
function topEarner(salaries) {
  let topSalary = 0
  let name = ""
  for (let person in salaries) {
      if (salaries[person] > topSalary) {
          topSalary = salaries[person]
          name = person
      }
  }
  let topEarner = {
      [name]: topSalary
  }
  return topEarner
}
//console.log(topEarner(salaries))

//Question 10
const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getHours() + ' hours have passed so far today')

//a
const totalMinutes = today.getHours() * 60 + today.getMinutes();
console.log(totalMinutes + ' minutes have passed so far today');

//b
const totalSeconds = totalMinutes * 60 + today.getSeconds();
console.log(totalSeconds + ' seconds have passed so far today');

//c
const birthday = new Date("April 10, 1999");

console.log(
  `I am ${today.getFullYear() - birthday.getFullYear()} years, 
  ${birthday.getMonth()} months, ${birthday.getDate()} days old`
);

//d
function daysInBetween(date1, date2) {
  let day1 = new Date(date1).getTime() / 1000 / 60 / 60 / 24;
  let day2 = new Date(date2).getTime() / 1000 / 60 / 60 / 24;
  number = day2 - day1;
  return number
}

//console.log(daysInBetween(('April 10,2024'), ('April 20, 2024')))
