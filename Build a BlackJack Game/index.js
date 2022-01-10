let firstCard = 6
let secondCard = 9
let sum = firstCard + secondCard +7

if(sum < 21){
    console.log("Do you want to draw a new card?")
}
else if(sum === 21){
    console.log("Wohoo! You've got BlackJack!")
}
else{
    console.log("You're out of the game!")
}