// scripts/portfolio.js 


var portfolioContent = [
    { 
        title: 'Jamie Wolf',
        desktop_image: '/assets/jamie-wolf-desktop.png',
        mobile_image: '/assets/jamie-wolf-mobile.png',
        title_first: 'Jamie',
        title_second: 'Wolf',
        video: '/assets/jamie-wolf-video.mov',
        quote: 'This project was a full redesign using a custom built theme. My task while employed at Lemonade was to build the new theme and adhere to the new design (referencing an InDesign file) to include new fonts, styles, and functionality. The goal was to emphasize the jewelry so we created unique sections with repeating blocks that were used to loop through the images, call to action text, and links. On the collection template, we looped through all products in the collection and displayed a featured image (using a collection metafield) after X number of products. We also updated the navigation by adding a dropdown so that users could easily find the contact information.',
        image_1: '/assets/jamie-wolf-desktop.png',
        image_2: '/assets/jamie-wolf-desktop.png',
        image_3: '',
        image_4: '',
        url: 'https://jamiewolf.com/'
    },
    { 
        title: 'Our Lady of Rocco', 
        desktop_image: '/assets/our-lady-of-rocco-desktop.png',
        mobile_image: '/assets/our-lady-of-rocco-mobile.png',
        title_first: 'Our Lady',
        title_second: 'of Rocco',
        video: '/assets/our-lady-of-rocco.mov',
        quote: 'This project was a new build which included a new custom built theme. My task while employed at Lemonade was to build the new theme and adhere to the design (referencing an InDesign file) to include new fonts, styles, and functionality. The goal was to emphasize the editorial imagery so we created unique sections and included an image snippet that allowed various image sizes based on media width. Additionally, we created the functionality to "Quick Add" a product on the collection template and homepage using a snippet to include on the appropriate templates.',
        image_1: '',
        image_2: '',
        image_3: '',
        image_4: '',
        url: 'https://ourladyofrocco.com/'
    },
    { 
        title: 'Puppets & Puppets', 
        desktop_image: '/assets/puppets-and-puppets-desktop.png',
        mobile_image: '/assets/puppets-and-puppets-mobile.png',
        title_first: 'Puppets &',
        title_second: 'Puppets',
        video: '/assets/puppets-and-puppets.mov',
        quote: 'This project was a new build which included a new custom built theme. My task while employed at Lemonade was to build the new theme and adhere to the design (referencing an InDesign file) to include new fonts, styles, and functionality. The goal was to emphasize the editorial imagery so we created unique sections and included an image snippet that allowed various image sizes based on media width. Additionally, we created the functionality to "Quick Add" a product on the collection template and homepage using a snippet to include on the appropriate templates.',
        image_1: '',
        image_2: '',
        image_3: '',
        image_4: '',
        url: 'https://puppetsandpuppets.com/'
    },
    { 
        title: 'Mimi So',
        desktop_image: '/assets/mimi-so-desktop.png',
        mobile_image: '/assets/mimi-so-mobile.png',
        title_first: 'Mimi',
        title_second: 'So',
        video: '/assets/mimi-so.mov',
        quote: '',
        image_1: '',
        image_2: '',
        image_3: '',
        image_4: '',
        url: 'https://mimiso.com/'
    }
]


// Portfolio: Grid
const portfolioGrid = document.getElementById('portfolioGrid');

const portfolioGridHTML = portfolioContent
  .map(item => `<div class="grid-item" tabindex="0" data-trigger-modal="${item.title.toLowerCase().replace(/ +/g, '-').replace('&', 'and')}">
                    <span class="plus"></span>
                    <h4 class="hide">${item.title}</h4>
                    <picture>
                      <source srcset="${item.desktop_image}" media="(min-width: 600px)" />
                      <img src="${item.desktop_image}" alt="${item.title}'s homepage image on desktop" width="450" height="450" class="desktop-only" loading="lazy">
                    </picture>
                    <picture>
                      <source srcset="${item.mobile_image}" media="(min-width: 600px)" />
                      <img src="${item.mobile_image}" alt="${item.title}'s homepage image on mobile" width="450" height="450" class="mobile-only" loading="lazy">
                    </picture>
                </div>`)
  .join('');

portfolioGrid.innerHTML += portfolioGridHTML;



// Portfolio: Modal
const portfolioModal = document.getElementById('portfolioModal');

const portfolioModalHTML = portfolioContent
  .map(modal => `<div class="modal hide" data-modal="${modal.title.toLowerCase().replace(/ +/g, '-').replace('&', 'and')}">
                    <div class="video">
                        <video width="1440" height="500" controls>
                            <source src="${modal.video}" type="video/mp4">
                            <source src="${modal.video}" type="video/ogg">
                        </video>
                    </div>
                    <navigation class="breadcrumbs">
                      <ul>
                        <li><a class="home has-hover-state hover-state-dark" href="/layout/index.html" title="Navigate back to the home page">Home</a><span> / </span></li>
                        <li>${modal.title}</li>
                      </ul>
                    </navigation>
                    <div class="title">
                      <h3 class="title-accent"><span class="dark">${modal.title_first}</span><span class="light">${modal.title_second}</span></h3>
                    </div>
                    <div class="quote">${modal.quote}</div>
                    <div class="image">
                      <picture>
                        <source srcset="${modal.image_1}" media="(min-width: 600px)" />
                        <img src="${modal.image_1}" alt="" width="" height="" loading="lazy">
                      </picture>
                      <picture>
                        <source srcset="${modal.image_2}" media="(min-width: 600px)" />
                        <img src="${modal.image_2}" alt="" width="" height="" loading="lazy">
                      </picture>
                    </div>
                    <div class="technology">
                      <h4>technology</h4>
                      <ul class="portfolioDevStack"></ul>
                    </div>
                    <div class="image">
                      <picture>
                        <source srcset="${modal.image_3}" media="(min-width: 600px)" />
                        <img src="${modal.image_3}" alt="" width="" height="" loading="lazy">
                      </picture>
                      <picture>
                        <source srcset="${modal.image_4}" media="(min-width: 600px)" />
                        <img src="${modal.image_4}" alt="" width="" height="" loading="lazy">
                      </picture>
                    </div>
                    <div class="button-wrap">
                      <a href="${modal.url}" title="External link to ${modal.title}'s website" target="_blank" class="button">View the site</a>
                    </div>
                </div>`)
  .join('');

