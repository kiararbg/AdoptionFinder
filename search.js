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