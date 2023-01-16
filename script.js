

let infoAbout = {
    name: {},
    surname: {},
    age: {}
}

let firstQ = prompt("What's your name");
let secondQ = prompt("What's your surname");
let thirdQ = prompt("how old are you")

infoAbout.name[firstQ] = firstQ
infoAbout.surname[secondQ] = secondQ
infoAbout.age[thirdQ] = thirdQ

console.log(infoAbout)