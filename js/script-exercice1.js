/**
 * @author N'ZO LAGOU PRIVAT N'GUESSAN
 * @description DI-Bootcamp-Week1-Day5-ExercicesXPNinja - Checking The BMI
 */

/*
Hint:
- You must use functions to complete this exercise, to do so take a look at tomorrow’s lesson.

Create two objects, each object should hold a person’s details. Here are the details:
FullName
Mass
Height

Each object should also have a key which value is a function (ie. A method), that calculates the Body Mass Index (BMI) of each person

Outside of the objects, create a JS function that compares the BMI of both objects.

Display the name of the person who has the largest BMI.
*/

let personOne = {
    fullname: "ARSENE N'GUESSAN",
    mass: 56,
    height: 1.78,
    bmi: () => {
        return mass / (height * height)
    }
}
let personTwo = {
    fullname: "TIDJAN THIAM",
    mass: 73,
    height: 1.58,
    bmi: () => {
        return mass / (height * height)
    }
}

function compare() {
    return personOne.bmi > personTwo.bmi ? personOne : personTwo
}

console.log("The person who has the largest BMI is " + compare().fullname);