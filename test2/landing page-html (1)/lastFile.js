// Fetch the JSON data
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Get the last entry in the JSON data
    const lastEntry = data[data.length - 1];
  
    // Convert each item in the last entry into a variable
    const temperature = lastEntry.temperature;
    const humidity = lastEntry.humidity;
    const red = lastEntry.red;
    const green = lastEntry.green;
    const blue = lastEntry.blue;
    const clear = lastEntry.clear;
    const timestamp = lastEntry.timestamp;
  
    // Insert the variables into the HTML
    document.getElementById("temperature").innerHTML = temperature;
    document.getElementById("humidity").innerHTML = humidity;
    document.getElementById("red").innerHTML = red;
    document.getElementById("green").innerHTML = green;
    document.getElementById("blue").innerHTML = blue;
    document.getElementById("clear").innerHTML = clear;
    document.getElementById("timestamp").innerHTML = timestamp;
  });
