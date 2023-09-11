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
        url: 'mailto:annettecliff@gmail.com' 
    },
    { 
        menu: 'menu_2',
        title: 'Resume', 
        url: '' 
    }
];


const footerMainLinks = document.getElementById('mainLinks');
const footerSocialLinks = document.getElementById('socialLinks');

const mainLinksHTML = footerMenus
  .filter(menu => menu.menu === 'menu_1')
  .map(menu => `<li><a href="${menu.url}" title="Link to the ${menu.title.toLowerCase()} section">${menu.title}</a></li>`)
  .join('');

const socialLinksHTML = footerMenus
  .filter(menu => menu.menu === 'menu_2')
  .map(menu => `<li><a href="${menu.url}" target="_blank" title="External link to ${menu.title.toLowerCase()}">${menu.title}</a></li>`)
  .join('');

footerMainLinks.innerHTML += mainLinksHTML;
footerSocialLinks.innerHTML += socialLinksHTML;


// Copyright
document.getElementById("year").textContent = new Date().getFullYear();