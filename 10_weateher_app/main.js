const apiKey = "c14f92927d3fbdbfcf9d1934d5bc5655";
const cityInput = document.querySelector(".city-input");
const searchButton = document.querySelector(".search-button");
const notFoundSection = document.querySelector(".not-found");
const searchCitySection = document.querySelector(".search-city");
const weatherInfoSection = document.querySelector(".weather-info");
// weather info elements
searchButton.addEventListener("click", () => {
  if (cityInput.value.trim() !== "") {
    updateWeatherInfo(cityInput.value);
    cityInput.value = "";
    cityInput.blur();
  }
});
cityInput.addEventListener("keydown", (e) => {
  if (e.key == "Enter" && cityInput.value.trim() !== "") {
    updateWeatherInfo(cityInput.value);
    cityInput.value = "";
    cityInput.blur();
  }
});

// fetching wea
async function getFetchData(endPoint, city) {
  // we can replace forecast instead of weather for 5 day forecast
  // const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`;
  const apiUrl = `https://api.openweathermap.org/data/2.5/${endPoint}?q=${city}&appid=${apiKey}&units=metric`;
  const response = await fetch(apiUrl);
  return response.json();
}

async function updateWeatherInfo(city) {
  const weatherData = await getFetchData("weather", city);
//   not found when data is missed
if(weatherData.weather !== 200){
    showDisplaySection(notFoundSection);
    return;
}
  console.log(weatherData);
}
function showDisplaySection(section) {

}
