/*
*Make the scroll button call this and add some additional posters, with the
*link element's display set to "none" at first.
*/
var itemList = [];

function createGenre(name){
    var newParallax = document.createElement("DIV");
    newParallax.className = "parallax2";
    var newTitle = document.createElement("DIV");
    newTitle.className = "genrelist";
    newTitle.innerHTML = name;
    var newBar = document.createElement("DIV");
    newBar.className = "genre";
    newBar.id = name;
    document.body.appendChild(newTitle);
    document.body.appendChild(newBar);
    document.body.appendChild(newParallax);
}
function addItem(genre, imgSrc, title, seeMore){
    if(!seeMore){
        var containerLink = document.createElement("A");
        containerLink.href = "#top";
        var item = document.createElement("DIV");
        item.className = "barItem"; 
        var image = document.createElement("img");
        image.src = imgSrc;
        image.style.height = "275px";
        item.innerHTML = "<h4>" + title + "</h4>";
        item.appendChild(image);
        item.style.display = "inline-block";
        containerLink.appendChild(item);
        document.getElementById(genre).appendChild(containerLink);
        itemList.push(containerLink);
    }else{
        var item = document.createElement("DIV");
        item.className = "barItem"; 
        var image = document.createElement("img");
        image.src = "images/poster-arrow-right.jpg";
        image.style.height = "275px";
        item.innerHTML = "<h4>See More</h4>";
        item.appendChild(image);
        item.style.display = "inline-block";
        item.style.position = "absolute";
        
        containerLink.appendChild(item);
        document.getElementById(genre).appendChild(item);
    }
}
createGenre("FUCKHEAD");
addItem("FUCKHEAD", "images/posters/the-avengers.jpg", "The Fucking Avengers", false);
addItem("FUCKHEAD", "images/posters/the-avengers.jpg", "The Fucking Avengers", false);
addItem("FUCKHEAD", "images/posters/the-avengers.jpg", "The Fucking Avengers", false);
addItem("FUCKHEAD", "images/posters/the-avengers.jpg", "The Fucking Avengers", false);
addItem("FUCKHEAD", "images/posters/the-avengers.jpg", "The Fucking Avengers", false);
function rollImages(button){
    //May behave oddly if not all initial active items are consecutive
    var targ=button.target;
    //Annoyingly, the event can come from anything inside the one with the event listenter
    //Always need to go back all the way to the genre div
    while(targ.className != "genre"){
	   targ=targ.parentElement;
    }
    var children=targ.childNodes;
    var images=[];
    for(var i=0; i<children.length; i++){
	   if(children[i].nodeName=="A"){
           images.push(children[i]);
	   }
    }
    var imageSrcs = [];
    var imageTitles = [];
    for(var i=0; i<images.length; i++){
        imageTitles.push(images[i].getElementsByTagName("IMG")[0].title);
        imageSrcs.push(images[i].getElementsByTagName("IMG")[0].src);
    }
    for(var i=0; i<images.length; i++){
        if(i+1==images.length){
            images[i].getElementsByTagName("SPAN")[0].innerHTML = "<h4>"+imageTitles[0]+"</h4>";
            images[i].getElementsByTagName("IMG")[0].title = imageTitles[0];
            images[i].getElementsByTagName("IMG")[0].src = imageSrcs[0];
            
        }else{
            images[i].getElementsByTagName("SPAN")[0].innerHTML = "<h4>"+imageTitles[i+1]+"</h4>";
            images[i].getElementsByTagName("IMG")[0].title = imageTitles[i+1];
            images[i].getElementsByTagName("IMG")[0].src = imageSrcs[i+1];
        }
    }
}
var seemore=document.getElementsByClassName('seemore');
for(var i=0; i<seemore.length; i++){
    seemore[i].addEventListener('click', rollImages, false);
}
