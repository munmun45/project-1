
let mob_nav = document.querySelector(".mob_nav");
let mob_nav_btn = document.querySelector(".mob_nav_btn");

let c_v = 0;

function mob_nav_snow() {

    if(c_v == 0){

        mob_nav.style.height="100vh";
        mob_nav_btn.src="./images/menu_delete.png";
        c_v = 1;
        
    }else{
        mob_nav.style.height="0vh";
        c_v = 0;
        mob_nav_btn.src="./images/menu.png";
    }

    
}



//slider



let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

let scroll_image = document.getElementById("scroll_image");
let scroll_image_2 = document.getElementById("scroll_image_2");

let gg  = 100;

function scroll_images_js() {

    gg = gg * 3;


    scroll_image.scrollLeft  = gg ;
    scroll_image_2.scrollLeft  = gg ;
    

    rr  = 900;

    
}

let rr  = 900;

function scroll_images_js_2() {

    rr = rr / 3;

    scroll_image.scrollLeft  = rr ;
    scroll_image_2.scrollLeft  = rr ;

    gg  = 100;
}




// popup



let pop_img = document.getElementById("pop_img");
let fill_img_pop = document.getElementById("fill_img_pop");


function popup_image_1(src) {

    pop_img.style.height = "100vh";


    if(src == 1){

        fill_img_pop.innerHTML = '<div class="carousel-item   active  "> <img src="./images/skione.jpg" class="d-block w-100" alt="..."> </div>        <div class="carousel-item     "> <img src="./images/sommerfunf.jpg" class="d-block w-100" alt="..."> </div>     <div class="carousel-item     "> <img src="./images/header.jpg" class="d-block w-100" alt="..."> </div>              <div class="carousel-item     "> <img src="./images/sommervier.jpg" class="d-block w-100" alt="..."> </div>             <div class="carousel-item     "> <img src="./images/sommereins.jpg" class="d-block w-100" alt="..."> </div>                    <div class="carousel-item     "> <img src="./images/slider_2.jpg" class="d-block w-100" alt="..."> </div>                  <div class="carousel-item     "> <img src="./images/slider_1.jpg" class="d-block w-100" alt="..."> </div>                 <div class="carousel-item     "> <img src="./images/sommereins.jpg" class="d-block w-100" alt="..."> </div>';


    }else if(src == 2)
    {
        fill_img_pop.innerHTML = '<div class="carousel-item "> <img src="./images/skione.jpg" class="d-block w-100" alt="..."> </div>        <div class="carousel-item   active   "> <img src="./images/sommerfunf.jpg" class="d-block w-100" alt="..."> </div>     <div class="carousel-item     "> <img src="./images/header.jpg" class="d-block w-100" alt="..."> </div>              <div class="carousel-item     "> <img src="./images/sommervier.jpg" class="d-block w-100" alt="..."> </div>             <div class="carousel-item     "> <img src="./images/sommereins.jpg" class="d-block w-100" alt="..."> </div>                    <div class="carousel-item     "> <img src="./images/slider_2.jpg" class="d-block w-100" alt="..."> </div>                  <div class="carousel-item     "> <img src="./images/slider_1.jpg" class="d-block w-100" alt="..."> </div>                 <div class="carousel-item     "> <img src="./images/sommereins.jpg" class="d-block w-100" alt="..."> </div>';
    
    }else if(src == 3)
    {
        fill_img_pop.innerHTML = '<div class="carousel-item "> <img src="./images/skione.jpg" class="d-block w-100" alt="..."> </div>        <div class="carousel-item      "> <img src="./images/sommerfunf.jpg" class="d-block w-100" alt="..."> </div>     <div class="carousel-item   active  "> <img src="./images/header.jpg" class="d-block w-100" alt="..."> </div>              <div class="carousel-item     "> <img src="./images/sommervier.jpg" class="d-block w-100" alt="..."> </div>             <div class="carousel-item     "> <img src="./images/sommereins.jpg" class="d-block w-100" alt="..."> </div>                    <div class="carousel-item     "> <img src="./images/slider_2.jpg" class="d-block w-100" alt="..."> </div>                  <div class="carousel-item     "> <img src="./images/slider_1.jpg" class="d-block w-100" alt="..."> </div>                 <div class="carousel-item     "> <img src="./images/sommereins.jpg" class="d-block w-100" alt="..."> </div>';
    }
    else if(src == 4)
    {
        fill_img_pop.innerHTML = '<div class="carousel-item "> <img src="./images/skione.jpg" class="d-block w-100" alt="..."> </div>        <div class="carousel-item      "> <img src="./images/sommerfunf.jpg" class="d-block w-100" alt="..."> </div>     <div class="carousel-item     "> <img src="./images/header.jpg" class="d-block w-100" alt="..."> </div>              <div class="carousel-item     active"> <img src="./images/sommervier.jpg" class="d-block w-100" alt="..."> </div>             <div class="carousel-item     "> <img src="./images/sommereins.jpg" class="d-block w-100" alt="..."> </div>                    <div class="carousel-item     "> <img src="./images/slider_2.jpg" class="d-block w-100" alt="..."> </div>                  <div class="carousel-item     "> <img src="./images/slider_1.jpg" class="d-block w-100" alt="..."> </div>                 <div class="carousel-item     "> <img src="./images/sommereins.jpg" class="d-block w-100" alt="..."> </div>';
    }
    else if(src == 5)
    {
        fill_img_pop.innerHTML = '<div class="carousel-item "> <img src="./images/skione.jpg" class="d-block w-100" alt="..."> </div>        <div class="carousel-item      "> <img src="./images/sommerfunf.jpg" class="d-block w-100" alt="..."> </div>     <div class="carousel-item     "> <img src="./images/header.jpg" class="d-block w-100" alt="..."> </div>              <div class="carousel-item     "> <img src="./images/sommervier.jpg" class="d-block w-100" alt="..."> </div>             <div class="carousel-item    active "> <img src="./images/sommereins.jpg" class="d-block w-100" alt="..."> </div>                    <div class="carousel-item     "> <img src="./images/slider_2.jpg" class="d-block w-100" alt="..."> </div>                  <div class="carousel-item     "> <img src="./images/slider_1.jpg" class="d-block w-100" alt="..."> </div>                 <div class="carousel-item     "> <img src="./images/sommereins.jpg" class="d-block w-100" alt="..."> </div>';
    }
    else if(src == 6)
    {
        fill_img_pop.innerHTML = '<div class="carousel-item "> <img src="./images/skione.jpg" class="d-block w-100" alt="..."> </div>        <div class="carousel-item      "> <img src="./images/sommerfunf.jpg" class="d-block w-100" alt="..."> </div>     <div class="carousel-item     "> <img src="./images/header.jpg" class="d-block w-100" alt="..."> </div>              <div class="carousel-item     "> <img src="./images/sommervier.jpg" class="d-block w-100" alt="..."> </div>             <div class="carousel-item     "> <img src="./images/sommereins.jpg" class="d-block w-100" alt="..."> </div>                    <div class="carousel-item  active   "> <img src="./images/slider_2.jpg" class="d-block w-100" alt="..."> </div>                  <div class="carousel-item     "> <img src="./images/slider_1.jpg" class="d-block w-100" alt="..."> </div>                 <div class="carousel-item     "> <img src="./images/sommereins.jpg" class="d-block w-100" alt="..."> </div>';
    }
    else if(src == 7)
    {
        fill_img_pop.innerHTML = '<div class="carousel-item "> <img src="./images/skione.jpg" class="d-block w-100" alt="..."> </div>        <div class="carousel-item      "> <img src="./images/sommerfunf.jpg" class="d-block w-100" alt="..."> </div>     <div class="carousel-item     "> <img src="./images/header.jpg" class="d-block w-100" alt="..."> </div>              <div class="carousel-item     "> <img src="./images/sommervier.jpg" class="d-block w-100" alt="..."> </div>             <div class="carousel-item     "> <img src="./images/sommereins.jpg" class="d-block w-100" alt="..."> </div>                    <div class="carousel-item     "> <img src="./images/slider_2.jpg" class="d-block w-100" alt="..."> </div>                  <div class="carousel-item    active "> <img src="./images/slider_1.jpg" class="d-block w-100" alt="..."> </div>                 <div class="carousel-item     "> <img src="./images/sommereins.jpg" class="d-block w-100" alt="..."> </div>';
    }
    else if(src == 8)
    {
        fill_img_pop.innerHTML = '<div class="carousel-item "> <img src="./images/skione.jpg" class="d-block w-100" alt="..."> </div>        <div class="carousel-item      "> <img src="./images/sommerfunf.jpg" class="d-block w-100" alt="..."> </div>     <div class="carousel-item     "> <img src="./images/header.jpg" class="d-block w-100" alt="..."> </div>              <div class="carousel-item     "> <img src="./images/sommervier.jpg" class="d-block w-100" alt="..."> </div>             <div class="carousel-item     "> <img src="./images/sommereins.jpg" class="d-block w-100" alt="..."> </div>                    <div class="carousel-item     "> <img src="./images/slider_2.jpg" class="d-block w-100" alt="..."> </div>                  <div class="carousel-item     "> <img src="./images/slider_1.jpg" class="d-block w-100" alt="..."> </div>                 <div class="carousel-item    active  "> <img src="./images/sommereins.jpg" class="d-block w-100" alt="..."> </div>';
    }

    
}






