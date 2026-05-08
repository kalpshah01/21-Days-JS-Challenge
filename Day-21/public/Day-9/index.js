document.getElementById("searchbutton").addEventListener("click", function (e) {
  e.preventDefault();
  let key = "53ec1f8bf6ed32942aee8ce2a3623153";
  let city = document.getElementById("searchcity").value;
  
  try
  {
    if (city === "") {
    alert("Please enter a city name");
    return;
  }
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`,
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      document.getElementById("weatherbody").innerHTML = `
            
            <h3 class="weather__city ">${data.name}, ${data.sys.country}</h3>
            <br>
              <div class="weather__card">
                <i class="fa-solid fa-temperature-full"></i>
                <div>
                    <p>Real Feel</p>
                    <p class="weather__realfeel">${data.main.feels_like}</p>
                </div>
            </div>
            <div class="weather__card">
                <i class="fa-solid fa-droplet"></i>
                <div>
                    <p>Humidity</p>
                    <p class="weather__humidity">${data.main.humidity}</p>
                </div>
            </div>
            <div class="weather__card">
                <i class="fa-solid fa-wind"></i>
                <div>
                    <p>Wind Speed</p>
                    <p class="weather__wind">${data.wind.speed}</p>
                </div>
            </div>
            <div class="weather__card">
                <i class="fa-solid fa-gauge-high"></i>
                <div>
                    <p>Pressure</p>
                    <p class="weather__pressure">${data.main.pressure}</p>
                </div>
            </div>
            `;
      console.log(data);
    });
}
catch(error)
{
    console.log(error);
    alert("An error occurred while fetching the weather data. Please try again later.");    
}
});
