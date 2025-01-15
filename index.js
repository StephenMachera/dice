// alert("is it working");
function diceGame(){
    let randomDice1=Math.floor(Math.random()*6)+1;
    let playerOne =`images/dice${randomDice1}.png`;
    document.querySelector(".image1").setAttribute("src",playerOne);
    

    let randomDice2=Math.floor(Math.random()*6)+1;
    let playeTwo=`images/dice${randomDice2}.png`;
    document.querySelector(".image2").setAttribute("src",playeTwo);

    if(randomDice1>randomDice2){
        document.querySelector(".js-results").innerHTML="player 1 win";
    }
    else if(randomDice1<randomDice2){
        document.querySelector(".js-results").innerHTML="player 2 win"; 
    }
    else if(randomDice1===randomDice2){
        document.querySelector(".js-results").innerHTML="TIE"; 
    }
}