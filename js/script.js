/*
*Make the scroll button call this and add some additional posters, with the
*link element's display set to "none" at first.
*/
function rollImages(){
    //May behave oddly if not all initial active items are consecutive
    var source=this.parentElement;
    var images=source.childNodes;
    images.pop();//Remove the scroll button itself
    var i=0;
    while(images[i].style.display!="none"){
	//Don't want to be in the middle of a hanging bar
	//Need the actual starting point
	i++;
	if(i>=images.length){
	    //All possible items are active, nothing to roll
	    return;
	}
    }
    while(images[i].style.display=="none"){
	i++;
	if(i>=images.length){
	    i=0;
	}
    }
    images[i].style.display="none";//Turn off the first active element
    i++;
    if(i>=images.length){
	    i=0;
    }
    while(images[i].style.display!="none"){
	i++;
	if(i>=images.length){
	    i=0;
	}
    }
    images[i].style.display="block";//And turn on the first inactive one
}
