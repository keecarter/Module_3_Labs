//Question 1
/*function makeCounter(startFrom = 0, incrementBy = 1) { //b
    let currentCount = startFrom;

    return function() {
        currentCount += incrementBy; //c
        console.log(currentCount)
        return currentCount;
    };
}
let counter1 = makeCounter();
counter1(); //1
counter1(); //2

//a
let counter2 = makeCounter();
counter2();
counter2();

//testing startFrom
let counter3 = makeCounter(8);
counter3();
counter3();

//testing incrementBy
let counter4 = makeCounter(3, 3);
counter4();
counter4();
*/

//Question 2
/*function delayMsg(msg)
{
console.log(`This message will be printed after a delay: ${msg}`)
}

setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all')

//a. The tests will print in the following order: 4, 3, 2, 1 because the the delays are printed from least to greatest. 

//b
const delayMsg = (msg) => {
    console.log(`This message will be printed after a delay: ${msg}`)
}

//c and d
let cancelMsg = setTimeout(delayMsg, 15000, '#5: Delayed by 15s')  
clearTimeout(cancelMsg);
*/

//Question 3
/*function debounce(func, ms) { //a
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func(...args);
        }, ms);                //b
        };
    }

function printMe(msg) {
console.log('printing debounced message', msg) //c
}
printMe = debounce(printMe, 1000); //create this debounce function for a)
//fire off 3 calls to printMe within 300ms - only the LAST one should print, after 1000ms of no calls
setTimeout(() => printMe("Test 1"), 100);
setTimeout(() => printMe("Test 2"), 200);
setTimeout(() => printMe("Test 3"), 300);
*/

//Question 4
//a
/*function printFibonacci() {
    let[prev, curr] = [0, 1];
    let interval = setInterval(() => {
        console.log(`[Interval] ${curr}`);
        [prev, curr] = [curr, prev + curr];
    }, 1000);
    return interval;
}

const intervalId = printFibonacci();

setTimeout(() => {
    clearInterval(intervalId);
    console.log('Stopped printing interval Fibonacci sequence after ten seconds')
}, 10000);

//b
function printFibonacciTimeouts (limit) {
    let [prev, curr] = [0, 1];
    let count = 0;
//c
    function printNext() {
        if (count >= limit) {
            return; 
        }
        console.log(`[Timeout] ${curr}`); [prev, curr] = [curr, prev + curr];
        count++;

        setTimeout(printNext, 1000);
    }
    printNext()
}

printFibonacciTimeouts(5);
*/

//Question 5
//The setTimeout function fails because it's calling for car.description but there is no car, therefore it is undefined
/*let car = {
    make: "Porsche",
    model: "911",
    year: 1964,
    description() {
      console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
    },
  };
  car.description(); //works

  //a
  setTimeout(() => car.description(), 200)

  //b
  let car2017 = {...car, year: 2017}

  //c. The delayed description() uses the original values because setTimeout was set to refer to the original car
  //d
  setTimeout(car.description.bind(car), 300);

  //e
  let carFord = {...car, model: "Cayenne"}; 
  carFord.description();
    setTimeout(car.description.bind(car), 300);
*/

//Question 6

//a 
/*Function.prototype.delay = function (ms) {
    let func = this;
    return function (a, b) {
      setTimeout(() => func(a, b), ms);
    };
  };

  //b
  Function.prototype.delay = function(ms) { 
    let func = this;
    return function(...args) {
        setTimeout(() => func.apply(null, args), ms)
    };
};

  function multiply(a, b) {
    console.log( a * b);
}

multiply.delay(500)(5, 5); //prints 25 after 500 milliseconds

//c
function multiply(a, b, c, d) {
    console.log(a * b * c * d)
}

multiply.delay(1000)(2, 4, 6, 8)
*/

