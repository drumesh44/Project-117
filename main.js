var dog = 0;
var cat = 0;
var lion = 0;
var cow = 0;

function startClassification()
{
    nagitive.mediaDevices.getUserMedia({ audio : true })
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResult(error,results){
if(error){
    console.log(error)
}
else{
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("detected").innerHTML = ",Detected dog - "+dog+",Detected cat - "+cat+",Detected lion - "+lion+",Detected cow - "+cow;
        document.getElementById("detected").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("animal_voices").innerHTML = "Detected Voice is of - "+results[0].label;
        document.getElementById("animal_voices").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img = document.getElementById("animal_images")
        
        if (results[0].label == "Barking") {
            img.src ="https://media.tenor.com/1mRsobYzxEoAAAAM/corgi-excited.gif";
            dog = dog + 1;
           } else if (results[0].label == "Meowing") {
            img.src ="https://i.pinimg.com/originals/8c/20/6c/8c206cc83642bde5b2919c35d8be9e48.gif";
            cat = cat + 1;
           } else if (results[0].label == "Roaring") {
            img.src ="https://media.tenor.com/JMdrJoyMv5UAAAAC/aslan-roar.gif";
            lion = lion + 1;
           }else{
            img.src = "https://media.tenor.com/4mPjIpYolecAAAAM/cow-moo.gif";
            cow = cow + 1;
           }
}
}