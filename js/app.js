/*

Universal Vars

*/

const navbar = document.querySelector('#list');
const sections = document.querySelectorAll('section');
const header = document.querySelector('.page_header')
const timer = 10000;
let timeoutId;

/*

Function for a sticky header

*/

window.onscroll = stickyHeader();

let stickyHeader = () => {
    let sticky = header.offsetTop;

    if(window.pageYOffset > sticky) {
        header.classList.add('stick');
    } else {
        header.classList.remove('stick');
    }
}

/* 

Functions to hide Nav

*/

let startTimer = () => {
    timeoutId = window.setTimeout(hideNav, timer);
}

let hideNav = () => {
   navbar.style.display = 'none';
}

let resetTimer = () => {
    window.clearTimeout(timeoutId);
    navbar.style.display = 'block';
    startTimer();
}

let setupTimes = () => {
    document.addEventListener('mousemove', resetTimer)
    document.addEventListener('mousedown', resetTimer)

    startTimer();
}

/* 

Function to set Active state

*/

const config = {
    threshold: 0.5
}

let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      entry.target.classList.toggle('blue');
    });
  }, config);

/* 

Calling Observer to fire callback when each section is on screen

*/

sections.forEach(section => {
    observer.observe(section);
});

/*

Function to Create Navbar

*/ 

let navCreator = () => {
    for(let item of sections) {
        let newSection = document.createElement('li');
        newSection.dataset.nav = item.dataset.nav;
        newSection.innerText = item.dataset.nav;
        navbar.appendChild(newSection);
    }
}

/*

Function to Scroll into View

*/

let scrollToSec = () => {
    navbar.addEventListener('click', (event) => {
        const clicker = document.querySelector('#'+event.target.dataset.nav);
        clicker.scrollIntoView();
    })
}

/* 

Fire Functions

*/

navCreator();

scrollToSec();

setupTimes();