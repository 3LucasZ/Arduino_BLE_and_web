petContainer = document.getElementById("petContainer");
class ArduinoPet {
  constructor() {
    petContainer.innerHTML +=
      `
        <div class="container pet-container" style="position: relative"> 
                    <img src="../Images/ArduinoPet.jpg" class="pet-image">
                    <img src="` +
      FacesPath +
      `Default.jpg" class="pet-face" id="face-img">
        </div>
        `;
  }
  UpdateFace() {
    //debugging
    //console.log(loopedArray);
    //console.log(loopedArray[0]);
    if (loopedArray[0] === undefined) {
      loopedArray = [].concat(defaultArray);
    }
    document.getElementById("face-img").src =
      FacesPath + loopedArray[0] + ".jpg";
    //remove the first element of the array
    loopedArray.shift();
  }
}
myPet = new ArduinoPet();
setInterval(myPet.UpdateFace, 500);