function popup_image_2(src) {

    pop_img.style.height = "100vh";


    if(src == 1){

        fill_img_pop.innerHTML = '<div class="carousel-item   active  "> <img src="./images/skione.jpg" class="d-block w-100" alt="..."> </div>        <div class="carousel-item     "> <img src="./images/sommerfunf.jpg" class="d-block w-100" alt="..."> </div>     <div class="carousel-item     "> <img src="./images/header.jpg" class="d-block w-100" alt="..."> </div>              <div class="carousel-item     "> <img src="./images/sommervier.jpg" class="d-block w-100" alt="..."> </div>             <div class="carousel-item     "> <img src="./images/sommereins.jpg" class="d-block w-100" alt="..."> </div>                    <div class="carousel-item     "> <img src="./images/slider_2.jpg" class="d-block w-100" alt="..."> </div>                  <div class="carousel-item     "> <img src="./images/slider_1.jpg" class="d-block w-100" alt="..."> </div>                 <div class="carousel-item     "> <img src="./images/sommereins.jpg" class="d-block w-100" alt="..."> </div>';


    }else if(src == 2)
    {
        fill_img_pop.innerHTML = '<div class="carousel-item "> <img src="./images/skione.jpg" class="d-block w-100" alt="..."> </div>        <div class="carousel-item   active   "> <img src="./images/sommerfunf.jpg" class="d-block w-100" alt="..."> </div>     <div class="carousel-item     "> <img src="./images/header.jpg" class="d-block w-100" alt="..."> </div>              <div class="carousel-item     "> <img src="./images/sommervier.jpg" class="d-block w-100" alt="..."> </div>             <div class="carousel-item     "> <img src="./images/sommereins.jpg" class="d-block w-100" alt="..."> </div>                    <div class="carousel-item     "> <img src="./images/slider_2.jpg" class="d-block w-100" alt="..."> </div>                  <div class="carousel-item     "> <img src="./images/slider_1.jpg" class="d-block w-100" alt="..."> </div>                 <div class="carousel-item     "> <img src="./images/sommereins.jpg" class="d-block w-100" alt="..."> </div>';
    
    }else if(src == 3)
    {
        fill_img_pop.innerHTML = '<div class="carousel-item "> <img src="./images/skione.jpg" class="d-block w-100" alt="..."> </div>        <div class="carousel-item      "> <img src="./images/sommerfunf.jpg" class="d-block w-100" alt="..."> </div>     <div class="carousel-item   active  "> <img src="./images/header.jpg" class="d-block w-100" alt="..."> </div>              <div class="carousel-item     "> <img src="./images/sommervier.jpg" class="d-block w-100" alt="..."> </div>             <div class="carousel-item     "> <img src="./images/sommereins.jpg" class="d-block w-100" alt="..."> </div>                    <div class="carousel-item     "> <img src="./images/slider_2.jpg" class="d-block w-100" alt="..."> </div>                  <div class="carousel-item     "> <img src="./images/slider_1.jpg" class="d-block w-100" alt="..."> </div>                 <div class="carousel-item     "> <img src="./images/sommereins.jpg" class="d-block w-100" alt="..."> </div>';
    }
    else if(src == 4)
    {
        fill_img_pop.innerHTML = '<div class="carousel-item "> <img src="./images/skione.jpg" class="d-block w-100" alt="..."> </div>        <div class="carousel-item      "> <img src="./images/sommerfunf.jpg" class="d-block w-100" alt="..."> </div>     <div class="carousel-item     "> <img src="./images/header.jpg" class="d-block w-100" alt="..."> </div>              <div class="carousel-item     active"> <img src="./images/sommervier.jpg" class="d-block w-100" alt="..."> </div>             <div class="carousel-item     "> <img src="./images/sommereins.jpg" class="d-block w-100" alt="..."> </div>                    <div class="carousel-item     "> <img src="./images/slider_2.jpg" class="d-block w-100" alt="..."> </div>                  <div class="carousel-item     "> <img src="./images/slider_1.jpg" class="d-block w-100" alt="..."> </div>                 <div class="carousel-item     "> <img src="./images/sommereins.jpg" class="d-block w-100" alt="..."> </div>';
    }
    else if(src == 5)
    {
        fill_img_pop.innerHTML = '<div class="carousel-item "> <img src="./images/skione.jpg" class="d-block w-100" alt="..."> </div>        <div class="carousel-item      "> <img src="./images/sommerfunf.jpg" class="d-block w-100" alt="..."> </div>     <div class="carousel-item     "> <img src="./images/header.jpg" class="d-block w-100" alt="..."> </div>              <div class="carousel-item     "> <img src="./images/sommervier.jpg" class="d-block w-100" alt="..."> </div>             <div class="carousel-item    active "> <img src="./images/sommereins.jpg" class="d-block w-100" alt="..."> </div>                    <div class="carousel-item     "> <img src="./images/slider_2.jpg" class="d-block w-100" alt="..."> </div>                  <div class="carousel-item     "> <img src="./images/slider_1.jpg" class="d-block w-100" alt="..."> </div>                 <div class="carousel-item     "> <img src="./images/sommereins.jpg" class="d-block w-100" alt="..."> </div>';
    }
    else if(src == 6)
    {
        fill_img_pop.innerHTML = '<div class="carousel-item "> <img src="./images/skione.jpg" class="d-block w-100" alt="..."> </div>        <div class="carousel-item      "> <img src="./images/sommerfunf.jpg" class="d-block w-100" alt="..."> </div>     <div class="carousel-item     "> <img src="./images/header.jpg" class="d-block w-100" alt="..."> </div>              <div class="carousel-item     "> <img src="./images/sommervier.jpg" class="d-block w-100" alt="..."> </div>             <div class="carousel-item     "> <img src="./images/sommereins.jpg" class="d-block w-100" alt="..."> </div>                    <div class="carousel-item  active   "> <img src="./images/slider_2.jpg" class="d-block w-100" alt="..."> </div>                  <div class="carousel-item     "> <img src="./images/slider_1.jpg" class="d-block w-100" alt="..."> </div>                 <div class="carousel-item     "> <img src="./images/sommereins.jpg" class="d-block w-100" alt="..."> </div>';
    }
    else if(src == 7)
    {
        fill_img_pop.innerHTML = '<div class="carousel-item "> <img src="./images/skione.jpg" class="d-block w-100" alt="..."> </div>        <div class="carousel-item      "> <img src="./images/sommerfunf.jpg" class="d-block w-100" alt="..."> </div>     <div class="carousel-item     "> <img src="./images/header.jpg" class="d-block w-100" alt="..."> </div>              <div class="carousel-item     "> <img src="./images/sommervier.jpg" class="d-block w-100" alt="..."> </div>             <div class="carousel-item     "> <img src="./images/sommereins.jpg" class="d-block w-100" alt="..."> </div>                    <div class="carousel-item     "> <img src="./images/slider_2.jpg" class="d-block w-100" alt="..."> </div>                  <div class="carousel-item    active "> <img src="./images/slider_1.jpg" class="d-block w-100" alt="..."> </div>                 <div class="carousel-item     "> <img src="./images/sommereins.jpg" class="d-block w-100" alt="..."> </div>';
    }
    else if(src == 8)
    {
        fill_img_pop.innerHTML = '<div class="carousel-item "> <img src="./images/skione.jpg" class="d-block w-100" alt="..."> </div>        <div class="carousel-item      "> <img src="./images/sommerfunf.jpg" class="d-block w-100" alt="..."> </div>     <div class="carousel-item     "> <img src="./images/header.jpg" class="d-block w-100" alt="..."> </div>              <div class="carousel-item     "> <img src="./images/sommervier.jpg" class="d-block w-100" alt="..."> </div>             <div class="carousel-item     "> <img src="./images/sommereins.jpg" class="d-block w-100" alt="..."> </div>                    <div class="carousel-item     "> <img src="./images/slider_2.jpg" class="d-block w-100" alt="..."> </div>                  <div class="carousel-item     "> <img src="./images/slider_1.jpg" class="d-block w-100" alt="..."> </div>                 <div class="carousel-item    active  "> <img src="./images/sommereins.jpg" class="d-block w-100" alt="..."> </div>';
    }

    
}








function close_pop() {
    pop_img.style.height = "0vh";
    
}










// mob nav

let more_option_mob = document.getElementsByClassName("more_option_mob");
let arro_rot = document.getElementsByClassName("arro_rot");
let value_click = 0 ;

function mov_nav(value_ , size_) {
    if(value_click == 0)
    {
        more_option_mob[0].style.height="0px";
        // more_option_mob[1].style.height="0px";
        more_option_mob[2].style.height="0px";
        more_option_mob[3].style.height="0px";
        more_option_mob[value_].style.height = size_;
        // arro_rot[value_].style.rotate = "90deg";
        value_click = 1;
        
    }else{
        
        more_option_mob[value_].style.height="0px";
        value_click = 0;
    }

    
}
















