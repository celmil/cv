import { getWeather } from "./getWebInfo.js";

const weatherText = document.getElementById("weatherInfo");




main(); 

function main(){
    //getResults().then(insertResults);
    getWeather().then(logWeather);
    
}

function logWeather(weather){
    weatherText.innerHTML = `Den kommande timmen är det ${weather}C grader i Djupvik.`;
}
