// Object prototypes ES-5

function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;

    //method
    this.printInfo = function(wheels = 0, color){
        console.log(`this is a ${this.year} ${this.make}, ${this.model}, and has ${wheels} wheels and is color ${color}`)

    }
}
let myCar = new Car('Toyota', 'Tundra', '1995')
console.log(myCar)
console.log(myCar.make)
console.log(myCar.something= "something else")
myCar.make='Honda'
console.log(myCar)

myCar.printInfo()
myCar.printInfo(4)
myCar.printInfo(4, "red")

myCar.drive = function(){console.log("VROOOOM")}

myCar.drive()

String.prototype.first_letter = function(){return this[0]}

console.log("JErry".first_letter())


// JavaScript Classes
class Human{
    constructor(name, age, gender){
        this.name = name,
        this.age = age,
        this.gender = gender

    }
    returnInfo(){
        return `Name: ${this.name} \n Gender: ${this.gender}`
    }
}
let wilma = new Human('Wilma', '25', 'female')
console.log(wilma)
console.log(wilma.returnInfo())

// class Baby(Human): <-- python 
class Baby extends Human{
    constructor(name, age, gender, walking){
        super(name, age, gender)
        this.walking = walking // bool

    }
    isBabyWalking(){
        if(this.walking){
            return "Baby is walkin"
        }else{
            return "Baby aint walkin yet"
        }
    }
}
let bambam = new Baby('bambam',1,'Make',true)
console.log(bambam)
console.log(bambam.returnInfo())
console.log(bambam.walking)
console.log(bambam.isBabyWalking())


// Javascript Closures----------------------------------
let countUp = function(){
    let counter = 2; //private variable
    console.log('Hit')
    function addOne(){
        return counter++; 
    }
    return addOne
}
myAddOne =countUp()

console.log(myAddOne())
console.log(myAddOne())
console.log(myAddOne())
console.log(myAddOne())



