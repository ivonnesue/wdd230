//Form date and time

const FormCurrentDate = new Date();
const month = currentDate.getMonth() + 1;
  const dayofWeek = currentDate.getDate();
  const year = currentDate.getFullYear();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
 
  
  const formDateTime = `${month.toString().padStart(2, '0')}-${dayofWeek.toString().padStart(2, '0')}-${year} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  
  document.getElementById("dateAndTime").value = formDateTime;
