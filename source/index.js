var noofButtons=document.querySelectorAll(".drum").length;
for(var i=0;i<noofButtons;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function (){
      var innerHTML= this.innerHTML;
       //for mouse click;
      playbykeyboard(innerHTML);
});

}
             //for button click
document.addEventListener("keypress",function(event){
    
      playbykeyboard(event.key);
     
});


function playbykeyboard(key){
     
      switch (key) {
            case "w":  var drum=new Audio("sounds/tom-1.mp3");
                       drum.play();
                       break;
            case "a":  var drum=new Audio("sounds/tom-2.mp3");
                       drum.play();
                       break;
            case "s":  var drum=new Audio("sounds/tom-3.mp3");
                       drum.play();
                       break;
            case "d":  var drum=new Audio("sounds/tom-4.mp3");
                       drum.play();
                       break;
            case "j":  var drum=new Audio("sounds/snare.mp3");
                       drum.play();
                       break;
            case "k":  var drum=new Audio("sounds/crash.mp3");
                       drum.play();
                       break;
            case "l":  var drum=new Audio("sounds/kick-bass.mp3");
                       drum.play();
                       break;
            default:null;
                break;
          }
}

