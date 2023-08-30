let randomnumber1 = Math.floor(Math.random() * 6) + 1
let element1 = document.querySelector(".img1");
let randomnumber2 = Math.floor(Math.random() * 6) + 1
let element2 = document.querySelector(".img2");
element1.setAttribute('src', `images/dice${randomnumber1}.png`);
element2.setAttribute('src', `images/dice${randomnumber2}.png`);

if (randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML="Player 1 wins"
}else if (randomnumber1===randomnumber2){
    document.querySelector("h1").innerHTML= "Draw"
} 
else{
    document.querySelector("h1").innerHTML="Player 2 wins"

}