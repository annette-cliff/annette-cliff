// scripts/portfolio-grid.js 


// Construct portfolio grid
var portfolioItems = [
    { 
        title: 'Jamie Wolf', 
        desktop_image: '/assets/jamie-wolf-desktop.png',
        mobile_image: '/assets/jamie-wolf-mobile.png'
    },
    { 
        title: 'Our Lady of Rocco', 
        desktop_image: '/assets/our-lady-of-rocco-desktop.png',
        mobile_image: '/assets/our-lady-of-rocco-mobile.png'
    },
    { 
        title: 'Puppets & Puppets', 
        desktop_image: '/assets/puppets-and-puppets-desktop.png',
        mobile_image: '/assets/puppets-and-puppets-mobile.png'
    },
    { 
        title: 'Mimi So', 
        desktop_image: '/assets/mimi-so-desktop.png',
        mobile_image: '/assets/mimi-so-mobile.png'
    }
]


const portfolioGrid = document.getElementById('portfolioGrid');

const portfolioGridHTML = portfolioItems
  .map(item => `<div class="grid-item">
                    <span class="plus" data-trigger-modal="${item.title.toLowerCase().replace(/ +/g, '-').replace('&', 'and')}"></span>
                    <h4 class="hide">${item.title}</h4>
                    <img src="${item.desktop_image}" alt="${item.title}'s homepage image on desktop" width="450" height="450" class="desktop-only">
                    <img src="${item.mobile_image}" alt="${item.title}'s homepage image on mobile" width="450" height="450" class="mobile-only">
                </div>`)
  .join('');

portfolioGrid.innerHTML += portfolioGridHTML;