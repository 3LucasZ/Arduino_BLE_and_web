The prototype for a final project: ArduinoPet

Machine Learning, Arduino, Web BLE
The arduino uses IMU Data and on device Machine Learning to send what actions are being performed.
The website reads from this characteristic using notify.
Built for and tested on Arduino Nano 33 BLE Sense.

How to use:
Flash the TinyMotionClassifier.ino and model.h to an Arduino.
(Optional) open the serial monitor, to receive important messages
In Google Chrome open: https://3lucasz.github.io/Arduino_BLE_and_web/ArduinoPetProto/Web/
(Optional) use Inspect Element and check the console

This detects three motions:
"None" - nothing is being done
"Play" - swinging the arduino in a circular motion
"Feed" - a downwards motion with the arduino

Model and Inference code trained and created using https://experiments.withgoogle.com/tiny-motion-trainer
