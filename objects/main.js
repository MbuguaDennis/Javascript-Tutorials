
// I have created my first object
const person = {
};

// creating objects with properties and numbers
const personOne = {
    name: ["Bob", "Smith"],
    age: 32,
    bio() {
      console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf() {
      console.log(`Hi! I'm ${this.name[0]}.`);
    },
  };
//   Objects as object properties
const personTwo = {
    name: {
      first: "Bob",
      last: "Smith",
    },
    // …The above name object property is an object itself
  };
//   setting objects members
personTwo.age =45;
personTwo["name"]["last"]=["Mbugua"];

// adding completely new members
personTwo["eyes"] = "hazel";
personTwo.farewell = function () {
  console.log("Bye everybody!");
};




// adding custom values to an object

/* const myDataName = nameInput.value;
const myDataValue = nameValue.value;

// added the new data like this
personTwo[myDataName] = myDataValue;
*/
const myDataName = "height";
const myDataValue = "1.75m";
personTwo[myDataName] = myDataValue;

const myDateOfbirth = "DOB";
const myDobYear = 1998;
personTwo[myDateOfbirth] = myDobYear;


/*
working with this keyword
*/
const personFour = {
    name: "Chris",
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}.`);
    },
  };
  
  const personFive = {
    name: "Deepti",
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}.`);
    },
  };




