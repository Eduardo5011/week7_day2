//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

// let person3 = {
//     pizza:["Deep Dish","South Side Thin Crust"],
//     tacos:"Anything not from Taco bell",
//     burgers:"Portillos Burgers",
//     ice_cream:["Chocolate","Vanilla","Oreo"],
//     shakes:[{
//         oberwise:"Chocolate",
//         dunkin:"Vanilla",
//         culvers:"All of them",
//         mcDonalds:"Sham-rock-shake",
//         cupids_candies:"Chocolate Malt"
//     }]
// }


// console.log(Object.keys(person3))
// console.log(Object.values(person3))

// for(let i = 0; i < Object.keys(person3).length; i++){
//     console.log(Object.keys(person3)[i])
// }

// for (let key in person3){
//     console.log(key)
//     console.log(person3[key])
// }



//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age



        //method
        this.printInfo = function () {
            console.log(`my name is ${this.name} and im ${this.age}, years old`)

        }
    }
}
let myPerson = new Person('Eduardo', '31')
console.log(Eduardo)
console.log(wilma.printInfo())
    

 
            // console.log(person)
            // // Use an arrow to create the printInfo method
            // Create another arrow function for the addAge method that takes a single parameter
            // Adding to the age 
            // =============Exercise #3 ============//
            // Create a Promised based function that will check a string to determine if it's length is greater than 10.
            // If the length is greater than ten console log "Big word". 
            // If the length of the string is less than 10 console log "Small Number"
            
            let p = new Promise((resolve, reject) => {
                let a = 10 + 1
                if (a == 2) {
                    resolve('Big word')
                } else {
                    reject('Small number')
                }

            })
            p.then((message) => {
                console.log('its a' + message)
            }).catch((message) => {
                console.log('its a ' + message)
            })