//Question 7
/*
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;

//a
this.toString = function() {
    return `Name = ${this.name}, Age = ${this.age}, Gender = ${this.gender}`
  }
}

const person1 = new Person('James Brown', 73, 'male')
console.log('Person 1: '+person1) //prints person1: [object Object]

//b
const person2 = new Person('Miley Cyrus', 31, 'female')
console.log('Person 2: '+person2)

//c
function Student(name, age, gender, cohort) {  
    Person.call(this, name, age, gender);
    this.cohort = cohort;
}

Student.prototype = Object.create(Person.prototype);  
Student.prototype.constructor = Student;
Student.prototype.toString = function() {
    return Person.prototype.call(this) + `, cohort=${this.cohort}`
}

//d
const student1 = new Student('Aubrey Graham', 37, 'male', '2010')
const student2 = new Student('Kendrick Lamar', 36, 'male', '2011')

console.log(`Student 1: `+ student1)
console.log(`Student 2: `+ student2)

//Question 8
class DigitalClock {
    constructor(prefix) {
      this.prefix = prefix;
    }
    display() {
      let date = new Date();
      //create 3 variables in one go using array destructuring
      let [hours, mins, secs] = [date.getHours(), date.getMinutes(), date.getSeconds()];
      if (hours < 10) hours = "0" + hours;
      if (mins < 10) mins = "0" + mins;
      if (secs < 10) secs = "0" + secs;
      console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
    }
    stop() {
      clearInterval(this.timer);
    }
    start() {
      this.display();
      this.timer = setInterval(() => this.display(), 1000);
    }
  }
  //const myClock = new DigitalClock("my clock:");
  //myClock.start();

  //a
  class PrecisionClock extends DigitalClock {
    constructor(prefix, precision = 1000) {
      super(prefix);
      this.precision = precision;
    }
    start() {
      this.display();
      this.timer = setInterval(() => this.display(), this.precision);
    }
  }
  
  //const preciseClock = new PrecisionClock("Precise Clock: ", 500);
  //preciseClock.start();

  //b
  class AlarmClock extends DigitalClock {   // create AlarmClock that inherits DigitalClock
    constructor(prefix, wakeupTime = "07:00:00") {
        super(prefix);
        this.wakeupTime = wakeupTime;
    }
    display() {
    super.display();
    let date = new Date();
    let [hours, mins, secs] = [date.getHours(), date.getMinutes(), date.getSeconds()]
    .map(num => num < 10 ? '0' + num : num.toString());
    let currentTime = `${hours}:${mins}` + (this.wakeupTime.length === 5 ? '' : `:${secs}`);
    if (currentTime === this.wakeupTime) {
        console.log('Time to wake up!');
        this.stop();
    }
}
}

const alarmClock = new AlarmClock('Alarm Clock: ', "20:38")
alarmClock.start()
*/

//Question 9
/*
//a
function randomDelay() {
  return new Promise((resolve, reject) => {     //b
      let delay = Math.floor(Math.random() * 20 + 1) * 1000;
      setTimeout(() => {
          if (delay % 2000 === 0) {
              resolve(delay);
          } else {
              reject(delay)
          }
      }, delay);
  })
}

//c and d
randomDelay().then((delay) => console.log(`Delay of ${delay / 1000} seconds was successful.`))
randomDelay().catch((delay) => console.log(`Delay of ${delay / 1000} seconds failed due to odd number.`));
*/

//Question 10
/*
function fetchURlData(url) {
  let fetchPromise = fetch(url).then(response => {
    if (response.status == 200) {
      return response.json();
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  });
  return fetchPromise;
}

fetchURlData('https://jsonplaceholder.typicode.com/todos/1')
.then(data => console.log(data))
.catch(error => console.error(error.message));
*/

/*
//a
async function fetchURLData(url) {
  try {
    const response = await fetch(url);
    if (response.status === 200) {
      return await response.json();
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error(`Error: `, error.message);
  }
}
*/

/*
//b
// valid URL
fetchURLDataAsync("https://jsonplaceholder.typicode.com/todos/1")
.then((data) => console.log(data))
.catch((error) => console.error(error));


//invalid url
fetchURLDataAsync("https://invalidurl.typicode.com/todos/1")
.then((data) => console.log(data))
.catch((error) => console.error(error));
*/


//c
const urlsToFetch = [
  'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/todos/2',
];

const fetchPromises = urlsToFetch.map(url => 
	fetch(url)
		.then(response => response.json())
);

Promise.all(fetchPromises)
	.then(responses => {
		const responseData = responses.map(response => response);
		console.log('Fetched data:', JSON.stringify(responseData));
	})
	.catch(error => console.error('Error fetching data:', error));

