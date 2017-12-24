function getWeather(latitude, longitude) {
  fetch(`/api/v1/forecast/${latitude},${longitude}`)
    .then(response => {
      return response.json();
    })
    .then(json => {
      let mainDiv = document.getElementById("main");
      mainDiv.innerHTML += `The current weather conditions at coordinates (${latitude}, ${longitude}) are: ${json.currently.summary}. The temperature is ${json.currently.temperature}.`;
    });
}

function coordinatesSubmitFunction() {
  let latitude = document.getElementById("latitude").value;
  let longitude = document.getElementById("longitude").value;
  getWeather(latitude,longitude);
}
