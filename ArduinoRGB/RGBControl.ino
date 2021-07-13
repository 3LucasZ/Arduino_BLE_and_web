// This code was built with the Arduino Nano 33 BLE Sense
// Using the Serial Monitor, control the inbuilt RGB of the Arduino
// Example command to write in Serial Monitor: 255,255,255
// Make sure No line ending setting is selected in the Serial Monitor
// Have fun!

const int RED_PIN = 22;
const int GREEN_PIN = 23;
const int BLUE_PIN = 24;
void setup() {
  pinMode(RED_PIN, OUTPUT);
  pinMode(GREEN_PIN, OUTPUT);
  pinMode(BLUE_PIN, OUTPUT);
  Serial.begin(9600);
  while (!Serial);
  Serial.println("Arduino Nano RGB setter!");
  Serial.println("Type 3 digits in range [0, 255]");
}
void loop() {
  while (!Serial.available());
  int red = Serial.parseInt();
  int green = Serial.parseInt();
  int blue = Serial.parseInt();
  Serial.println(red);
  Serial.println(green);
  Serial.println(blue);
  set_RGB(red,green,blue);
  
}
void set_RGB(int red, int green, int blue) {
  analogWrite(RED_PIN, 255-red);
  analogWrite(GREEN_PIN, 255-green);
  analogWrite(BLUE_PIN, 255-blue);
}