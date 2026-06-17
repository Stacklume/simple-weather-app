async function getWeather() {

    const city = document.getElementById("city").value;

    const apiKey = "ADD_YOUR_API_KEY_HERE";

    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);

    const data = await response.json();

    console.log(data);

    const temperature = data.main.temp;

    document.getElementById("result").innerHTML =
    `Temperature in ${city} is ${temperature}°C`;
}