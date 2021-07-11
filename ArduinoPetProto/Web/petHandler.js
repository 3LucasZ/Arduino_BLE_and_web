petContainer = document.getElementById("petContainer");
class ArduinoPet {
  constructor() {
    petContainer.innerHTML +=
      `
        <div class="container pet-container" style="position: relative"> 
          <img src="../Images/ArduinoPet.jpg" class="pet-image">
          <img src="` + FacesPath + `Default.jpg" class="pet-face" id="face-img">
                
          <input 
            type="image"
            src="`+ArduinoComponentsPath+`Microphone.jpg"
            id="microphone-popover"
            data-bs-toggle="popover" 
            title="Digital Microphone" 
            data-target="<p>Hi</p>"
            data-bs-placement="bottom"
           />
         
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

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl, {
    trigger: 'focus'
  })
})
setInterval(myPet.UpdateFace, 500);
