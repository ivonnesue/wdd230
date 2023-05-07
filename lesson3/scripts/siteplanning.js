const currentDate = new Date();
document.querySelector("#year").textContent = currentDate.getFullYear();

let lastUpdate = document.lastModified;
document.getElementById("updated").innerHTML= lastUpdate;
  