// scripts/footer.js 

// Construct footer menus
var footerMenus = [
    { 
        menu: 'menu_1',
        title: 'About Me', 
        url: '#about' 
    },
    { 
        menu: 'menu_1',
        title: 'Portfolio', 
        url: '#portfolio' 
    },
    { 
        menu: 'menu_1',
        title: 'Contact', 
        url: '#contact' 
    },
    { 
        menu: 'menu_2',
        title: 'LinkedIn', 
        url: 'https://www.linkedin.com/in/annette-cliff/' 
    },
    { 
        menu: 'menu_2',
        title: 'Email', 
        url: 'mailto:annettecliff.work@gmail.com' 
    },
    { 
        menu: 'menu_2',
        title: 'Resume', 
        url: '../assets/AnnetteCliff_Resume.pdf' 
    }
];


const footerMainLinks = document.getElementById('mainLinks');
const footerSocialLinks = document.getElementById('socialLinks');

const mainLinksHTML = footerMenus
  .filter(menu => menu.menu === 'menu_1')
  .map(menu => `<li><a class="has-hover-state" href="${menu.url}" title="Link to the ${menu.title.toLowerCase()} section">${menu.title}</a></li>`)
  .join('');

const socialLinksHTML = footerMenus
  .filter(menu => menu.menu === 'menu_2')
  .map(menu => `<li><a class="has-hover-state" href="${menu.url}" target="_blank" title="External link to ${menu.title.toLowerCase()}">${menu.title}</a></li>`)
  .join('');

footerMainLinks.innerHTML += mainLinksHTML;
footerSocialLinks.innerHTML += socialLinksHTML;


// Copyright
document.getElementById("copyrightYear").textContent = new Date().getFullYear();


// Scroll To Top
var scrollToTop = document.querySelector('#scrollToTop');
scrollToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

scrollToTop.addEventListener('keyup', function(event) {
    if (event.code === 'Enter') {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
});