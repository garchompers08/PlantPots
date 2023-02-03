# Raspberry Pi Code
import serial

# Set the serial port and baud rate
ser = serial.Serial('/dev/ttyACM0', 9600)

while True:
    # Read data from the serial port
    data = ser.readline().decode()
    # Print the received data
    print(data)

