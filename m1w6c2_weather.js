var weathers = [];
var selectedWeather

function buttonPressed(){

	//When you click the add button then this is to store the input value into var
	var city = document.getElementById("cityInput").value;

	console.log(city);

	//Get the city name API
	fetch('https://api.openweathermap.org/data/2.5/forecast/daily?q='+city+'&appid=9fd7a449d055dba26a982a3220f32aa2')
	.then(response => response.json())
	.then(data => {
		console.log(data)
		weathers = data["list"]
		for (var i = 0; i < weathers.length; i++){

		//Creating a tr
		var newTr = document.createElement("tr");

		//Create td1
		var td1 = document.createElement("td");

		//Create td2
		var td2 = document.createElement("td");

		//Create td3
		var td3 = document.createElement("td");

		//Create td4
		var td4 = document.createElement("td");

		//Create td5
		var td5 = document.createElement("td");

		//innerHTML for td1
		td1.innerHTML = new Date(weathers[i]["dt"]*1000);

		//innerHTML for td2
		td2.innerHTML = weathers[i]["weather"][0]["main"];

		//innerHTML for td3
		td2.innerHTML = (weathers[i]["temp"]["day"] - 273.15).toFixed(1) + " &deg;C";

		//innerHTML for td4
		var weatherImg = document.createElement("img");
		var weatherUrl = "https://openweathermap.org/img/wn/" + weathers[i]["weather"][0]["icon"] + "@2x.png";
		weatherImg.setAttribute("src", weatherUrl);
		td4.appendChild(weatherImg)

		//innerHTML for td5
		td5.innerHTML = "fifth column row " + i;

		//append td1 to tr
		newTr.appendChild(td1)

		//append td2 to tr
		newTr.appendChild(td2)

		//append td3 to tr
		newTr.appendChild(td3)

		//append td4 to tr
		newTr.appendChild(td4)

		//append td5 to tr
		newTr.appendChild(td5)

		newTr.weather = weathers[i];
		newTr.addEventListener('click', function(evt){
			selectedWeather = evt.currentTarget.weather
			document.getElementById("weatherImage").setAttribute("src", "https://openweathermap.org/img/wn/" + selectedWeather["weather"][0]["icon"] + "@2x.png")
			document.getElementById("date").innerHTML = new Date(selectedWeather["dt"]*1000);
			document.getElementById("temp").innerHTML = (selectedWeather["temp"]["day"] - 273.15).toFixed(1) + " &deg;C";
			document.getElementById("weather").innerHTML = selectedWeather["weather"][0]["main"];
			document.getElementById("pressure").innerHTML = selectedWeather["pressure"]
			document.getElementById("humidity").innerHTML = selectedWeather["humidity"]
		})

		//append tr to body
		document.getElementById("weatherBody").appendChild(newTr)
		}
	})

		.catch(function(err){
			console.log(err);
		})
}

	function formateDateTime(){

	}

	
	


