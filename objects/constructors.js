// Constructors in Javascript


// This function returns an object when called
// it has an object and a method


function createPerson(name) { 
    // object
    const obj = {};
    obj.name = name;
    obj.introduceSelf = function () {
      console.log(`Hi! I'm ${this.name}.`);
    };
    return obj;
  }
  

//   from this we can create many objects

const dennis = createPerson("Dennis");
dennis.name;
dennis.introduceSelf();



// creating constructors with new keyword

function People(name) {
    this.name = name;
    this.introduceSelf = function () {
      console.log(`Hi! I'm ${this.name}.`);
    };
  }

//   new keyword is used to call a people from the constructor

const salva = new People("Salva");
salva.name;
salva.introduceSelf();


// const myNotification = new Notification("Hello!");
  

