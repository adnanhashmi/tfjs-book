// Calls the delete operator to remove a field or property
function performDeletion() {
    var country = {
       name: "Pakistan",
       capital: "Islamabad",
       location: "South Asia",
       flag: "pakistan.png",
       currency: "Rupees",
       ageInYears: 73,
       rulingParty: "PTI"
    };
 
    delete country.ageInYears;
    document.getElementById("message").innerHTML = country.name + " was founded " + country.ageInYears + " years ago, and is presently ruled by " + country.rulingParty + ".";
 }
 