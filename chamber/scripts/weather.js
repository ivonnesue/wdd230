const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windSpeed = document.querySelector('#windSpeed');
const url = "https://api.openweathermap.org/data/2.5/weather?lat=39.1457&lon=-121.5913&units=imperial&appid=699464eaf210022dc808bbdc771f5299";

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        //console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  function displayResults(weatherData){
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
    
    const desc = weatherData.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
    windSpeed.innerHTML = `<strong>${weatherData.wind.speed.toFixed(0)}</strong> mph`;
    

}
  apiFetch();

  function windchill(){
    const temp = currentTemp.innerText;
    const speed = windSpeed.innerHTML;
    const windchill = document.getElementById("windChill");
        
    if(temp <= 50 && speed > 3){
      let formula = 35.74 + (0.6215 * temp) - 35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind,0.16);
      formula = formula.toFixed(2)
   }
   
   else{
       formula = "N/A";
   }
   windchill.innerHTML = `${formula}`;
  }

  windchill()