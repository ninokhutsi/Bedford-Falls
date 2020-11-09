$(document).ready(function(){ 
    
    $("#burger").on("click", function(e){
        // console.log(e); // all events
       
        if($(this).hasClass("active")){
            $(this).removeClass("active");
        }else{
            $(this).addClass("active");
        };
        if($("#navigation").hasClass("active")){
            $("#navigation").removeClass("active");
        }else{
            $("#navigation").addClass("active");
        };

        

    });

   var x = document.createElement("audio");

   if(x.canPlayType("audio/.mp3")){
       x.setAttribute("src", "./audio/Bedford Falls - Thrill is Gone.mp3");
   }else{
       x.setAttribute("src","./audio/Bedford Falls - Thrill is Gone.mp3");
   }
   x.setAttribute("controls", "controls");
   document.body.appendChild(x);

})
    
   

//     var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//     }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }
