var dog = 0;
var cat = 0;
var hen = 0;
var lion = 0;

function startClassification() {
    navigator.mediaDevices.getUserMedia({audio:true});    
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/l9R29olae/model.json',modelready);
}
function modelready() {
    classifier.classify(gotResults);    
}
function gotResults(error, results) {
   if(error){
       console.error(error);    
   } else{
       console.log(results);  
       console.log(results);
       console.log(results);
       if(error) {
        console.error(error);    
        } else{
        console.log(results);
        random_number_r = Math.floor(Math.random()*255) + 1;
        random_number_g = Math.floor(Math.random()*255) + 1;
        random_number_b = Math.floor(Math.random()*255) + 1;

        document.getElementById("detected").innerHTML = "Detected Dog - "+dog+", Detected Cat - "+cat+", Detected Hen - "+hen+" Detected Lion - "+lion;
        document.getElementById("detected").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        document.getElementById("animal_voices").innerHTML = "Detected Voice Is of - " + results[0].label;
        document.getElementById("animal_voices").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        
        img = Document.getElementById("animal_images");

        if(results[0].label == "Barking"){
            img.src = "bark.gif";
            dog = dog + 1;
        } else if(results[0].label == "Meowing"){
            img.src = "meow.gif";
            cat = cat + 1;
        } else if(results[0].label == "Crowing"){
            img.src = "crowing.gif";
            hen = hen + 1;
        } 
        else if (results[0].label == "Roar"){
            img.src = "roar.gif";
            lion = lion +1;
        } else{
            img.src = "listen.gif";
        }
    }
}
}