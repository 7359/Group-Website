/*
*Make the scroll button call this and add some additional posters, with the
*link element's display set to "none" at first.
*/

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
    for(var i=0; i<images.length; i++){
        imageSrcs.push(images[i].getElementsByTagName("IMG")[0].src);
    }
    for(var i=0; i<images.length; i++){
        if(i+1==images.length){
            images[i].getElementsByTagName("IMG")[0].src = imageSrcs[0];    
        }else{
            images[i].getElementsByTagName("IMG")[0].src = imageSrcs[i+1];
        }
    }
}
var seemore=document.getElementsByClassName('seemore');
for(var i=0; i<seemore.length; i++){
    seemore[i].addEventListener('click', rollImages, false);
}
