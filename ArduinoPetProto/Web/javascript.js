//set up
//set this to the service uuid of your device
const serviceUuid = "19b10010-e8f2-537e-4f6c-d104768a1214";
let actionCharacteristic;
let myBLE = new p5ble();
var actionDiv = document.getElementById("actionDiv");
var statusDiv = document.getElementById("status");

const actions = ["none", "feed", "play"]

//called when "connect" is pressed
function connectToBle() {
    // Connect to a device by passing the service UUID
    myBLE.connect(serviceUuid, gotCharacteristics);
}
//called when"disconnect" is pressed
function disconnectToBle() {
    // Disonnect to the device
    myBLE.disconnect();
    // Check if myBLE is connected
    statusDiv.innerHTML="Status: " + (myBLE.isConnected() ? "Connected" : "Disconnected");
}

// A function that will be called once characteristics are received
function gotCharacteristics(error, characteristics) {
    if (error) console.log('error: ', error);
    console.log('characteristics: ', characteristics);
    statusDiv.innerHTML="Status: " + (myBLE.isConnected() ? "Connected" : "Disconnected");
    actionCharacteristic = characteristics[0];
    myBLE.startNotifications(actionCharacteristic, handleNotifications);
}
// Callback function for when notifications are received
function handleNotifications(data) {
    console.log('value: ', data);
    actionDiv.innerHTML = "action: " + actions[data];
}
