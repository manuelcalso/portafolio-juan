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

        const weatherContainer = document.querySelector(".weather");
        const icon = data.weather[0].icon; // Icono del clima
        const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

        const temperature = data.main.temp;

        // Cambiar el color de fondo basado en la temperatura
        if (temperature <= 14) {
          weatherContainer.style.backgroundColor = "#64B5F6"; // Azul para ≤ 15
        } else if (temperature > 15 && temperature < 20) {
          weatherContainer.style.backgroundColor = "#FDB72F"; // Naranja para > 15 y < 20
        } else if (temperature >= 20 && temperature <= 25) {
          weatherContainer.style.backgroundColor = "FF5353"; // Rojo para ≥ 20 y ≤ 25
        } else {
          weatherContainer.style.backgroundColor = "FF5353"; // Rojo para > 25
        }

        // Mostrar el contenido del clima, solo si se encuentra el icono
        let iconHtml = "";
        if (icon) {
          iconHtml = `<img src="${iconUrl}" alt="Weather Icon">`;
        }

        weatherContainer.innerHTML = `<div class="weather-section kalnia-medium">
          <h1>${data.name}</h1>
          <div class="slide01">${iconHtml}</div>
          <p>${data.main.temp} °C</p>
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
