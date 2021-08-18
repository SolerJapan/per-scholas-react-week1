/* const myObject = {
    a: "this is property a",
    mySecondObjectProerty: "second object property",
    "x": "the x key on my object",
    "2": "the key that is number 2",
    3: "key that is 3"
};

console.log("myObject ", myObject);
 */
const myInfo = {
    "name": "Alex",
    "birthday": 01111987,
    "citiesLived": ["Paterson", "Farmington Hills"],
    "isHuman": true,
    "planetsVisited": null,
    "personalInfo": {
        "favoriteFood": "sushi"
    }
};

console.log("my info printed as object");
console.log(myInfo);

console.log("my info printed as string in the JSON format");
const myInfoAsJson = JSON.stringify(myInfo);
console.log(myInfoAsJson)

function sayHi(name){
    return `my name is ${name} and I am ${age} years old`;

}

/* return a sentence that say's " hi my name is (enter name here)" */

