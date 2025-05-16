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