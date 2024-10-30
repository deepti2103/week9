secret.addEventListener('click',function(){
    alert('Bird is the word');
});
//when the user presses the lights on button I want to replace the image in'lightbulb' with the version that shows the light on//
lights_on.addEventListener('click',function(){
    console.log("Lights turned on");
    document.getElementById("lightbulb").src = "lightbulb_on.webp";
    document.getElementById('lights_on').style.display="none";
    document.getElementById('lights_off').style.display="initial";

    //Apply  the light class to the body of the page//
    document.body.classList.toggle('light');
});

lights_off.addEventListener('click',function(){
    console.log("Lights turned off");
    document.getElementById("lightbulb").src = "lightbulb_off.webp";
    document.getElementById('lights_on').style.display="initial";
    document.getElementById('lights_off').style.display="none";
    document.body.classList.toggle('light');
});
