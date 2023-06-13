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
  
//Banner
let banner = document.querySelector(".banner");

let day = new Date().getDay();

if (day == 1 || day == 2)
{
    banner.classList.toggle("toggleOn");
} 

const closeBtn = document.querySelector("#close-button");

closeBtn.addEventListener("click", () => {
    banner.style.display = "none";
});

//Form date and time

const FormCurrentDate = new Date();
const month = currentDate.getMonth() + 1;
  const dayofWeek = currentDate.getDate();
  const year = currentDate.getFullYear();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
 
  
  const formDateTime = `${month.toString().padStart(2, '0')}-${dayofWeek.toString().padStart(2, '0')}-${year} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  
  document.getElementById("dateAndTime").value = formDateTime;

