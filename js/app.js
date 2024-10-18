let submitBtn = document.getElementById("submitBtn");
let locationEl = document.getElementById("location");
let description = document.getElementById("description");
let temperature = document.getElementById("temperature");
let windSpeed = document.getElementById("windSpeed")
let weatherIcon = document.getElementById("weatherIcon");

submitBtn.addEventListener("click", async () => {
    const location = document.getElementById("locationInput").value.trim();
    if (!location) {
        alert("Please enter a city name.");
        return;
    }

    const apiKey = '27feea7913aed8ae3358fecd6f43caaf';
    submitBtn.disabled = true;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);
    
    if (response.ok) {
        const data = await response.json();
        console.log(data)
        locationEl.textContent = data.name;
        description.textContent = data.weather[0].description;
        temperature.textContent = `Temperature: ${data.main.temp} °C`;
        windSpeed.textContent=`Wind Speed: ${data.wind.speed}`
        weatherIcon.style.display = 'inline';
        weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    } else {
        locationEl.textContent = "Location not found. Please try again.";
        description.textContent = "";
        temperature.textContent = "";
        weatherIcon.src = "";
    }
    submitBtn.disabled = false;
});
