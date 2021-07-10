//const arrays
const ACTIONS = ["none", "feed", "play"];
//face arrays
const defaultArray = ["Default", "Default", "Default", "Default", "Blink"];
const eatArray = ["Eat", "Eat", "Eat"];
const playArray = ["Play", "Play", "Play"];
const faceArrays = [defaultArray, eatArray, playArray];
var loopedArray = [].concat(defaultArray);
//const decay and growth
const REGULAR_DECAY = 5;
const RARE_DECAY = 25;
const RARE_DECAY_RATE = 0.05;
const DECAY_INTERVAL = 500;
const GROWTH = 100;
//get dynamic divs
var meterContainer = document.getElementById("meters");
var actionDiv = document.getElementById("actionDiv");
var statusDiv = document.getElementById("statusDiv");
//const paths
const FacesPath = "../Images/Faces/";
const MeterIconsPath = "../Images/MeterIcons/";
const ArduinoComponentsPath = "../Images/ArduinoComponents/";
//Allow popovers for index.html
[...document.querySelectorAll('[data-bs-toggle="popover"]')].forEach(
  el => new bootstrap.Popover(el)
);

function startGame() {
  restartMeters();
  startDecay();
}

function pauseGame() {
  stopDecay();
}

function endGame() {
  console.log("Your Arduino Pet feels very sad :(");
}

// Callback function for when notifications are received
function handleNotifications(data) {
  console.log("received: ", data);
  actionDiv.innerHTML = "action: " + ACTIONS[data];
  if (data > 0) {
    loopedArray = [].concat(faceArrays[data].concat(defaultArray));
    meters[data - 1].activated();
  }
}
