
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
      logo.setAttribute('width', '350');
      logo.setAttribute('height', '350');

      name.textContent = `${business.name}`;
      address.textContent = `Adresss: ${business.address}`;
      phone.textContent = `Phone: ${business.phone}`;
      membership.textContent = `Membership: ${business.membership}`;
      website.textContent = `Website: ${business.website}`;
      website.setAttribute('href', business.website);
      website.setAttribute('target', 'blank');
      console.log(website);
      
  
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
