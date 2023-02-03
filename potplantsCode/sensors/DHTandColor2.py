import json
import Adafruit_DHT
import serial
from datetime import datetime
import time

sensor = Adafruit_DHT.DHT22
pin = 4

ser = serial.Serial('/dev/ttyACM0', 9600)

#TCS34725 Register Addresses
TCS34725_COMMAND_BIT = 0x80
TCS34725_ENABLE = 0x00
TCS34725_ATIME = 0x01
TCS34725_WTIME = 0x03
TCS34725_AILTL = 0x04
TCS34725_AILTH = 0x05
TCS34725_AIHTL = 0x06
TCS34725_AIHTH = 0x07
TCS34725_PERS = 0x0C
TCS34725_CONFIG = 0x0D
TCS34725_CONTROL = 0x0F
TCS34725_ID = 0x12
TCS34725_STATUS = 0x13
TCS34725_CDATAL = 0x14
TCS34725_CDATAH = 0x15
TCS34725_RDATAL = 0x16
TCS34725_RDATAH = 0x17
TCS34725_GDATAL = 0x18
TCS34725_GDATAH = 0x19
TCS34725_BDATAL = 0x1A
TCS34725_BDATAH = 0x1B
TCS34725_INTEGRATIONTIME_2_4MS = 0xFF
TCS34725_GAIN_1X = 0x00

#Initialize TCS34725
ser.write(bytes([TCS34725_COMMAND_BIT | TCS34725_ENABLE, 0x01]))
ser.write(bytes([TCS34725_COMMAND_BIT | TCS34725_ATIME, TCS34725_INTEGRATIONTIME_2_4MS]))
ser.write(bytes([TCS34725_COMMAND_BIT | TCS34725_CONTROL, TCS34725_GAIN_1X]))

#Open JSON file

with open("data.json", "r") as json_file:
    # Load the existing data from the file
    existing_data = json.load(json_file)


while True:
# Read the humidity and temperature from the DHT22 sensor
	humidity, temperature = Adafruit_DHT.read_retry(sensor, pin)
	print("Temperature: " + str(temperature) + "C, Humidity: " + str(humidity) + "%")
	# Read the color data from the TCS34725 sensor
	r, g, b, c = ser.read(4)
	print("Red: " + str(r) + ", Green: " + str(g) + ", Blue: " + str(b) + ", Clear: " + str(c))
	data = {"Temperature": temperature, "Humidity": humidity, "Red": r, "Green": g, "Blue": b, "Clear": c}
	existing_data = []
	existing_data.append(data)
	with open("data.json", "w") as json_file:
    		json.dump(existing_data, json_file)
	time.sleep(60)

