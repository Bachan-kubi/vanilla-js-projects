const apiKey = "c14f92927d3fbdbfcf9d1934d5bc5655";
const cityInput = document.querySelector(".city-input");
const searchButton = document.querySelector(".search-button");
const notFoundSection = document.querySelector(".not-found");
const searchCitySection = document.querySelector(".search-city");
const weatherInfoSection = document.querySelector(".weather-info");
const countryText = document.querySelector(".country-text");
const temperatureText = document.querySelector(".temp-text");
const conditionText = document.querySelector(".condition-text");
const humidityText = document.querySelector(".humidity-txt-value");
const windText = document.querySelector(".wind-txt-value");
const weatherSummaryImg = document.querySelector(".weather-summary-img");
const currentDateText = document.querySelector(".current-date-text");
const forecastItemsContainer = document.querySelector(".forecast-item-container");
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
  if (weatherData.cod !== 200) {
    showDisplaySection(notFoundSection);
    return;
  }
  // console.log(weatherData);
  const {
    name: country,
    main: { temp, humidity },
    weather: [{ id, main }],
    wind: { speed },
  } = weatherData;
  countryText.textContent = country;
  temperatureText.textContent = `${Math.round(temp)} °C`;
  conditionText.textContent = main;
  humidityText.textContent = `${humidity}%`;
  windText.textContent = `${speed} m/s`;
  weatherSummaryImg.src = `./assets/weather/${getWeateherIcon(id)}`;
  currentDateText.textContent = getCurrentDate();
  await updateForecastInfo(city);
  showDisplaySection(weatherInfoSection);
}
async function updateForecastInfo(city) {
  const forecastData = await getFetchData("forecast", city);
  const timeTaken = "12:00:00";
  const todayDate = new Date().toISOString().split("T")[0];
  forecastItemsContainer.innerHTML = "";
  forecastData.list.forEach((forecastWeather) => {
    if (
      forecastWeather.dt_txt.includes(timeTaken) &&
      !forecastWeather.dt_txt.includes(todayDate)
    ) {
      // console.log(forecastData);
      updateForecastItem(forecastWeather);
    }
  });
  // console.log(todayDate);
  // console.log(forecastData);
}
function updateForecastItem(forecastWeather){
  // console.log(forecastWeather);
  const {
    dt_txt: date,
    main: { temp },
    weather: [{ id }],
  }=forecastWeather;
  const dateTaken = new Date(date);
  const dateOptions = {
    day: "2-digit",
    month: "short",
  };
  const dateResult = dateTaken.toLocaleDateString("en-US", dateOptions);
  const forecastItem = `
    <div class="forecast-item">
            <h5 class="forecast-item-date regular-text">${dateResult}</h5>
            <img src="./assets/weather/${getWeateherIcon(id)}" class="forecast-item-img" alt="">
            <h5 class="forecast-item-temp">${Math.round(temp)}°C</h5>
          </div>
  `;
  forecastItemsContainer.insertAdjacentHTML("beforeend",forecastItem);

  
}
function getCurrentDate() {
  const currentDate = new Date();
  const options = {
    weekday: "short",
    day: "2-digit",
    month: "short",
  };
  return currentDate.toLocaleDateString("en-US", options);
}
function getWeateherIcon(id) {
  if (id <= 232) return "thunderstorm.svg";
  if (id <= 321) return "drizzle.svg";
  if (id <= 531) return "rain.svg";
  if (id <= 531) return "rain.svg";
  if (id <= 622) return "snow.svg";
  if (id <= 781) return "atmosphere.svg";
  if (id <= 800) return "clear.svg";
  else return "clouds.svg";
}

function showDisplaySection(section) {
  [notFoundSection, searchCitySection, weatherInfoSection].forEach(
    (section) => {
      section.style.display = "none";
    }
  );
  section.style.display = "flex";
}
