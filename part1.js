// == , ===

console.log("1"==1) //True checks the value
console.log("1"===1) // False checks the type and the value

// Date function
let day = new Date()
console.log(day.getDay()) //2
day = day.getDay()

let literal_day = new Date().toString();
console.log(literal_day.split(" ")[0]) // tue

// 0 sunday 3 wed 6 is sat

// Switch Case Statement


switch(day){
    case 0:
        console.log("Go to church");
        break;
    case 1:
        console.log("Write Code...It's Monday")
        break;
    case 2:
        console.log("Test code because Testing Tuesday!")
        break;
    case 3:
        console.log("Testing more code...it Hump DAY!!!")
        break;
    case 4:
        break;
    case 5:
        console.log("Test out feature for our app on thirsday")
        break;
    case 6:
        console.log("sleep all day")  
        break;
    default:
        console.log("You are making up days")                          
}


// with strings
switch(literal_day){
    case 'Sun':
        console.log("Go To Church");
        break;
    case 'Mon':
        console.log("Write code... It's Monday");
        break;
    case 'Tue':
        console.log("Test Code because its Tuesday");
        break;
    case "Wed":
        console.log("Testing more code...its Hump Day!!");
        break;
    case 'Thu':
        console.log("Write a feature forour app on Thursdays")
        break;
    case 'Fri':
        console.log("Test our new Feature on Feature Friday!")
        break;
    case 'Sat':
        console.log("Sleep all day")
        break;
    default:
        console.log("That is not a real day..");
}


let person = {
    name: "John",
    age: 28,
    fav_color: "Red"

}
console.log(person)
// bracket notation
key = "fav_color"

console.log(person[key])
console.log(person['fav_color'])

// dot notation
console.log(person.fav_color) // no quotes



let person2 = {
    name: "Max",
    age:31,
    prog_languages:['JavaScript','Python','C++', 'Java'],
    fav_color: "Blue",
    teams:[
        {
            baseball: 'Chicago White Sox',
            football: 'Chicago Bears',
            hockey: 'Chicago Blackhawks',
            basketball:['Chicago Bulls','Chicago Sky'],
            soccer:['Chicago Fire', 'Naperville Yellowjacks']
        },
        {
            baseball:'Toronto Bluejays',
            football: 'LA Rams',
            basketball: 'Milwalkee Bucks',
            soccer: ['Manchester United','Liverpool']
        }
    ]
}
// print blue
// c++
// LA Rams
//chicago fire
console.log(person2.fav_color)
console.log(person2.prog_languages[2])
console.log(person2.teams[1].football)
console.log(person2.teams[0].soccer[0])


console.log(Object.keys(person2))
console.log(Object.values(person2))

// loop through an object .. the old and ungly way?

for(let i = 0; i < Object.keys(person2).length; i++){
    console.log(Object.keys(person2)[i])
}

// for in loop ! NOT THE SAME AS PYTHON!!!!
for (let key in person2){
    console.log(key)
    console.log(person2[key])
}


// List values from person2  object that are arrays.
for (let key in person2){
    if (Array.isArray(person2[key])){
        console.log(person2[key])
    }
}


