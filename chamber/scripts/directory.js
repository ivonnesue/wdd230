
async function getData() {
    const response = await fetch('json/data.json');
    const data = await response.json();

    displayBusiness(data.businesses);
}

const displayBusiness = (businesses) => {
    const cards = document.querySelector('div.cards'); // select the output container element
  
    businesses.forEach((business) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let logo = document.createElement('img');
      let name = document.createElement('h2');
      let address = document.createElement('p');
      let phone = document.createElement('p');
      let membership = document.createElement('p');
      let website = document.createElement('a');
  
      // Build the h2 content out to show the business's full name - finish the template string
      name.textContent = `${business.name}`;
  
      // Build the image logo by setting all the relevant attribute
      logo.setAttribute('src', business.logo);
      logo.setAttribute('alt', `logo of ${business.name} ${[business]}`);
      logo.setAttribute('loading', 'lazy');
      logo.setAttribute('width', '300px');
      logo.setAttribute('height', 'auto');

      name.textContent = `${business.name}`;
      address.textContent = `${business.address}`;
      phone.textContent = `${business.phone}`;
      membership.textContent = `Membership: ${business.membership}`;
      website.setAttribute('href', business.website);
      website.setAttribute('target', '_blank');
      website.textContent = `${business.website}`;
      
  
      // Append the section(business) with the created elements
      card.appendChild(logo);
      card.appendChild(name);
      card.appendChild(address);
      card.appendChild(phone);
      card.appendChild(membership);
      card.appendChild(website);
      
    cards.appendChild(card);
    }); // end of forEach loop
  } // end of function expression

getData();

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".cards");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("cards");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("cards");
}

