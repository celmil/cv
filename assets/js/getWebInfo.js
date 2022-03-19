


export function getWeather() {
    return fetch("https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/18.1489/lat/57.3081/data.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        //extracts the value for temperature the closest hour, in celsius
        //rounds to the closest integer 
        let temperature = data.timeSeries[0].parameters[10].values[0];
        return Math.round(temperature);
    });
}