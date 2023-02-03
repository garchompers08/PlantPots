
# Potplants

This project aims to determine how level of temperature, humidity, and acidity affect the growth of the Calamansi plant or shrub. 



## Objectives

- To build and test a functional prototype based on Raspberry Pi and Arduino Uno, DHT22 sensor and TCS34725 sensor for the Pot Plants Monitoring System 

- To implement a web server based on NodeJS and dashboard based on HTML that shows the temperature, humidity, colour or dryness of the Calamansi plant

- To utilize NodeJS, Python, and HTML as the programming languages for the creation and development of our prototype.

## Installation

Clone the repository to your Raspberry Pi by running the command git clone:

```bash
   https://github.com/garchompers08/PlantPots.git.
```    

Update the package index:

```bash
sudo apt update
```
Install the required packages:
```bash
sudo apt install curl
```
Download the Node.js package signing key:
```bash
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
```
Install Node.js:
```bash
sudo apt install nodejs
```
Verify the installation by checking the version of Node.js:
```bash
nodejs -v
```
Installing Python libraries, use the pip3 command. For example, to install Flask:
```bash
pip3 install flask
```

## Hardware Setup

![Hardware Setup](https://imgur.com/a/3pi3xEk)

## DHT22

The color sensor can assess the health of a plant and spot any potential problems by observing the color of the plant's leaves. For instance, nutrient deficiency may be indicated by yellowing leaves, while disease or pest infestation may be indicated by browning leaves.

// Insert DHT22 Pin 

Install the required dependencies by running the following command:

```bash
sudo apt-get update
sudo apt-get install build-essential python-dev
```

Download the Adafruit DHT library:
```bash
git clone https://github.com/adafruit/Adafruit_Python_DHT.git
```

Change to the Adafruit_Python_DHT directory:

```bash
cd Adafruit_Python_DHT
```

Install the library
```bash
sudo python setup.py install
```

Test the installation by running the example code:

```bash
cd examples
python AdafruitDHT.py 22 4
```

## Color sensor

The color sensor can assess the health of a plant and spot any potential problems by observing the color of the plant's leaves. For instance, nutrient deficiency may be indicated by yellowing leaves, while disease or pest infestation may be indicated by browning leaves.



 //Insert Color Sensor Pin

## Tables

## Results