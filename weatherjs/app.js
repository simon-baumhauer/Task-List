// Init water object
const weather = new Weather("London", "uk");

// Get weather on DOm load

document.addEventListener("DOMContentLoaded", getWeather);

//weather.changeLocation("Berlin", "de");

function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      console.log(results);
    })
    .catch((err) => console.log(err));
}
