screenWidth = 0;
screenHeight = 0;
x = 0;
y = 0;

drawApple = "";
apple = ""; 
speakData = "";
toNumber = "";

 function preload() {
    function loadImage() {
      drawApple.src = 'apple.png';
    }
 }

 function Number() {
  to_number = Number(content);
  if(Number.isInteger(to_number))
 }

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "O sistema está ouvindo. Por favor, fale.";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "A fala foi reconhecida: " + content; 

}

function setup() {
 screenWidth = window.innerWidth;
 screenHeight = window.innerHeight;

    video = createCapture(VIDEO);
    video.size(550, 500);
    
    canvas = createCanvas(500, 500);
    canvas.position(560, 150);
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
  if(drawApple == "set")
  {
    document.getElementById("status").innerHTML = toNumber + " maçãs desenhadas";
    drawApple = "";
    for(var i = 1; i <= to_number; i++) {
      x = Math.floor(Math.random() * 700);
      y = Math.floor(Math.random() * 400);
      image(apple, x, y, 50, 50);
    }
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speakData);

    synth.speak(utterThis);

    speakData = "";
}
