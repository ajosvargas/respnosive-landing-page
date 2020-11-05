/*

Universal Vars

*/

const navbar = document.querySelector('#list');
const sections = document.querySelectorAll('section');



/* 

Function to set Active state

*/

observer = new IntersectionObserver ((entries) => {
    entries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    });
});

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

navCreator();

scrollToSec();