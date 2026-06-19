/* ==================================
   OLYMPUS HOTEL PREMIUM JAVASCRIPT
================================== */



// MOBILE MENU

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");


if(menuBtn){

menuBtn.addEventListener("click",()=>{


if(navLinks.style.display==="flex"){

navLinks.style.display="none";

}else{


navLinks.style.display="flex";
navLinks.style.flexDirection="column";
navLinks.style.position="absolute";
navLinks.style.top="80px";
navLinks.style.right="20px";
navLinks.style.background="#111";
navLinks.style.padding="20px";
navLinks.style.borderRadius="15px";


}



});


}





// CLOSE MENU


document.querySelectorAll(".nav-links a").forEach(link=>{


link.addEventListener("click",()=>{


if(window.innerWidth <= 900){

navLinks.style.display="none";

}


});


});







// STICKY HEADER


const header=document.querySelector(".header");


window.addEventListener("scroll",()=>{


if(window.scrollY>80){

header.style.background="rgba(0,0,0,.97)";

}else{

header.style.background="rgba(0,0,0,.85)";

}


});








// HERO CAROUSEL


const slides=document.querySelectorAll(".slide");


let slideIndex=0;


function changeSlide(){


if(slides.length){


slides[slideIndex].classList.remove("active");


slideIndex++;


if(slideIndex>=slides.length){

slideIndex=0;

}


slides[slideIndex].classList.add("active");


}


}


setInterval(changeSlide,5000);










// SCROLL REVEAL


const revealElements=document.querySelectorAll(

".section,.room-card,.amenity,.gallery-grid img,.testimonial-card"

);



revealElements.forEach(el=>{


el.style.opacity="0";

el.style.transform="translateY(40px)";

el.style.transition=".8s";


});





function revealOnScroll(){


revealElements.forEach(el=>{


const position=el.getBoundingClientRect().top;


if(position < window.innerHeight - 120){


el.style.opacity="1";

el.style.transform="translateY(0)";


}



});


}



window.addEventListener("scroll",revealOnScroll);

revealOnScroll();









// SCROLL TOP BUTTON


const scrollBtn=document.createElement("button");


scrollBtn.innerHTML="↑";


document.body.appendChild(scrollBtn);



scrollBtn.style.position="fixed";
scrollBtn.style.bottom="100px";
scrollBtn.style.right="25px";
scrollBtn.style.width="50px";
scrollBtn.style.height="50px";
scrollBtn.style.borderRadius="50%";
scrollBtn.style.border="none";
scrollBtn.style.background="#d4af37";
scrollBtn.style.fontSize="22px";
scrollBtn.style.display="none";
scrollBtn.style.zIndex="999";





window.addEventListener("scroll",()=>{


if(window.scrollY>400){

scrollBtn.style.display="block";

}else{

scrollBtn.style.display="none";

}


});




scrollBtn.onclick=()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


};









// GALLERY LIGHTBOX


const galleryImages=document.querySelectorAll(".gallery-grid img");


galleryImages.forEach(img=>{


img.onclick=()=>{


const box=document.createElement("div");


box.style.position="fixed";
box.style.top="0";
box.style.left="0";
box.style.width="100%";
box.style.height="100%";
box.style.background="rgba(0,0,0,.95)";
box.style.display="flex";
box.style.alignItems="center";
box.style.justifyContent="center";
box.style.zIndex="9999";



const image=document.createElement("img");


image.src=img.src;


image.style.maxWidth="90%";
image.style.maxHeight="90%";


box.appendChild(image);


document.body.appendChild(box);



box.onclick=()=>{


box.remove();


};


};



});









// REAL WHATSAPP BOOKING


const form=document.querySelector(".contact-form");



if(form){


form.addEventListener("submit",(e)=>{


e.preventDefault();



const inputs=form.querySelectorAll("input");


const name=inputs[0].value;

const email=inputs[1].value;

const phone=inputs[2].value;


const checkIn=inputs[3].value;

const checkOut=inputs[4].value;



const room=form.querySelector("select").value;


const message=form.querySelector("textarea").value;





const hotelNumber="2347045798185";



const bookingText=`

Hello Olympus Hotel & Lounge,

I would like to make a booking request.

Name:
${name}


Email:
${email}


Phone:
${phone}


Check-in:
${checkIn}


Check-out:
${checkOut}


Room:
${room}


Message:
${message}


`;




const whatsappLink=

"https://wa.me/"+hotelNumber+

"?text="+encodeURIComponent(bookingText);




window.open(whatsappLink,"_blank");



form.reset();



});


}



console.log("Olympus Hotel Website Loaded Successfully");
