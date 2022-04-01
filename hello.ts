console.log('I am a Typescript example');
var firstName: string = "Michelle";
console.log(firstName);

var myTuple: [string, number, boolean] = ["Michelle", 25, true]
console.log(myTuple)

var car: {type:string, model: string, year: number} = {
    type: "Subaru",
    model: "Imprezza",
    year: 1998
}

enum compassPoints {
    North,
    East,
    West,
    South
}
console.log(compassPoints.North)