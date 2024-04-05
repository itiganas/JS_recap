window.onload = function myFunction() {


    //VARIABLES IN JS

    // Declaration and initialization
    let firstName = "John";
    const lastName = "Doe";
    var age = 30;

// Variable reassignment
    age = 40;

// Using variables in expressions
    let fullName = firstName + " " + lastName;

    //DATA TYPES IN JS

//Number
    let length = 15;
    let weight = 7.5;
    document.getElementById("number").innerHTML = length + "<br>" + weight;

    //Strings
    let color = "Yellow";
    document.getElementById("stringColor").innerText = color;
    document.getElementById("stringColor").style.color = "yellow"; //change style (color) to an element
    let name = "Johnson";
    document.getElementById("strings").innerHTML = color + "<br>" + name;

// Booleans:
    let x = true;
    let y = false;
    document.getElementById("booleans").innerHTML = x + "<br>" + y;

// Object:
    const person = {firstName: "John", lastName: "Doe", age: 30};
    document.getElementById("object").innerHTML = "first name: " + person.firstName + "<br>" + "last name: " + person.lastName + "<br>" + "age: " + person.age;

    // Array object:
    const cars = ["Saab", "Volvo", "BMW", "Ferarri", "Masseratti"];
    document.getElementById("myArray").innerHTML = cars;


// Date object:
    const date = new Date("2022-03-25");
    document.getElementById("date").innerHTML = date;


//FUNCTIONS
    function myFunction(a, b) {
// Function returns the product of a and b
        return 5 * 4;
    }

    document.getElementById("resultFunction").innerHTML = "The result of 5*4 is : " + myFunction();


//Function Invocation
    function toCelsius(fahrenheit) {
        return (5 / 9) * (fahrenheit - 32);
    }

    let value = toCelsius(50);

    document.getElementById("toCelsius").innerHTML = "50 Fahrenheit to Celsius is " + value;


    //Objects


    //Events
    function displayDate() {
        document.getElementById("demo").innerHTML = Date();
    }



};





