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
    var thanksHTML = "";
    thanks.innerHTML = "Thank you for your feedback.<br><hr>";
    var feedback = document.createElement("DIV");
    var HTMLstring = "";
    var rating = "";
    var radioButtons = document.getElementsByName("Rating");
    for(var i=0;i<radioButtons.length;i++){
        if(radioButtons[i].checked == true){
            rating = radioButtons[i].value;
        }
    }
    HTMLstring += "<h3>"+document.getElementById("name").value;
    if(document.getElementById("genre").value != "What's your favorite genre?"){
        HTMLstring += ", whose favorite genre is "+document.getElementById("genre").value + ",";
    }
    HTMLstring += " says: </h3>" + document.getElementById("comment").value;
    HTMLstring += "<h1>"+rating+" out of 10</h1>";
    feedback.style.fontSize = "26px";
    feedback.innerHTML = HTMLstring;
    feedback.style.color = "black";
    thanks.appendChild(feedback);
    thanks.innerHTML += "<hr>We appreciate your support.";
    document.getElementById("contact").innerHTML = "<br><br><br>";
    document.getElementById("contact").appendChild(thanks);
   
}
