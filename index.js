var randomNumber1;
var randomNumber1= Math.floor(Math.random()*5+1);
var randomImage= "dice" + randomNumber1 + ".png" ;//which gives dice1.png-dice6.png
var imageSource= "images/" + randomImage ;
var d1= document.querySelectorAll("img")[0];
d1.setAttribute("src",imageSource);
var randomNumber2=Math.floor(Math.random()*5+1);
var randomImage2="dice"+ randomNumber2+".png";
var imageSource2="images/"+ randomImage2;
var d2=document.querySelectorAll("img")[1];
d2.setAttribute("src",imageSource2);
if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="yay player 1 wins🎈🎉";
}
else if (randomNumber1===randomNumber2) {
  document.querySelector("h1").innerHTML="yay its a tie🎈🎉";
}
else{
    document.querySelector("h1").innerHTML="yay player 2 wins🎈🎉";
}
