
document.getElementById("tagcard").addEventListener("mouseover", createTooltip);
document.getElementById("tagcard").addEventListener("mouseleave", destroyTooltip);

var tooltip = document.createElement("DIV");

function createTooltip(event){
    
    var mouseX = event.clientX + 5;
    var mouseY = event.clientY + 5;
    
    if(event.target.innerHTML=="ACTION"){
        tooltip.innerHTML = "Guns, punches and explosions!!!!!1!!!";    
    }else if(event.target.innerHTML=="SUPERHERO"){
        tooltip.innerHTML = "Movies featuring anyone with special powers out saving people";
    }else if(event.target.innerHTML=="BLOCKBUSTER"){
        tooltip.innerHTML = "Big movies that have big bucks behind them";
    }
    tooltip.style.fontSize = "12px";
    tooltip.style.color = "black";
    tooltip.style.padding = "1px 3px 1px 3px";
    tooltip.style.backgroundColor = "lightgray";
    tooltip.style.position = "absolute";
    tooltip.style.left = mouseX.toString()+"px";
    tooltip.style.top = mouseY.toString()+"px";
   
    document.body.appendChild(tooltip);
}
function destroyTooltip(){
  
    if(tooltip != null){
        tooltip.style.padding = "0px 0px 0px 0px";
        tooltip.innerHTML = "";
    }
    
}
