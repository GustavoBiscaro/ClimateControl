 // Variables and elements selection
 const apiKey = "704d0a19344a5e92d7441b56615a0f3"; 
 const apiCountryURL = "https://flagsapi.com/BR/shiny/64.png";

 const cityInput = document.querySelector("#city-input");
 const searchBtn = document.querySelector("#search");

 const cityElement = document.querySelector("#city");
 const tempElement = document.querySelector("#temperature span");
 const descElement = document.querySelector("#description");
 const weatherIconElement = document.querySelector("#weather-icon");
 const countryElement = document.querySelector("#country");
 const umidityElement = document.querySelector("#umidity span");
 const windElement = document.querySelector("#wind span");

// Funções

const getWeatherData = async(city) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`

    
}
const showWeatherData = (city) => {

}

// Eventos

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();

     const city = cityInput.value;

     showWeatherData(city);
})

