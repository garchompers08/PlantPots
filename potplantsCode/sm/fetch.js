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
let placeholder = document.querySelector("#lastdata_temp");
let pElement = document.createElement("p");
pElement.innerText =`Temperature: ${lastData.temperature.toFixed(2)}°C `;
placeholder.appendChild(pElement);

})

.then(function(data){
	let placeholder = document.querySelector("#temp_res");
	let lastData = data.data[data.data.length - 1];
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
		<p>The temperature is in good condition  </p>` ;
		placeholder.innerHTML = out;
	}
})


.catch(function(error) {
console.error("An error occurred while fetching data:", error);
});

