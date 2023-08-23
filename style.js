
var n= document.querySelectorAll(".i1").length;


document.addEventListener("keypress",function(e){
    Check(e.key);

});
function Check(enter){
    switch(enter){
        case("D"):
     var audio=new Audio("./assets/dog.mp3");
     audio.play();
     break;
    
    case("C"):
    var audio=new Audio("./assets/cat.wav");
    audio.play();
    break;

    case("H"):
    var audio=new Audio("./assets/Horse.mp3");
    audio.play();
    break;
    case("M"):
    var audio=new Audio("./assets/monkey.mp3");
    audio.play();
    break;

    case("W"):
    var audio=new Audio("./assets/wolf.mp3");
    audio.play();
    break;

   }

   }


   for(var i=0;i<n;i++){
    if(i===0){
    document.querySelectorAll(".i1")[i].addEventListener("click",function(){

    
   

        var audio=new Audio("./assets/dog.mp3");
        audio.play();

        mine(document.querySelector(".id1"));
       
    });

   }
   if(i===1){
    document.querySelectorAll(".i1")[i].addEventListener("click",function(){
        
       
        var audio=new Audio("./assets/cat.wav");
        audio.play();
        mine(document.querySelector(".id2"));

    });

   }

   if(i===2){
    document.querySelectorAll(".i1")[i].addEventListener("click",function(){
        
       
        var audio=new Audio("./assets/Horse.mp3");
        audio.play();
        mine(document.querySelector(".id3"));

    });

   }

   if(i===3){
    document.querySelectorAll(".i1")[i].addEventListener("click",function(){
        
       
        var audio=new Audio("./assets/monkey.mp3");
        audio.play();
        mine(document.querySelector(".id4"));

    });

   }

   if(i===4){
    document.querySelectorAll(".i1")[i].addEventListener("click",function(){
        
       
        var audio=new Audio("./assets/wolf.mp3");
        audio.play();
        mine(document.querySelector(".id5"));

    });

   }



}


function mine(key){

    var z=key.classList.add("presse");
    setTimeout(function(){
        key.classList.remove("presse")},500 );


}
























   

