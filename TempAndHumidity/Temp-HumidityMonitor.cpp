//add necessary libraries
#include <Arduino_HTS221.h>
#include <ArduinoBLE.h>

//Set up the BLE Service
BLEService tempHumidityService("AAA1"); //ends with 1

//Set up the BLE Characteristics
BLEFloatCharacteristic temperatureLevelChar("AAA2", //ends with 2
  BLERead | BLENotify); //clients can read and get notified of new changes

BLEFloatCharacteristic humidityLevelChar("AAA3", //ends with 3
  BLERead | BLENotify); //clients can read and get notified of new changes

long previousMillis = 0;

void setup() {
  Serial.begin(9600);
  while (!Serial);
  
  if (!HTS.begin()) {
    Serial.println("Failed to start humidity/temperature sensor!");
    while (1);
  }
  if (!BLE.begin()) {
    Serial.println("Failed to start BLE!");
    while (1);
  }

  BLE.setLocalName("TempHumidityMonitor");
  BLE.setAdvertisedService(tempHumidityService); // add the service UUID
  // add the characteristic
  tempHumidityService.addCharacteristic(temperatureLevelChar); 
  tempHumidityService.addCharacteristic(humidityLevelChar);
  BLE.addService(tempHumidityService); // Add the service
  // set initial values for characteristics
  temperatureLevelChar.writeValue(0.0); 
  humidityLevelChar.writeValue(0.0);
  // start advertising
  BLE.advertise();
  Serial.println("Bluetooth device active, waiting for a connection");
}

void loop() {
  // wait for a BLE central
  BLEDevice central = BLE.central();

  // if a central is connected
  if (central) {
    Serial.print("Connected to central: ");
    // print the central's BT address:
    Serial.println(central.address());

    while (central.connected()) {
      long currentMillis = millis();
      // if 200ms have passed, check the battery level:
      if (currentMillis - previousMillis >= 1000) {
        previousMillis = currentMillis;
        updateCharacteristics();
      }
    }
    // when the central disconnects, print to serial
    Serial.print("Disconnected from central: ");
    Serial.println(central.address());
  }
}

void updateCharacteristics() {

  float temperature = HTS.readTemperature(FAHRENHEIT);
  float humidity    = HTS.readHumidity();
   
  temperatureLevelChar.writeValue(temperature);  
  humidityLevelChar.writeValue(humidity);          
  
  Serial.print("Temperature = ");
  Serial.print(temperature);
  Serial.println(" °F");

  Serial.print("Humidity = ");
  Serial.print(humidity);
  Serial.println(" %");

  Serial.println();
}