portfolioModal.innerHTML += portfolioModalHTML;



// Portfolio: Tech Stack
const techStackWithImages = [
  {
    tech_name: 'Shopify',
    tech_image: '/assets/shopify.webp'
  },
  {
    tech_name: 'Liquid',
    tech_image: '/assets/liquid.png'
  },
  {
    tech_name: 'SCSS',
    tech_image: '/assets/css.webp'
  },
  {
    tech_name: 'jQuery',
    tech_image: '/assets/jquery.png'
  },
  {
    tech_name: 'GitHub',
    tech_image: '/assets/github.png'
  }
]
const techStackHTML = techStackWithImages
  .map(tech =>
    `<li><img src="${tech.tech_image}" alt="Logo for ${tech.tech_name}" width="50" height="50"></li>`)
  .join('');

const portfolioTechStack = document.querySelectorAll('.portfolioDevStack');
      portfolioTechStack.forEach((stack) => {
        stack.innerHTML += techStackHTML;
});


// Modal Trigger
const triggerModal = document.querySelectorAll('[data-trigger-modal]');


triggerModal.forEach((modal) => {
  modal.addEventListener('click', () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    const theModalTrigger = modal.getAttribute('data-trigger-modal');
    const theModal = document.querySelector(`[data-modal="${theModalTrigger}"]`);
    const thePortfolioGrid = document.querySelector('#portfolioGrid');

    if (theModal) {
      if (theModal.style.display === 'none' || theModal.style.display === '') {
        theModal.style.display = 'block';
        thePortfolioGrid.style.display = 'none';
        theModal.classList.remove('hide');
        portfolioModal.classList.add('modal-is-visible');
        portfolioModal.setAttribute('aria-hidden', false);
        localStorage.setItem("modalIsOpen", theModalTrigger)
      } else {
        theModal.style.display = 'none';
        thePortfolioGrid.style.display = 'block';
        theModal.classList.add('hide');
        portfolioModal.classList.remove('modal-is-visible');
        portfolioModal.setAttribute('aria-hidden', true)
        localStorage.setItem("modalIsOpen", 'false')
      }
    }
  });

  modal.addEventListener('keyup', function(event) {
    if (event.code === 'Enter') {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
  
      const theModalTrigger = modal.getAttribute('data-trigger-modal');
      const theModal = document.querySelector(`[data-modal="${theModalTrigger}"]`);
      const thePortfolioGrid = document.querySelector('#portfolioGrid');
  
      if (theModal) {
        if (theModal.style.display === 'none' || theModal.style.display === '') {
          theModal.style.display = 'block';
          thePortfolioGrid.style.display = 'none';
          theModal.classList.remove('hide');
          portfolioModal.classList.add('modal-is-visible');
          portfolioModal.setAttribute('aria-hidden', false);
          localStorage.setItem("modalIsOpen", theModalTrigger)
        } else {
          theModal.style.display = 'none';
          thePortfolioGrid.style.display = 'block';
          theModal.classList.add('hide');
          portfolioModal.classList.remove('modal-is-visible');
          portfolioModal.setAttribute('aria-hidden', true)
          localStorage.setItem("modalIsOpen", 'false')
        }
      }
    }
  });
});



// Local Storage: Show Modal
document.addEventListener("DOMContentLoaded", () => {
  const triggerModal = document.querySelectorAll('[data-trigger-modal]');
  
  triggerModal.forEach((modalTrigger) => {


    const theModalTrigger = modalTrigger.getAttribute('data-trigger-modal');
    const theModal = document.querySelector(`[data-modal="${theModalTrigger}"]`);
    const theAboutSection = document.querySelector('#about');
    const theClientsSection = document.querySelector('#clients');
    const theContactSection = document.querySelector('#contact');
    const thePortfolioGrid = document.querySelector('#portfolioGrid');
    const localStorageModalOpen = localStorage.getItem("modalIsOpen");
    
    if (localStorageModalOpen && localStorageModalOpen === theModalTrigger) {
      theModal.style.display = 'block';
      thePortfolioGrid.style.display = 'none';
      theAboutSection.style.display = 'none';
      theClientsSection.style.display = 'none';
      theContactSection.style.display = 'none';
      theModal.classList.remove('hide');
      theModal.classList.add('modal-is-visible');
      theModal.setAttribute('aria-hidden', false);
    } 
  });
});


const breadcrumbs = document.querySelectorAll('.breadcrumbs');
      breadcrumbs.forEach(breadcrumb => {
        breadcrumb.addEventListener('click', function() {
          localStorage.setItem("modalIsOpen", 'false');
          console.log("clicked");
        });
});


const logo = document.querySelector('.logo');
      logo.addEventListener('click', function(){
        localStorage.setItem("modalIsOpen", 'false');
});

  