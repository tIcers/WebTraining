console.log("This message will be printed to the console.");

function throwError() {
  return notDefinedVar;
}

// Call throwError() below:
throwError();

console.log("Because of the error, this will not printed!");

// Constructing an Error

console.log(Error("User missing name"));

console.log("Will logging the error stop our program from running?");

// The throw keyword

throw Error("Username or password does not match");

// try catch statement pracice here

try {
  throw Error("I am showing this as error");
} catch (e) {
  console.log(e);
}

// handing eroror pracitce

function capAllElements(arr) {
  try {
    arr.forEach((el, index, array) => {
      array[index] = el.toUpperCase();
    });
  } catch (e) {
    console.log(e);
  }
}

capAllElements("Incorrect argument");
