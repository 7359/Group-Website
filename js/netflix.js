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
    var additional = [];
    for(var i=0; i<images.length; i++){
        imageTitles.push(images[i].getElementsByTagName("IMG")[0].title);
        imageSrcs.push(images[i].getElementsByTagName("IMG")[0].src);
    }
    for(var i=0; i<images.length; i++){
        if(i+1==images.length){
            var replacementHTML = "";
            replacementHTML += "<h6>"+imageTitles[0]+"</h6>";
            images[i].getElementsByTagName("SPAN")[0].innerHTML = replacementHTML;
            images[i].getElementsByTagName("IMG")[0].title = imageTitles[0];
            images[i].getElementsByTagName("IMG")[0].src = imageSrcs[0];
            
        }else{
           var replacementHTML = "";
            replacementHTML += "<h6>"+imageTitles[i+1]+"</h6>";
            images[i].getElementsByTagName("SPAN")[0].innerHTML = replacementHTML;
            images[i].getElementsByTagName("IMG")[0].title = imageTitles[i+1];
            images[i].getElementsByTagName("IMG")[0].src = imageSrcs[i+1];
        }
    }
}
var seemore=document.getElementsByClassName('seemore');
for(var i=0; i<seemore.length; i++){
    seemore[i].addEventListener('click', rollImages, false);
}
