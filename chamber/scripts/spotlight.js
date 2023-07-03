async function getData() {
    const response = await fetch('json/data.json');
    const data = await response.json();
    //console.log(data);
    
    displaySpotlight(data.businesses);
}



getData();

const spotlightMembership = [];
const spotlightContainer = document.querySelector(".spotlights");

function generateRandomNumbers(max) {
    let numbers = [];
    let number;
    for (let index = 0; index < 3; index++) {
        do {
            min = 0;
            max = Math.floor(max);
            number = Math.floor(Math.random() * (max - min + 1)) + min;
        } while (numbers.includes(number) == true);
        numbers.push(number);
    }
    return numbers;
}

function displaySpotlights(businesses) {
    businesses.forEach((business) => {
        if (business.membership == "gold" || business.membership == "silver") {
            spotlightMembership.push(business);
        }
    });

    let membership = spotlightMembership.length - 1;
    let randomNumbers = generateRandomNumbers(membership);
    let i = 1;
    randomNumbers.forEach((number) => {
        let spot = spotlightMembership[number];
        let div = document.createElement("div");
        div.classList.add("spotlight");
        if (i === 3) {
            div.setAttribute("id", "hidden-spotlight");
        }
        let businessName = document.createElement("span");
        businessName.classList.add("title");
        businessName.textContent = `${spot.name}`;
        let logo = document.createElement("img");
        logo.setAttribute("src", `${spot.logo}`);
        logo.setAttribute("alt", `${spot.name} logo`);
        let phone = document.createElement("span");
        phone.textContent = `${spot.phone}`;
        let website = document.createElement("a");
        website.classList.add("link-low-profile");
        website.setAttribute("href", `${spot.website}`)
        website.setAttribute("target", "blank")
        website.textContent = "Website";

        div.appendChild(businessName);
        div.appendChild(logo);

        div.appendChild(phone);
        div.appendChild(website);
        spotlightContainer.appendChild(div);
        i++;
    });
   
    
}