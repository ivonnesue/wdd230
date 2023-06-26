const temp = document.querySelector("#current-temp").textContent;
const speed = document.getElementById("windSpeed").textContent;
const windChill = document.getElementById("windChill");



 
if(temp <= 50 && speed > 3){
   let formula = 35.74 + (0.6215 * temp) - 35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind,0.16);
   formula = parseFloat(formula).toFixed(2)
}

else{
    formula = "N/A";
}
    
