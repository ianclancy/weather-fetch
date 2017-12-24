function getWeather(latitude, longitude) {
  fetch(`/api/v1/forecast/${latitude},${longitude}`)
    .then(response => {
      return response.json();
    })
    .then(json => {
      let resultsDiv = document.getElementById("fetch-results");
      resultsDiv.innerHTML = `Selected latitude: ${latitude}°<br>Selected longitude: ${longitude}°<br>Current conditions: ${json.currently.summary}<br> Temperature: ${json.currently.temperature}°F`;
    });
}

function coordinatesSubmitFunction() {
  let latitude = document.getElementById("latitude").value;
  let longitude = document.getElementById("longitude").value;
  getWeather(latitude,longitude);
}
