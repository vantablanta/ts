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
    North = "North",
    East = "East",
    West = "West",
    South = "South"
}
console.log(compassPoints.North)


type Year = number
type Type = string
type Model = string

type Car ={
    year:  Year,
    type:  Type,
    model: Model
}
const carYear: Year = 2001
const carType: Type = "Toyota"
const carModel: Model = "Corolla"

const carObj: Car = {
  year: carYear,
  type: carType,
  model: carModel
};


// Interfaces appply to objects only 

interface Rectangle {
    height: number,
    width: number
}

const rectangle: Rectangle = {
    height: 20,
    width: 10
}

interface BlueRectangle extends Rectangle {
    color: string
}

const blueRectangle: BlueRectangle = {
    height: 20,
    width: 10,
    color: "blue"
}
