from pigpio_dht import DHT11, DHT22

gpio = 4 # BCM Numbering

sensor = DHT11(gpio)
#sensor = DHT22(gpio)

result = sensor.read()
print(result)
