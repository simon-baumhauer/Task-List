// Init Storage
const storage = new Storage();
// Get Stored location data
const weatherLocation = storage.getLocationData();
// Init weather object
const weather = new Weather("Berlin", "de");
// Init UI
const ui = new UI();

// Get weather on DOm load

document.addEventListener("DOMContentLoaded", getWeather);

// Change locatione event

document.getElementById("w-change-btn").addEventListener("click", (e) => {
  const city = document.getElementById("city").value;
  const country = document.getElementById("country").value;

  weather.changeLocation(weatherLocation.city, weatherLocation.country);

  // Set location LS
  storage.setLocationData(city, country);

  // Get and display weather
  getWeather();

  // Close modal
  $("#locModal").modal("hide");
});

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
