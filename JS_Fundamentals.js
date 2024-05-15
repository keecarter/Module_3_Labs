//Question 1
/*                Prediction             Result
""+1+0              10                      10
""-1+0              -1                      -1
true+false           1                      1
!true               false                   false
6/"3"                2                      2
"2"*"3"              6                      6
4+5+"px"            45px                    9px
"$"+4+5             $45                     $45
"4"-2                 2                     2
"4px"-2             2px                     NaN
"-9"+5               -4                     -95
"-9"-5                -14                   -14
null+1              undefined                1
undefined+1         undefined               NaN
undefined==null       null                  true
undefined===null     null                   false
"\t \n"-2            NaN                      -2
*/

//Question 2

let three = "3"
let four = "4"
let thirty = "30"

let addition = three + four  //34, not correct, console is returning a string of "3"+"4" rather than adding the numbers 3+4
console.log(addition)
let multiplication = three * four  //12
console.log(multiplication)
let division = three / four    //0.75
console.log(division)
let subtraction = three - four  //-1
console.log(subtraction)
let lessThan1 = three < four //true
console.log(lessThan1)
let lessThan2 = thirty < four //true, not correct, the string "30" comes before the string "4" because 3 comes before 4
console.log(lessThan2)

//the incorrect solutions can be fixed by using parseInt to convert the strings to numbers

//Question 3
if (0) console.log('#1 zero is true') //did not print because 0 is an empty value
if ("0") console.log('#2 zero is true')//does print because "0" is a non-emty string 
if (null) console.log('null is true')//did not print because null is an object that does not exist
if (-1) console.log('negative is true')//does print because -1 is a number and not 0
if (1) console.log('positive is true')//prints because 1 is a non-zero number

//Question 4
let a = 6, b = 3;
let result = `${a} + ${b} is `;

/* if (a + b < 10) {
result += 'less than 10';
} else {
result += 'greater than 10';
} */
let result2 = (a + b < 10) ? result += 'less than 10' : result += 'greater than 10'
//console.log(result2)
//+= adds a value to an existing string

//Question 5
function getGreeting(name) {
  return 'Hello ' + name + '!';
}

//function expression syntax
const getGreeting2 = function (name) {
    return "Hello " + name + "!";
  };

//arrow function syntax
const getGreeting3 = (name) => "Hello " + name + "!";


//Question 6
const westley = {
    name: "Westley",
    numFingers: 5,
  };
  const rugen = {
    name: "Count Rugen",
    numFingers: 6,
  };
  const inigo = {
    firstName: "Inigo",
    lastName: "Montoya",
    greeting(person) {
      let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
      console.log(greeting + this.getCatchPhrase(person));
    },
    getCatchPhrase: (person) => person.numFingers === 6 ? "You killed my father! Prepare to die!" : "Nice to meet you",
  };

  /*inigo.greeting(rugen)
  inigo.greeting(westley)*/

  //Question 7
  const basketballGame = {
    score: 0, fouls: 0,
    
    freeThrow() {
    this.score++;
    return this;
    },

    basket() {
    this.score += 2;
    return this
    },

    threePointer() {
    this.score += 3;
    return this
    },

    halfTime() {
    console.log('Halftime score is '+this.score + ', with '+this.fouls+' fouls.');
    return this
    },
    
    fullTime(){
      console.log('Final score is '+this.score+ ', with '+this.fouls+' fouls.');
      return this
    },
    
    foul(){
      this.fouls++;
      return this;
    }
    }
    //modify each of the above object methods to enable function chaining as below:
    basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime();
    basketballGame.freeThrow().foul().basket().threePointer().foul().halfTime().freeThrow().foul().threePointer().basket().foul().fullTime()

    //Question 8
    const sydney = {
        name: "Sydney",
        population: 5_121_000,
        state: "NSW",
        founded: "26 January 1788",
        timezone: "Australia/Sydney",
      };
      function loop(city) {
        for (let key in city) {
          console.log(`${key}: ${city[key]}`);
        }
      }

      const atlanta = {
        name: "Atlanta",
        population: 6_192_507,
        state: "Georgia",
        founded: "1837",
        timezone: "EDT",
      };
    loop(sydney)
    loop(atlanta)

//Question 9
let teamSports = ["Hockey", "Cricket", "Volleyball"];
let dog1 = "Bingo";
let cat1 = { name: "Fluffy", breed: "Siberian" };

//a.
/*let moreSports = teamSports
moreSports.push("Basketball")
moreSports.unshift("Football")*/

//b.
/*let dog2 = dog1
dog2 = "Rocky"*/

//c.
/*let cat2 = cat1
cat2.name = "Kitty"*/

//d.
//console.log(dog1,cat1,teamSports,moreSports)

//Dog1 is a primitive value, therefore the original does not change. 
//Cat2 and moresports are objects, therefore they point to their originals and modify them. 

//e. 
/*let moreSports = [...teamSports];
moreSports.push("Basketball");
moreSports.unshift("Football");

let cat2 = { ...cat1 };
cat2.name = "Kitty"; */

//console.log(dog1,cat1,teamSports,moreSports)

//Question 10
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    this.canDrive = () => this.age > 16
    }

let person1 = new Person("Keidra", 25)
let person2 = new Person("Cherish", 26)

console.log(person1)
console.log(person2)

class PersonClass {
    constructor(name, age){
    this.name = name;
    this.age = age;
    this.human = true;
    this.canDrive = () => this.age > 16;
};
};

let person3 = new PersonClass("Trey", 3);
console.log(person3);

console.log(person1.canDrive(), person2.canDrive(), person3.canDrive());