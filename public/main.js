let main = document.getElementById("main");

function getWeather(latitude, longitude) {
  fetch(`/api/v1/forecast/${latitude},${longitude}`)
    .then(response => {
      return response.json();
    })
    .then(json => {
      console.log(json.currently);
      let mainDiv = document.getElementById('main');
      mainDiv.innerHTML += `The current weather conditions are: ${json.currently.summary}. The temperature is ${json.currently.temperature}.`;
    });
}

getWeather(42.36,-71.06);
