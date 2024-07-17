var yesClick = false;
var noClick = false;


$(".nav-icon").click(function(){
    $(".navbar-links").toggleClass("active");
})

$(".yes-butn").click(function (){
    yesClick = true;
    if(noClick === false){
        $(".appre-text").addClass("active-main");
    } 
})

$(".no-butn").click(function (){
    noClick = true;
    if(yesClick === false){
        $(".no-text").addClass("active-main");
    }
})