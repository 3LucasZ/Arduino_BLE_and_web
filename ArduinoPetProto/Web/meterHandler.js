//Progressbar stuff
//this will be used for the progress bar div ids

//Custom meter class
class CustomMeter {
  constructor(bdclass, bgclass, imagepath, idnum) {
    //Set attributes
    this.value = 1000;
    this.decayRate;
    this.idnum = idnum;
    this.idname = ACTIONS[idnum];
    //Set UI look from the parameteres
    meterContainer.innerHTML +=
      `
        <div class="row">
          <img src=` +
      imagepath +
      ` class="avatar border border-3 ` +
      bdclass +
      ` | remove-left-padding remove-right-padding add-left-margin shift-right"> 
          <div class="responsive-width d-flex  align-items-center | remove-left-padding remove-right-padding">
            <div class="container  high-z-index | remove-left-padding remove-right-padding">
              <div class="progress | border border-start-0 border-3 ` +
      bdclass +
      `" style="height: 30px;">
                <div id=` +
      this.idname +
      ` class="progress-bar | ` +
      bgclass +
      `" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
        </div>
        `;
  }
  activated() {
    if (this.value >= 1000 - GROWTH) {
      this.value = 1000;
    } else {
      this.value += GROWTH;
    }
    //console.log(selectedMeter.value/10);
    this.update();
  }
  decay() {
    if (Math.random() < RARE_DECAY_RATE) {
      this.decayRate = RARE_DECAY;
    } else {
      this.decayRate = REGULAR_DECAY;
    }
    if (this.value >= this.decayRate) {
      this.value -= this.decayRate;
    } else {
      endGame();
    }
    //console.log(selectedMeter.value/10);
    this.update();
  }
  update() {
    document.getElementById(this.idname).style =
      "width: " + this.value / 10 + "%";
  }
}
meters = [];
//hunger meter
meters.push(
  new CustomMeter(
    "DarkGrey-bd",
    "LightGrey-bg",
    MeterIconsPath + "EatMeter" + ".jpg",
    1
  )
);
//play meter
meters.push(
  new CustomMeter(
    "Gold-bd",
    "ArduinoOrange-bg",
    MeterIconsPath + "PlayMeter" + ".jpg",
    2
  )
);
function restartMeters() {
  for (i = 0; i < ACTIONS.length - 1; i++) {
    selectedMeter = meters[i];
    selectedMeter.value = 1000;
  }
}
function decayAll() {
  for (i = 0; i < ACTIONS.length - 1; i++) {
    selectedMeter = meters[i];
    selectedMeter.decay();
  }
}

function startDecay() {
  decayer = setInterval(decayAll, DECAY_INTERVAL);
}
function stopDecay() {
  clearInterval(decayer);
}
