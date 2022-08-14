class Weather {
  constructor(city, country) {
    this.apiKey = "660d226de32352f6f8c9d8ee174389a0";
    this.city = city;
    this.country = country;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apiKey}`
    );

    const responseData = await response.json();

    return responseData; // currentObersvation
  }

  // Change weather location
  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}
