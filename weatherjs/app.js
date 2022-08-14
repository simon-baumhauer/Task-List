// Init weather object
const weather = new Weather("London", "uk");
// Init UI
const ui = new UI();

// Get weather on DOm load

document.addEventListener("DOMContentLoaded", getWeather);

//weather.changeLocation("Berlin", "de");

function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      console.log(results);
      ui.paint(results);
    })
    .catch((err) => console.log(err));
}
