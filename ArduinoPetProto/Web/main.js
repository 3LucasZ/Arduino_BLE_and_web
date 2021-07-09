//game values to tweak
const ACTIONS = ["none", "feed", "play"];
const REGULAR_DECAY = 5;
const RARE_DECAY = 25;
const RARE_DECAY_RATE = 0.05;
const DECAY_INTERVAL = 500;
const GROWTH = 100;
//get dynamic divs
var meterContainer = document.getElementById("meters");
var actionDiv = document.getElementById("actionDiv");
var statusDiv = document.getElementById("statusDiv");

function startGame() {
  startDecay();
}

function pauseGame() {
  stopDecay();
}

function endGame() {
  console.log("Your Arduino Pet feels very sad :(");
}
