
window.onload = function myFunction() {

    let color = "Yellow";
    let lastName = "Johnson";
    document.getElementById("strings").innerHTML = "Hello World";

// Booleans:
    let x = true;
    let y = false;
    document.getElementById("booleans").innerHTML = x + "<br>" + y;

// Object:
    const person = {firstName: "John", lastName: "Doe"};
    document.getElementById("object").innerHTML = person.firstName + "<br>" + person.lastName;

    // Array object:
    const cars = ["Saab", "Volvo", "BMW", "Ferarri", "Masseratti"];
    document.getElementById("myArray").innerHTML = cars.slice(1,4);


// Date object:
    const date = new Date("2022-03-25");
    document.getElementById("date").innerHTML = date();

};






