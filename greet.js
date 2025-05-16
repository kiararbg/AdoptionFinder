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