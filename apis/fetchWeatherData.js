export const fetchWeatherData = async () => {
  try {
    const apiKey = "612cbf06bf06319c9a453dfb40ec6f8e";

    // Obtener la ubicación del usuario
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

        const response = await fetch(url);
        const data = await response.json();

        console.log("data", data);

        const weatherContainer = document.querySelector(".weather");
        const icon = data.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;

        const temperature = data.main.temp;
        if (temperature < 15) {
          weatherContainer.style.backgroundColor = "blue";
        } else if (temperature > 20) {
          weatherContainer.style.backgroundColor = "orange";
        } else if (temperature > 25) {
          weatherContainer.style.backgroundColor = "red";
        }

        weatherContainer.innerHTML = `<div class="weather-section">
        <h1>El clima en ${data.name}</h1>
        <p>${data.main.temp} °C</p>
        <img src="${iconUrl}" alt="Weather Icon">
      </div>`;
      },
      (error) => {
        console.error("Error al obtener la ubicación:", error);
      }
    );
  } catch (error) {
    console.error("Error al obtener el clima:", error);
  }
};
