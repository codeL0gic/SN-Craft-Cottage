"use strict"
//weather map API Development

(function()  {
    const url = "api.openweathermap.or/data/2.5/weather?lat={lat}&lon={lon}&appid={d86c4488004cf927b42b4e40b3793ebc}";
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.send();

}

(document)
document.('.forecast-button').addEventListener{('click', function(e) {

('.forecast-button').on('click', function(e) {
    e.preventDefault();
    getWeatherData();
});
//get weather data when user clicks Forecast button, then add temp & conditions to view