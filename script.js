let defaultPosition = {
    lat: 9.0125,
    lon: 125.608063
  }

let latitude = prompt("Please enter a Latitude", "")
let longitude = prompt("Please enter a Longitude", "")


fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly&appid=491361de172915b2052e6aee3f033536`)
.then(response => response.json())
.then(data => {
  document.getElementById('city').innerText = data.timezone
  document.getElementById('temp').innerText = `Temperature: ${Math.round(9 / 5 * (data.current.temp - 273) + 32)}F°`
  document.getElementById('humidity').innerText = `Humidity: ${data.current.humidity}%`
  document.getElementById('wind').innerText = `Wind Speed: ${data.current.wind_speed}mph`
  document.getElementById('uv').innerText = `UV Index: ${data.current.uvi}`
})