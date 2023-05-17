//toggle menu 
function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open")
}

const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu; 

//today's date on header
const options = {
    weekday:"long",
    day:"numeric",
    month:"long",
    year:"numeric"
};

let today = new Date().toLocaleDateString("en-UK",options);

document.querySelector("#date").textContent = today;

//last modified date on footer
const currentDate = new Date();
document.querySelector("#year").textContent = currentDate.getFullYear();

let lastUpdate = document.lastModified;
document.getElementById("updated").innerHTML= lastUpdate;
  
