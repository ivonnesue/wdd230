function windchill(){
    const temp = document.getElementById("current-temp").innerText;
    const wind = document.getElementById("windSpeed").innerHTML;
    const windChill = document.getElementById("windChill");
    
   
    
    if(temp <= 50 && wind > 3){
       let formula = 35.74 + 0.6215 * temp - 35.75 * (wind**0.16) + 0.4275 * temp * (wind**0.16);
       windChill.textContent = formula.toFixed(2);
    }
    
    else{
        windChill.textContent = "N/A";
    }
    
    
    
}