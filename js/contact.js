function nameValidation() {
    var x = document.forms["main"]["fname"].value;
    if (x == "") {
        alert("Please fill out your first name.");
        return false;
    }
}
