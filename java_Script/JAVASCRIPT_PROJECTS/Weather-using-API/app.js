document.getElementById("searchBtn").addEventListener("click", () => {

    const cityInput = document.getElementById("cityInput");
    const city = cityInput.value.trim();

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    fetch(`https://api.weatherapi.com/v1/current.json?key=e8a44c6bb5e242cfaa175858260901&q=${city}&aqi=yes`)
        .then(response => response.json())
        .then(data => {

            if (data.error) {
                alert("City not found");
                return;
            }

            document.getElementById("cityName").innerText = data.location.name;
            document.getElementById("temparature").innerText = data.current.temp_c + " °C";
            document.getElementById("description").innerText = data.current.condition.text;
            document.getElementById("humidity").innerText = "Humidity: " + data.current.humidity + " %";
            document.getElementById("windSpeed").innerText = "Wind Speed: " + data.current.wind_kph + " kph";
            document.getElementById("feelsLike").innerText = "Feels Like: " + data.current.feelslike_c + " °C";
            document.getElementById("pressure").innerText = "Pressure: " + data.current.pressure_mb + " hPa";

            cityInput.value = "";
        })
        .catch(() => alert("Something went wrong. Please try again later."));
});
