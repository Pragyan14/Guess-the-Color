var btn1value = [Math.floor(Math.random()*255)+1,Math.floor(Math.random()*255)+1,Math.floor(Math.random()*255)+1];
var btn2value = [Math.floor(Math.random()*255)+1,Math.floor(Math.random()*255)+1,Math.floor(Math.random()*255)+1];
var btn3value = [Math.floor(Math.random()*255)+1,Math.floor(Math.random()*255)+1,Math.floor(Math.random()*255)+1];
var btn4value = [Math.floor(Math.random()*255)+1,Math.floor(Math.random()*255)+1,Math.floor(Math.random()*255)+1];
var btn5value = [Math.floor(Math.random()*255)+1,Math.floor(Math.random()*255)+1,Math.floor(Math.random()*255)+1];
var btn6value = [Math.floor(Math.random()*255)+1,Math.floor(Math.random()*255)+1,Math.floor(Math.random()*255)+1];

var btnRGB = [];           // array storing rgb value of 6 button

btnRGB[0] = "rgb(" + btn1value[0] + ", " + btn1value[1] + ", " + btn1value[2] + ")";
btnRGB[1] = "rgb(" + btn2value[0] + ", " + btn2value[1] + ", " + btn2value[2] + ")";
btnRGB[2] = "rgb(" + btn3value[0] + ", " + btn3value[1] + ", " + btn3value[2] + ")";
btnRGB[3] = "rgb(" + btn4value[0] + ", " + btn4value[1] + ", " + btn4value[2] + ")";
btnRGB[4] = "rgb(" + btn5value[0] + ", " + btn5value[1] + ", " + btn5value[2] + ")";
btnRGB[5] = "rgb(" + btn6value[0] + ", " + btn6value[1] + ", " + btn6value[2] + ")";



const rgb = [btnRGB[0] , btnRGB[1] , btnRGB[2] , btnRGB[3] , btnRGB[4] , btnRGB[5]];
const random = Math.floor(Math.random() * rgb.length);
document.querySelector(".top-div p").textContent = rgb[random];                  // Answer 

for(var i = 0 ; i < 6 ;i++){
    document.querySelectorAll(".btn")[i].style.backgroundColor = btnRGB[i];      // Adding random color to button background
    document.querySelectorAll(".btn")[i].addEventListener("click", function(){   // adding event listener to button

        var btnShodow = "0 0 40px " + this.style.backgroundColor;                // glow effect var
        if((rgb[random].localeCompare(this.style.backgroundColor)) === 0)
        {
            var right = new Audio("sounds/blue.mp3");
            right.play();
            document.querySelector("h2").textContent = "Correct Answer!";
            document.querySelector(".top-div h1").textContent = "Press Enter to play again";
            this.style.boxShadow = btnShodow;                                     //glow effect
            document.addEventListener('keyup', function(e){
                if(e.keyCode == 13)
                  window.location.reload();
              })
        }
        else
        {
            var wrong = new Audio("sounds/wrong.mp3");
            wrong.play();
            document.querySelector("body").style.backgroundColor = "red";
            setTimeout(function () {
                document.querySelector("body").style.backgroundColor = "#011F3F";
            }, 300);
            document.querySelector(".top-div h1").textContent = "Wrong Answer, TRY AGAIN!";
            document.querySelector("h2").textContent = "";
        }
    });
}

