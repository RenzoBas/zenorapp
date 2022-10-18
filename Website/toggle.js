// This makes the website visible
function on() {
    let toggle = 0;
    if(toggle == 0) {
        console.log("Turn On");
        document.getElementById("blackscreen").style.backgroundColor = "transparent";
        document.getElementById("blackscreen").style.color = "transparent";

        for(i = 0; i < 3; i++){
            document.getElementsByClassName("creedstext")[i].style.display = "block";
            }
    };
}


// This covers the whole website in a screen
function off() {
    let toggle = 1;
    if(toggle == 1) {
        console.log("Turn Off");
    document.getElementById("blackscreen").style.backgroundColor = "black";
    document.getElementById("blackscreen").style.color = "yellow";
    
    for(i = 0; i < 3; i++){
    document.getElementsByClassName("creedstext")[i].style.display = "none";
    }
    };
}