//set up and run the BLE program
//put this script after all elements are loaded

//set this to the service uuid of your device
const serviceUuid = "19b10010-e8f2-537e-4f6c-d104768a1214";
let actionCharacteristic;
let myBLE = new p5ble();

//"connect" pressed
function connectToBle() {
  // Connect to a device by passing the service UUID
  myBLE.connect(serviceUuid, gotCharacteristics);
}

//"disconnect" pressed
function disconnectToBle() {
  // Disonnect
  myBLE.disconnect();
  // update statusDiv
  statusDiv.innerHTML =
    "Status: " + (myBLE.isConnected() ? "Connected" : "Disconnected");
  // End game
  endGame();
}

//once characteristics are received
function gotCharacteristics(error, characteristics) {
  if (error) console.log("error: ", error);
  if (myBLE.isConnected()) {
    console.log("characteristics: ", characteristics);
    //start the game!
    startGame();
    //update statusDiv
    statusDiv.innerHTML =
      "Status: " + (myBLE.isConnected() ? "Connected" : "Disconnected");
    //get the action characteristic
    actionCharacteristic = characteristics[0];
    myBLE.startNotifications(actionCharacteristic, handleNotifications);
  }
}

// Callback function for when notifications are received
function handleNotifications(data) {
  console.log("received: ", data);
  actionDiv.innerHTML = "action: " + ACTIONS[data];
  if (data > 0) {
    meters[data - 1].activated();
  }
}
