document.getElementById("comment").style.width = "250";
function nameValidation() {
    if (document.forms["main"]["name"].value == "") {
        alert("Please fill out your name.");
        return false;
    }
   if(document.forms["main"]["comment"].value == ""){
       alert("Tell us what you have to say!");
       return false;
   }
    var thanks = document.createElement("H1");
    thanks.style.textAlign = "center";
    thanks.style.verticalAlign = "center";
    thanks.innerHTML = "Thank you for your feedback.<br><hr>We appreciate your support.";
    var feedback = document.createElements("DIV");
    feedback.style.color = "red";
    document.getElementById("contact").innerHTML = "<br><br><br>";
    document.getElementById("contact").appendChild(thanks);
}
