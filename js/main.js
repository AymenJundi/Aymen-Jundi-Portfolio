// Navigation Bar Function 
function myMenuFunction(){
  var menuBtn = document.getElementById("myNavMenu");

  if(menuBtn.className === "nav-menu"){
    menuBtn.className += " responsive"; // Fix typo here
  } else {
    menuBtn.className = "nav-menu";
  }
}

// Add shadow on navigation bar while scrolling
window.onscroll = function(){headershadow()};

function headershadow(){
  const navHeader = document.getElementById('header');


if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){

   navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
   navHeader.style.height = "70px";
   navHeader.style.lineHeight = "70px";

}
else{
  navHeader.style.boxShadow = "none";
  navHeader.style.height = "90px";
  navHeader.style.lineHeight = "90px";
}
}



// Typing Effect
// var typingEffect = new Typed(".typedText",{
// strings : ["Software","Website","Application"],
// loop : true,
// typeSpeed : 100,
// backSpeed : 80,
// BackDelay : 2000 
// })

// Scroll Reveal animation
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
});

// Home
sr.reveal('.featured-text-card', {});
sr.reveal('.featured-name', { delay: 100 });
sr.reveal('.featured-text-info', { delay: 200 });
sr.reveal('.featured-text-btn', { delay: 200 });
sr.reveal('.social-icon', { delay: 200 });
sr.reveal('.featured-image', { delay: 300 });


// Project-Box
sr.reveal('.project-box', { interval: 200 });


// Heading
sr.reveal('.top-header',{});


// Scroll reveal left right animation


// About Info && Contact info
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

sr.reveal('.about-info', { interval: 100 });
sr.reveal('.contact-info', { interval: 100 });


// About skills and form box
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

sr.reveal('.skills-box', { interval: 100 });
sr.reveal('.form-control', { interval: 100 });


// change active link
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
  const scrollY = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
    sectionTop = current.offsetTop - 50,
    sectionId = current.getAttribute('id')



    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
    }
    
    else{
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
      
    }
  })
}

window.addEventListener('scroll', scrollActive);

