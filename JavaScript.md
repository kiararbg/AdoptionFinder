# Pet Adoption Finder JavaScript
## Variable Naming & Functionality 
```Javascript
    const petElements = [];
```

## Function Naming & Modularity
```Javascript
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
```
## Arrays & Objects Usage
```Javascript
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

  ### Array Methods
  ```JavaScript
          const filteredPets = pets.filter(pet =>{
            //Make sure country and country.name exist and are of correct type
            if(!pet || typeof pet.name !== 'string'){
                console.warn('Invalid pet object found:', pet);
                return false;
            }
            return pet.name.toLowerCase().includes(searchTerm.toLowerCase());
        });
```
## Looping/Iteration
```Javascript
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
```
## JSON Data Handling 
```Javascript
 let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
 ```
 
 ## Web Storage
 ```javascript
  localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
```
## Saving/Retrieving User Data
```javascript
localStorage.getItem('searchHistory')
```
## Cookies with Expiry Date
```javascript
document.cookie = 'visitedBefore=true'
```
## DOM Manipulation
```javascript
const petDiv = document.createElement('div');
```

## CSS Manipulation via JS
```javascript
messageDiv.style.padding = '10px';
messageDiv.style.margin = '20px 0';
messageDiv.style.backgroundColor = '#e5e6e1'
messageDiv.style.color = 'rgb(11, 34, 11)';
messageDiv.style.borderRadius= '8px';
messageDiv.style.textAlign = 'center';
```

## Comment & Code Readability
```javascript
// Check if visitedBefore cookie exists
```