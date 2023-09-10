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


const footerMainLinks = document.getElementById('mainLinks'),
      footerSocialLinks = document.getElementById('socialLinks');

footerMenus.forEach((menu) => {
    var constructFooterMainLinks = (menu.menu == 'menu_1');
    constructFooterMainLinks
    ? footerMainLinks.innerHTML += `<li><a href="${menu.url}" title="Link to the ${menu.title.toLowerCase()} section">${menu.title}</a></li>`
    : footerSocialLinks.innerHTML += `<li><a href="${menu.url}" target="_blank" title="External link to ${menu.title.toLowerCase()}">${menu.title}</a></li>`
});


// Copyright
document.getElementById("year").textContent = new Date().getFullYear();