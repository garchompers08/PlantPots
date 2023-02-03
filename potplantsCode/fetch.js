fetch("fixed_data.json")
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    let placeholder = document.querySelector("#data-output");
    let out = "";
    for(let item of data.data){
      out += `
        <tr>
          <td>${item.temperature}</td>
          <td>${item.humidity}</td>
          <td>${item.red}</td>
          <td>${item.green}</td>
          <td>${item.blue}</td>
          <td>${item.clear}</td>
          <td>${item.timestamp}</td>
        </tr>
      `;
    }
    placeholder.innerHTML = out;
    return data;
  })
  .then(function(data){
    if (data && data.data) {
      let lastData = data.data[data.data.length - 1];
      return lastData;
    } else {
      console.error("No data found");
    }
  })
  .then(function(lastData){
	let red = lastData.red.toString(16).padStart(2, "0");
  let green = lastData.green.toString(16).padStart(2, "0");
  let blue = lastData.blue.toString(16).padStart(2, "0");
  let color = `#${red}${green}${blue}`;
   

 let placeholder = document.querySelector("#lastdata_temp");
    let pElement = document.createElement("p");
    pElement.innerText =`Temperature: ${lastData.temperature.toFixed(2)}°C `;
    placeholder.appendChild(pElement);

    let humidityPlaceholder = document.querySelector("#lastdata_humidity");
    let humidityPElement = document.createElement("p");
    humidityPElement.innerText =`Humidity: ${lastData.humidity.toFixed(2)}% `;
    humidityPlaceholder.appendChild(humidityPElement);
   
	let colorPlaceholder = document.querySelector("#lastdata_color");
  let colorPElement = document.createElement("p");
  colorPElement.innerText =`Color: ${color}`;
  colorPlaceholder.appendChild(colorPElement);
 return lastData;
  })
  .then(function(lastData){
    let placeholder = document.querySelector("#temp_res");
    let temp = lastData.temperature.toFixed(2);
    if (temp < 21){
      let out = `
        <p>The plant should be placed in a higher temperature area </p>` ;
      placeholder.innerHTML = out;
    }
    else if (temp > 32){
      let out = `
        <p>The plant should be placed in a lower temperature area  </p>` ;
      placeholder.innerHTML = out;
    }
    else {
      let out = `
        <p>The temperature is optimal and suitable for the plant, it is providing a healthy environment for it to grow and thrive  </p>` ;
      placeholder.innerHTML = out;
    }
	return lastData;
  })
  .then(function(lastData){
    let placeholder = document.querySelector("#humidity_res");
    let humidity = lastData.humidity.toFixed(2);
    if (humidity < 50){
      let out = `
        <p>The plant should be placed in a higher humidity area </p>` ;
      placeholder.innerHTML = out;
    }
    else if (humidity > 70){
      let out = `
        <p>The plant should be placed in a lower humidity area </p>`;
 placeholder.innerHTML = out;
    }
else{
let out = `
        <p>The plant is in a good humidity area </p>`;
 placeholder.innerHTML = out;
    }
return lastData;
})

.then(function(lastData){
  let placeholder = document.querySelector("#red_res");
  let red = lastData.red;
  if (red < 71){
    let out = `
      <p>The plant is in good condition </p>` ;
    placeholder.innerHTML = out;
  }
  else if (red > 71 && red < 110){
    let out = `
      <p>Water the plant </p>` ;
    placeholder.innerHTML = out;
  }
  else if (red > 110){
    let out = `
      <p>Cut down the brown areas </p>` ;
    placeholder.innerHTML = out;
  }
})


.catch(function(error) {
console.error("An error occurred while fetching data:", error);
});

