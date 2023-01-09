const sensor = require('node-dht-sensor');

// This function will read the temperature and humidity data from the DHT11 sensor
async function readDHT11() {
  return new Promise((resolve, reject) => {
    sensor.read(11, 17, function(err, temperature, humidity) {
      if (err) {
        reject(err);
      } else {
        resolve({ temperature, humidity });
      }
    });
  });
}

// Here is an example of how you can use the function
readDHT11().then(data => {
  console.log(`Temperature: ${data.temperature}°C, Humidity: ${data.humidity}%`);
}).catch(err => {
  console.error(err);
});
