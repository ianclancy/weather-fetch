let main = document.getElementById("main");

function getWeather() {
  fetch('/api/v1/forecast/42.36,-71.06')
    .then(response => {
      return response.json();
    })
    .then(json => {
      console.log(json.currently);
      let mainDiv = document.getElementById('main');
      mainDiv.innerHTML += `${json.currently.summary}. The temperature is ${json.currently.temperature}.`;
    });
}

getWeather();
