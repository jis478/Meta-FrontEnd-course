// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];

function logDiary(dairy) {
    for (let value of dairy) {
        console.log(value);
    }
};

// Task 2
const animal = {canJump: true};
const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan(bird) {
    for (let value of Object.keys(bird)) {
        console.log(value, bird[value]);
    }        
}

// Task 3
function animalCan(bird) {
    for (let value in bird) {
        console.log(value);
    }        
}
