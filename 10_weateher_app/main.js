const apiKey = "c14f92927d3fbdbfcf9d1934d5bc5655";
const cityInput = document.querySelector(".city-input");
const searchButton = document.querySelector(".search-button");
// weather info elements
searchButton.addEventListener("click", () => {
  if (cityInput.value.trim() !== "") {
    updateWeatherInfo(cityInput.value)
    cityInput.value="";
    cityInput.blur();
  }
});
cityInput.addEventListener("keydown",(e)=>{
    if(e.key== "Enter" && cityInput.value.trim() !== ""){
        updateWeatherInfo(cityInput.value);
        cityInput.value="";
        cityInput.blur();
    }
});
