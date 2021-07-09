petContainer = document.getElementById("petContainer");
class ArduinoPet {
  faceArray = ["HappyFace", "HappyFace", "HappyFace", "HappyFace", "BlinkFace"];
  constructor() {
    petContainer.innerHTML += `
        <div class="container pet-container" style="position: relative"> 
                    <img src="../Images/ArduinoPet.jpg" class="pet-image">
                    <img src="../Images/HappyFace.jpg" class="pet-face" id="face-img">
        </div>
        `;
  }
  DisplayFace(faceId) {
    Document.getElementById("face-img").src =
      "../Images/" + faceArray[faceId] + ".jpg";
  }
}

myPet = new ArduinoPet();
//setInterval(myPet.DisplayFace,250)
