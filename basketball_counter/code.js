let homeScore = 0
let guestScore = 0

//code to update home score
document.getElementById("homeScore-el").textContent = homeScore;

function addOne() {
    homeScore += 1;
    document.getElementById("homeScore-el").textContent = homeScore;

}

function addTwo() {
    homeScore += 2;
    document.getElementById("homeScore-el").textContent = homeScore;

}

function addThree() {
    homeScore += 3;
    document.getElementById("homeScore-el").textContent = homeScore;

}

//code to update guest score

document.getElementById("guestScore-el").textContent = guestScore;

function addOneG() {
    guestScore += 1;
    document.getElementById("guestScore-el").textContent = guestScore;

}

function addTwoG() {
    guestScore += 2;
    document.getElementById("guestScore-el").textContent = guestScore;

}

function addThreeG() {
    guestScore += 3;
    document.getElementById("guestScore-el").textContent = guestScore;

}

//reset code. clicking button resets both home and guest back to zero

function reset() {
    homeScore = 0
    guestScore = 0
    document.getElementById("guestScore-el").textContent = homeScore;
    document.getElementById("homeScore-el").textContent = guestScore;
    document.getElementById("winner").textContent = null;

}

//who won code?

function whoWon() {
    if (guestScore < homeScore) {
        document.getElementById("winner").textContent = "Home won"
      

    }
    else if (guestScore > homeScore) {
        document.getElementById("winner").textContent = "Guest won"
      
    }
    else {
        document.getElementById("winner").textContent = "tie"

    }
}