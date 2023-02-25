

// const balloonContainer = document.getElementById("balloon-container");

// function random(num) {
//   return Math.floor(Math.random() * num);
// }

// function getRandomStyles() {
//   var r = random(255);
//   var g = random(255);
//   var b = random(255);
//   var mt = random(200);
//   var ml = random(50);
//   var dur = random(5) + 5;
//   return `
//   background-color: rgba(${r},${g},${b},0.7);
//   color: rgba(${r},${g},${b},0.7); 
//   box-shadow: inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7);
//   margin: ${mt}px 0 0 ${ml}px;
//   animation: float ${dur}s ease-in infinite
//   `;
// }

// function createBalloons(num) {
//   for (var i = num; i > 0; i--) {
//     var balloon = document.createElement("div");
//     balloon.className = "balloon";
//     balloon.style.cssText = getRandomStyles();
//     balloonContainer.append(balloon);
//   }
// }

// function removeBalloons() {
//   balloonContainer.style.opacity = 0;
//   setTimeout(() => {
//     balloonContainer.remove()
//   }, 500)
// }

// window.addEventListener("load", () => {
//   createBalloons(30)
// });

// window.addEventListener("click", () => {
//   removeBalloons();
// });

const balloonContainer = document.getElementById("balloon-container");
const audio = document.getElementById("happy-birthday-audio");

function random(num) {
  return Math.floor(Math.random() * num);
}

function getRandomStyles() {
  var r = random(255);
  var g = random(255);
  var b = random(255);
  var mt = random(200);
  var ml = random(50);
  var dur = random(5) + 5;
  return `
  background-color: rgba(${r},${g},${b},0.7);
  color: rgba(${r},${g},${b},0.7); 
  box-shadow: inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7);
  margin: ${mt}px 0 0 ${ml}px;
  animation: float ${dur}s ease-in infinite
  `;
}

function createBalloons(num) {
  audio.play(); // Play the audio
  for (var i = num; i > 0; i--) {
    var balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.style.cssText = getRandomStyles();
    balloonContainer.append(balloon);
  }
}

function removeBalloons() {
  balloonContainer.style.opacity = 0;
  setTimeout(() => {
    balloonContainer.remove()
  }, 500)
}

window.addEventListener("load", () => {
  createBalloons(30)
});

// window.addEventListener("click", () => {
//   removeBalloons();
// });

var i = 0;
var txt = 'Happy Birthday Aleta'; /* The text */
var speed = 500; /* The speed/duration of the effect in milliseconds */

function typeWriter() {

    
        if(i < txt.length) {
            document.getElementById("demo").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            setTimeout(function() {
                document.getElementById("demo").innerHTML = '';
                i = 0;
                typeWriter();
            }, 1000); // wait for 1 second before deleting and typing again
        }
    
    

    // if(i < txt.length) {
    //   document.getElementById("demo").innerHTML += txt.charAt(i);
    //   i++;
    //   setTimeout(typeWriter, speed);
    //   setInterval(typeWriter,10000)
    // }
  }
  function randomPic(){
      var num=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41];
      var randomNum=num[Math.floor(Math.random()*41)];
      document.getElementById("pic").src = randomNum+".jpg";
  }

  typeWriter();
  setInterval( randomPic,2000);





