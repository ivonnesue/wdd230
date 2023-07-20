function toggleMenu(){
  document.getElementById("menubar").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open")
}
const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu; 




//last modified date on footer
const currentDate = new Date();
document.querySelector("#year").textContent = currentDate.getFullYear();

let lastUpdate = document.lastModified;
document.getElementById("updated").innerHTML= lastUpdate;