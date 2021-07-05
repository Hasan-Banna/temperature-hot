const apiKey = '58eba4590dddbc7fdc7fe81a40df64e0';
const apiBase = 'http://api.openweathermap.org/data/2.5/weather';


const getWeatherData = city => {
    const url = `${apiBase}?q=${city}&units=metric&appid=${apiKey}`;
    fetch(url)
        .then(Response => Response.json())
        .then(data => {
            console.log(data);
            document.getElementById('show-city').innerText = data.name || 'unknown Location!';
            document.getElementById('show-temp').innerText = data.main.temp;
            document.getElementById('weather-status').innerText = data.weather[0].main;
            document.getElementById('icon').setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
            document.getElementById('inputCity').value = "";
        })
}

getWeatherData('Dhaka');

const searchButton = document.getElementById("button").addEventListener("click", function(){
    const inputCity = document.getElementById("inputCity").value;
    getWeatherData(inputCity);
})

