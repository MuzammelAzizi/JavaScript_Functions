console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count){
    for(i = 0; i <= count; i++) {
        if (i % 2 != 0) {
            console.log(i);
            
        }
    }
}
printOdds(50);

// Exercise 2 Section
 console.log("EXERCISE 2:\n==========\n");
function checkAge(userName, age) {

    let aboveSixteen = `Congrats ${userName} you can drive!`
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`

    if(age < 16) {
        console.log(belowSixteen)
    }
    else {
        console.log(aboveSixteen)
    }

}
checkAge("Muza", 25);
checkAge("Selena", 15); 

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function checkQuadrant(x , y){
    if (x == 0 && y == 0) {
        console.log("Origin")
    } else if (x == 0) {
        console.log("Y Axis")
    } else if(y == 0) {
        console.log("X Axis")
    } else if(x > 0 && y > 0) {
        console.log("Quadrant 1")
    } else if(x < 0 && y > 0 ) {
        console.log("Quadrant 2")
    } else if(x < 0 && y < 0) {
        console.log("Quandant 3")
    } else if(x > 0 && y < 0) {
        console.log("Quadrant 4")
    }

}
checkQuadrant(0, 2) 
checkQuadrant(1, 2) 
checkQuadrant(-6, 18) 