function formatDate(date) {
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
  
    let dayIndex = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let day = days[dayIndex];
  
    return `${day} ${hours}:${minutes}`;
  }
  
  function displayWeatherCondition(response) {
    console.log(response);
  
    document.querySelector("#city").innerHTML = response.data.name;
    document.querySelector("#current-temp").innerHTML = `${Math.round(
      response.data.main.temp
    )}°c`;
  }
  function searchCity(city) {
    let apiKey = "ac436c588dcb5d062b379cefffcf3ea1";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeatherCondition);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let city = document.querySelector("#searchCity").value;
    searchCity(city);
  }
  let searchForm = document.querySelector("#searchForm");
  searchForm.addEventListener("submit", handleSubmit);
  
  function searchLocation(position) {
    let apiKey = "ac436c588dcb5d062b379cefffcf3ea1";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeatherCondition);
  }
  