// Calls the concat function to join two or more arrays
function performConcatenation() {
    let pakistan = ["Islamabad","Karachi","Lahore"];
    let turkey = ["Ankara","Istanbul"];
    let china = ["Beijing","Shanghai","Shenzhen"];
 
    let pakTurkey = pakistan.concat(turkey); 
    document.getElementById("pakTurkey").innerHTML = pakTurkey;
 
    let pakTurkeyChina = pakistan.concat(turkey,china); 
    document.getElementById("pakTurkeyChina").innerHTML = pakTurkeyChina;
 }
 