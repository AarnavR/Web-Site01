const yourName = document.getElementById("yourName");
const ourMessage = document.getElementById("ourMessage");

yourName.addEventListener("input",amazingFunction) 

function amazingFunction() {
    if(yourName.value) {
        ourMessage.innerText = yourName.value + " is cool";
    } else {
        ourMessage.innerText = "Please enter a name";
    }
 }
