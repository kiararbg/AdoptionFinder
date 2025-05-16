# Pet Adoption Finder
This code generates pets that are up for adoption, this as well shows you their data and a button leading to their adoption site and offers you a search functionality. This was made using HTML, CSS, and JavaScript.

## Table of Contents
1. [HTML Structure](#html-structure)
2. [CSS Structure](#css-structure)
3. [JavaScript Structure](#javascript-structure)
    - [greet.js](#greetjs)
    - [data.js](#datajs)
    - [render.js](#renderjs)
    - [timer.js](#timerjs)
    - [search.js](#searchjs)

## HTML Structure
The HTML creates the interface, When the link is opened the user can see the header and pets.
```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pet Adoption Finder</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="Header">
        <h1>Pet Adoption Finder</h1>
        <p>Find a pet to adopt!</p>
      <div class="Search">
            <input type="text" id="searchInput" placeholder="Search By Name">
            <br>
            <p id="recentSearches">Recent Searches: </p>
            <button id="clearSearchHistory">Clear Search History</button>
        </div>
    </div>


    <div id="resultsContainer"></div>
```
Key components of HTML
- A `div` with the class given called `header` and a nested `div` inside with a class given `search` for the inputs where the user types and a button to clear history.
- A `div` with an Id called `resultsContainer`, which will hold all the pets up for adoption.

## CSS Structure
The CSS helps the Pet Adoption Finder have a more clean design as well as adding color.
```CSS
body{
    background-color: whitesmoke;
}

.Header {
    background-color:whitesmoke;
    text-align: center;
    margin: 15px;
}

h1, p{
    color: rgb(33, 45, 67);
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    margin: 5px;
}

h1{
    font-size: 35px;
    padding: 5px;
}

p{
    font-size: 18px;
}

input{
    border: solid 3px  rgb(47, 58, 82); 
    border-radius: 5px;
    padding: 5px;
    margin: 5px;
    font-size: 15px;
}

.card{
    margin: 15px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 10px;
    background-color: white;
    width: 370px;
    height: 400px;
    text-align: center;
    box-shadow: 0 2px 5px rgba(210, 125, 125, 0.1);
    flex-wrap: wrap;
}

p > p{
    margin:10px;
}

.pet{
    padding: 20px;
    background-color: #fff;
}

.cards{
    display: flex;
    flex-direction: row;
    padding-top:5px ;
    flex-wrap: wrap;
}

img{
    border: 1px solid rgb(52, 48, 48);
    border-radius:5px ;
    margin: 5px;
}

.info{
    color:rgb(11, 34, 11) ;
}

button {
    border-radius: 5px;
    background-color:rgb(183, 206, 232);
    border-color: rgb(137, 138, 158);
    font-size: 17px;
    margin: 5px;
    
}

.adopt{
    background-color: rgb(93, 183, 93);
    border-radius: 5px;
    border-color: green;
    border: 2px solid green;
    padding: 8px;
    font-size: 18px;
    margin: 10px;
    text-decoration: none;
    color: rgb(11, 34, 11);
    
}

#dismissMessage{
    background-color: #e0dcdc;
    border-radius: 5px;
    border: 2px solid  rgb(9, 31, 29);
    padding: 8px;
    font-size: 16px;
    margin: 5px;
    text-decoration: none;
    color: rgb(11, 34, 11);
}

.adopt:hover{
    cursor: pointer;
}

#resultsContainer{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    row-gap:25px;
    column-gap:10px;
    margin-top:20px;
}
```
- Styling of the body keeping the `background-color` consistent.
- Styling of the header class with `text-align` and its `margin`.
- Styling of the fonts with its `font-size`, `color`, `padding`, and `margin`
- Inputs styling helping with the `border` and `font-size`.
- Styling the `pets` `cards` `card` and `info` classes with its `margin` `padding` and `color`.
- Designing other aspects like the `button` and message that pops up when you're on the page for more than 5 minutes.

## JavaScript Structure
JavaScript helps the websites functionality work for users to see and use.
 
 ### greet.js
 ```JavaScript
 function greetUser(){
    // Check if visitedBefore cookie exists
    const hasVisitedBefore = document.cookie.includes('visitedBefore=true');
    if (hasVisitedBefore){
        alert ("Welcome back to pet adoption finder!")
    }else{
        const expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate() + 7);
        document.cookie = 'visitedBefore=true'
        expires=`${expiryDate.toUTCString()}; path=/`;
        alert("Welcome to Pet Adoption Finder!");
    }
}
greetUser()
```
Key components of greet.js
- This is a small code that greets users with a pop up saying welcome to the site, if the user has visited the site before it welcomes them with a welcome back message.
- Stored in session storage.
- This is used with the help of `cookies`.

### data.js
```JavaScript
const pets=
[
    {   image: "https://24petconnect.com/image/656066676",
        name:"Darion",
        gender:"Male",
        breed:"American Pit Bull Terrier", 
        age: "9 months",
        price:"$0",
        link:"https://www.azhumane.org/adopt/#A799138"
         
    },
   
    {
        image:"https://24petconnect.com/image/656390155",
        name:"salmon",
        gender:"Male",
        breed: "Domestic Shorthair",
        age:"9 weeks",
        price:"$225",
        link: "https://www.azhumane.org/adopt/#A811090"          
     },
  
   {
        image:"https://24petconnect.com/image/656391280",
        name:"Carrot",
        gender:"Female",
        breed: "Domestic Shorthair",
        age: "2 years",
        price: "$75",
        link: "https://www.azhumane.org/adopt/#A808207" 
    },

    {
        image:"https://24petconnect.com/image/656379580",
        name:"Tyga",
        gender:"Male",
        breed:"doberman pinscher",
        age: "12 weeks",
        price: "$475",
        link: "https://www.azhumane.org/adopt/#A809922"          
    },

    {
        image:"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/76336084/1/?bust=1746794538",
        name:"Dakota",
        gender:"Female",
        breed: "Siberian Husky",
        age: "1 year",
        price: "$0",
        link: "https://www.azhumane.org/adopt/#A804999"        
    },
  
   {
        image:"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/76336576/1/?bust=1746796323&width=1080",
        name:"Natalia",
        gender:"Female",
        breed: "Domestic Shorthair",
        age: "1 year",
        price: "$75",
        link: "https://www.petfinder.com/cat/natalia-76336576/az/phoenix/arizona-humane-society-campus-for-compassion-az218/" 
    },

    {
        image:"https://24petconnect.com/image/656386638",
        name:"Baby Girl",
        gender:"Female",
        breed: "Domestic Mediumhair",
        age: "7 years",
        price: "$75",
        link: "https://www.azhumane.org/adopt/#A805771"      
    },

    {
        image:"https://rawznaturalpetfood.com/wp-content/uploads/tuxedo-cats.jpg",
        name:"Furr-gie",
        gender:"Female",
        breed: "Domestic Shorthair",
        age: "5 years",
        price: "$75",
        link: "https://www.azhumane.org/adopt/#A809568"      
    },

    {
        image:"https://24petconnect.com/image/655681567",
        name:"Cookie",
        gender:"Female",
        breed: "Belgian Manlinois",
        age: "1 year",
        price: "$99",
        link: "https://www.azhumane.org/adopt/#A810720"      
    },

    {
        image:"https://24petconnect.com/image/655643043",
        name:"Chip",
        gender:"Male",
        breed: "Alaskan Husky",
        age: "2 years",
        price: "$99",
        link: "https://www.azhumane.org/adopt/#A807024"      
    },
    
    {
        image:"https://24petconnect.com/image/655749293",
        name:"Tiger",
        gender:"Male",
        breed: "Domestic Shorthair",
        age: "4 years",
        price: "$75",
        link: "https://www.azhumane.org/adopt/#A811176"      
    },

    {
        image:"https://24petconnect.com/image/655747633",
        name:"Mocha",
        gender:"Male",
        breed: "Chihuahua",
        age: "9 years",
        price: "$99",
        link: "https://www.azhumane.org/adopt/#A810613"      
    },

    {
        image:"https://24petconnect.com/image/655753101",
        name:"Maeve",
        gender:"Female",
        breed: "American Pit Bull Terrier",
        age: "3 years",
        price: "$99",
        link: "https://www.azhumane.org/adopt/#A805457"      
    },

    {
        image:"https://24petconnect.com/image/655703008",
        name:"Mila",
        gender:"Female",
        breed: "Domestic Longhair",
        age: "10 weeks",
        price: "$225",
        link: "https://www.azhumane.org/adopt/#A809515"      
    },

    {
        image:"https://24petconnect.com/image/655639472",
        name:"Hammer",
        gender:"Male",
        breed: "Domestic Mediumhair",
        age: "1 year",
        price: "$75",
        link: "https://www.azhumane.org/adopt/#A807419"      
    },

    {
        image:"https://24petconnect.com/image/655567746",
        name:"Brother",
        gender:"Male",
        breed: "Domestic Shorthair",
        age: "5 years",
        price: "$75",
        link: "https://www.azhumane.org/adopt/#A811694"      
    },

    {
        image:"https://24petconnect.com/image/655109343",
        name:"Oreo",
        gender:"Male",
        breed: "Border Collie",
        age: "6 years",
        price: "$0",
        link: "https://www.azhumane.org/adopt/#A810212"      
    },

    {
        image:"https://24petconnect.com/image/656384002",
        name:"Dominic",
        gender:"Male",
        breed: "Australian Shepherd",
        age: "14 weeks",
        price: "$475",
        link: "https://www.azhumane.org/adopt/#A810978"      
    },

    {
        image:"https://24petconnect.com/image/656384149",
        name:"Dog Vader",
        gender:"Male",
        breed: "Chihuahua",
        age: "3 years",
        price: "$99",
        link: "https://www.azhumane.org/adopt/#A809685"      
    },

    {
        image:"https://24petconnect.com/image/656401213",
        name:"Mimi",
        gender:"Female",
        breed: "Pug",
        age: "3 years",
        price: "$125",
        link: "https://www.azhumane.org/adopt/#A811119"      
    },

    {
        image:"https://24petconnect.com/image/656375479",
        name:"Jamie",
        gender:"Male",
        breed: "Domestic Longhair",
        age: "7 years",
        price: "$0",
        link: "https://www.azhumane.org/adopt/#A812600"      
    },

  ];
  ```
  Key components of data.js
  - Data.js contains an array of objects. This holds all the pets up for adoptions data.

### render.js
```JavaScript
// step 1
// render countries
function renderPets(pets)
 {
  console.log('renderPets called with', pets.length, 'pets');
    const resultsContainer = document.getElementById('resultsContainer');
  
    // Check if results container exists
    if(!resultsContainer){
      console.error('Results Container not found');
      return;
    }

    // Clear the container
    resultsContainer.innerHTML = '';

    //If no pets found, show a message
    if(pets.length === 0){
      console.log('No pets found, showing empty message') // Debug log
      resultsContainer.innerHTML = `<p id="noResults">No Pets Found.</p>`;
      return;
    }   

    const petElements = [];

    pets.forEach(pet =>
     {
          
            const petDiv = document.createElement('div');
            petDiv.className = 'card';
            petDiv.innerHTML = `
                <h3 style="font-size: 22px">${pet.name}</h3>
                <img src="${pet.image}" alt="petImg" width="220px" height="180px">
                <p class="info">Gender: ${pet.gender}</p>
                <p class="info">Breed: ${pet.breed}</p>
                <p class="info">Age: ${pet.age}</p>
                <p class="info">Adoption Fee: ${pet.price}</p>
                <br>
                <a href="${pet.link}" target="_blank" class="adopt">Adopt!</a>
            `;
            petElements.push(petDiv);
    });

    // Append all country cards at once
    petElements.forEach(petelement => {
    resultsContainer.appendChild(petelement);
    });
      console.log(`Successfully rendered ${pets.length} pets`); // Debug log
  } 

renderPets(pets)
```
Key components of render.js
- This is what makes the pets and their info from data.js show up on the actual website and populate into the webpage.
- A button that says adopt and takes you to the actual page to adopt.

### timer.js
```JavaScript
function startTimer(){
    console.log('Starting session timer'); // Debug log

    //Check if timer already exists to prevent duplication
    if(document.getElementById('sessionTimer')) {
        console.log('Timer already exists, not creating a new one');
        return;
    }

    //Initialize session timer at 0 seconds 
    let sessionSeconds = 0;

    //Create timer display element
    const timerElement = document.createElement('div');
    timerElement.id = "sessionTimer";
    timerElement.style.marginTop = "20px";
    timerElement.style.marginBottom = "20px";
    timerElement.style.color = "rgb(11, 34, 11)";
    timerElement.style.fontSize = "20px";
    timerElement.style.textAlign = "center";
    document.body.appendChild(timerElement);

    // Update timer display every second
    let timerInterval = setInterval(() => {
        sessionSeconds++;
        updateTimerDisplay(timerElement, sessionSeconds);

        //Store current time in sessionStorage (automatically cleared when tab closes)
        sessionStorage.setItem('timeOnPage', sessionSeconds.toString());

        //Trigger special message for long sessions(over 5 minutes)
        if(sessionSeconds === 300){
            //5 minutes
            showLongMessage();
        }
    }, 1000);

    // When page is about to unload, stop the timer
    window.addEventListener('beforeunload', () =>{
        console.log('Page unloading, stopping timer'); // Debug log
        clearInterval(timerInterval);
    });
}

//Helper function format to display time
function updateTimerDisplay(element, totalSeconds){
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    let timeText = `⏱ Time on page: `;

    if(hours > 0 || minutes > 0){
        timeText += `${minutes}m `;
    }

    timeText += `${seconds}s`;
    element.textContent = timeText;
}

//Show message for users spending a long time on the site
function showLongMessage(){
    console.log('Showing long session message (5 minutes)');

    // check if messgae already exists to prevent duplicates
    if(document.getElementById('longSessionMessage')){
    console.log('Long message already exists');
    return;
}

const messageDiv = document.createElement('div');
messageDiv.id = "longSessionMessage";
messageDiv.style.padding = '10px';
messageDiv.style.margin = '20px 0';
messageDiv.style.backgroundColor = '#e5e6e1'
messageDiv.style.color = 'rgb(11, 34, 11)';
messageDiv.style.borderRadius= '8px';
messageDiv.style.textAlign = 'center';
messageDiv.innerHTML = `
<p style="color:rgb(11, 34, 11);">You've been exploring for 5 minutes! Thanks for your interest in our pet adoption finder.</p>
<button id="dismissMessage" style="margin-top: 10px; padding: 5px 10px; border:none; border-radius:4px; cursor:pointer;">
Dismiss
</button> 
`;

// Check if timer element exists
const timerElement = document.getElementById('sessionTimer');
if(timerElement){
    document.body.insertBefore(messageDiv, timerElement);
} else{
    document.body.appendChild(messageDiv);
}

//Add event listener to dismiss button
const dismissButton = document.getElementById('dismissMessage');
if(dismissButton){
    dismissButton.addEventListener('click', function(){
        const message = document.getElementById('longSessionMessage');
        if(message){
            message.remove();
            }
        });
    }
};


startTimer();
```
Key components of timer.js
- Sets a timer when the user opens a page.
- the timer is stored in session storage.
- When the page is reloaded the timer and session storage timer reset back to 0.
- After more than 5 minutes a pop up message shows up at the bottom of the page saying that the user has spent more than 5 minutes on the webpage.

### search.js
``` JavaScript
function InitializeSearch(){
    console.log("Initializing search functionality"); //Debug log
    //show all pets at the start
    renderPets(pets);
    const searchInput = document.getElementById('searchInput');
    // Check if search input exists
    if(!searchInput){
        console.error('search input element not found');
        return;
    }
    // Real time search
    searchInput.addEventListener('input', function(){
        const searchTerm = this.value.trim().toLowerCase();
        console.log('Input event detected, search term:', searchTerm); // Debug log

        //Perform search immediantely on each input
        if(searchTerm !== ''){
            searchPets(searchTerm);
        }else{
            // If search box is empty show all pets
            renderPets(pets);
        }
    });

    //Add keyboard shortcut for search (enter key)
    searchInput.addEventListener("keydown", function(e){
        if(e.key === 'Enter'){
            const searchTerm = searchInput.value.trim().toLowerCase();
            console.log('Enter key pressed for search term:', searchTerm); // Debug log
            if(searchTerm !== ''){
                searchPets(searchTerm);
                saveSearchTerm(searchTerm);
                // Clear the search box after pressing enter
                searchInput.value = '';
            }
        }
    }); // end of itializeSearch

    function searchPets(searchTerm){
        console.log('searchPets called with term:', searchTerm); //Debug log

        //Check if pets is available
        if(typeof pet === 'Undefined' || !Array.isArray(pets)){
            console.error('pets is not defined or not an array in searchPets');
            return;
        }

        //If Search term is empty, show all pets
        if(searchTerm === ''){
            console.log('Empty search term, showing all countries'); //Debug log
            renderPets(pets);
            return;
        }
        // Filter pets that match the search term
        const filteredPets = pets.filter(pet =>{
            //Make sure country and country.name exist and are of correct type
            if(!pet || typeof pet.name !== 'string'){
                console.warn('Invalid pet object found:', pet);
                return false;
            }
            return pet.name.toLowerCase().includes(searchTerm.toLowerCase());
        });

        console.log(`Found ${filteredPets.length} pets matching "${searchTerm}"`); //Debug log

        //Render the filtered pets
        renderPets(filteredPets);
    } // end of searchPets function


    function saveSearchTerm(term){
        let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
        const recentSearches = document.getElementById('recentSearches');
      
       

        //Limit history ti last 10 searches
        if(searchHistory.length>= 10){
            searchHistory.shift(); //Remove oldest search
        }

        //Save only if not already in history
        if(!searchHistory.includes(term)){
            searchHistory.push(term);
            recentSearches.innerText = `Recent Searches: ${searchHistory.join(", ")}`;
            localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
        }

        //Clear search history when button is clicked
        const clearSearch = document.getElementById('clearSearchHistory');
        clearSearch.addEventListener('click', ()=>{
            recentSearches.innerText = `Recent Searches: `;
            localStorage.removeItem('searchHistory');
        });

    } //end of saveSearchTerm function




}

InitializeSearch();
renderPets(pets);
```
Key components of search.js
- This is the major part of the website this is what allows you to search the name of the pet.
- Real time searching.
- Once typing in the input box and pressing `Enter`, what you have typed enters the search history.
- Search history is stored in local stprage and shows up on the pages search history as well.