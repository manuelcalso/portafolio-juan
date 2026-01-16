export const fetchWeatherData = async () => {
  const weatherContainer = document.querySelector(".weather");
  if (!weatherContainer) return;

  // Estado inicial
  weatherContainer.innerHTML = "Cargando clima…";

  try {
    const apiKey = "612cbf06bf06319c9a453dfb40ec6f8e";

    // Envolver geolocalización en Promise
    const getPosition = () =>
      new Promise((resolve, reject) =>
        navigator.geolocation.getCurrentPosition(resolve, reject)
      );

    const position = await getPosition();
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=es`;
    const response = await fetch(url);
    const data = await response.json();

    if (!data || !data.main) throw new Error("Datos inválidos del clima");

    const temperature = Math.round(data.main.temp);
    const icon = data.weather?.[0]?.icon;
    const description = data.weather?.[0]?.description || "Clima actual";
    const city = data.name || "";

    const iconUrl = icon
      ? `https://openweathermap.org/img/wn/${icon}@2x.png`
      : "";

    // 🎨 Color de fondo según temperatura
    let bgColor = "#E0E0E0";
    if (temperature <= 14) {
      bgColor = "#64B5F6"; // frío
    } else if (temperature < 20) {
      bgColor = "#FDB72F"; // templado
    } else {
      bgColor = "#FF5353"; // cálido
    }

    weatherContainer.style.backgroundColor = bgColor;

    weatherContainer.innerHTML = `
      <div class="weather-section kalnia-medium">
        <h1>${city}</h1>
        <div class="weather-icon slide01">
          ${
            icon
              ? `<img src="${iconUrl}" alt="${description}" />`
              : ""
          }
        </div>
        <p>${temperature}°C</p>
      </div>
    `;
  } catch (error) {
    console.error("Error al obtener el clima:", error);

    weatherContainer.innerHTML = `
      <div class="weather-section kalnia-medium">
        <p>Clima no disponible</p>
      </div>
    `;
  }
};
