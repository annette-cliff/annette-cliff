// scripts/portfolio.js 


var portfolioContent = [
    { 
        title: 'Jamie Wolf',
        desktop_image: '/assets/jamie-wolf/desktop.png',
        mobile_image: '/assets/jamie-wolf/mobile.png',
        title_first: 'Jamie',
        title_second: 'Wolf',
        video: '/assets/jamie-wolf/video.mov',
        quote: "<p>This was a 'redesign project' which included creating a new custom built theme. My task while employed at Lemonade was to build the new theme and adhere to the new design (referencing an InDesign file) to include new fonts, styles, and functionality.</p> <p>The goal was to emphasize the jewelry so we created unique sections with repeating blocks that were used to loop through the images, call to action text, and links. On the collection template, we looped through all products in the collection and displayed a featured image (using a collection metafield) after X number of products. We also updated the navigation by adding a dropdown so that users could easily find the contact information.</p>",
        image_1: '/assets/jamie-wolf/image_1.png',
        code_1: '/assets/jamie-wolf/code_1.png',
        image_2: '/assets/jamie-wolf/image_2.png',
        code_2: '/assets/jamie-wolf/code_2.png',
        image_3: '/assets/jamie-wolf/image_3.png',
        code_3: '/assets/jamie-wolf/code_3.png',
        image_4: '/assets/jamie-wolf/image_4.png',
        code_4: '/assets/jamie-wolf/code_4.png',
        url: 'https://jamiewolf.com/'
    },
    { 
        title: 'Our Lady of Rocco', 
        desktop_image: '/assets/our-lady-of-rocco/desktop.png',
        mobile_image: '/assets/our-lady-of-rocco/mobile.png',
        title_first: 'Our Lady',
        title_second: 'of Rocco',
        video: '/assets/our-lady-of-rocco/video.mov',
        quote: "<p>This was a 'full build' project which included a new custom built theme. My task while employed at Lemonade was to build the new theme and adhere to the design (referencing an InDesign file) to include new fonts, styles, and functionality.</p> <p>The goal was to emphasize the editorial imagery so we created unique sections and included an image snippet that allowed various image sizes based on media size. Additionally, we created the functionality to 'Quick Add' a product to cart on the collections and homepage using a snippet to include on the appropriate templates.</p>",
        image_1: '/assets/our-lady-of-rocco/image_1.png',
        code_1: '/assets/our-lady-of-rocco/code_1.png',
        image_2: '/assets/our-lady-of-rocco/image_2.png',
        code_2: '/assets/our-lady-of-rocco/code_2.png',
        image_3: '/assets/our-lady-of-rocco/image_3.png',
        code_3: '/assets/our-lady-of-rocco/code_3.png',
        image_4: '/assets/our-lady-of-rocco/image_4.png',
        code_4: '/assets/our-lady-of-rocco/code_4.png',
        url: 'https://ourladyofrocco.com/'
    },
    { 
        title: 'Puppets & Puppets', 
        desktop_image: '/assets/puppets-and-puppets/desktop.png',
        mobile_image: '/assets/puppets-and-puppets/mobile.png',
        title_first: 'Puppets &',
        title_second: 'Puppets',
        video: '/assets/puppets-and-puppets/video.mov',
        quote: "<p>This was a 'full build' project which included a new custom built theme. My task while employed at Lemonade was to build the new theme and adhere to the design (referencing an InDesign file) to include new fonts, styles, and functionality.</p> <p>The goal was to emphasize the editorial imagery so we created unique sections and included an image snippet that allowed various image sizes based on media width. The product templates were designed so that the product images could be scrolled through while the main information remains sticky. Additionally, we added a hover state for the logo to display a custom gif.</p>",
        image_1: '/assets/puppets-and-puppets/image_1.png',
        code_1: '/assets/puppets-and-puppets/code_1.png',
        image_2: '/assets/puppets-and-puppets/image_2.png',
        code_2: '/assets/puppets-and-puppets/code_2.png',
        image_3: '/assets/puppets-and-puppets/image_3.png',
        code_3: '/assets/puppets-and-puppets/code_3.png',
        image_4: '/assets/puppets-and-puppets/image_4.png',
        code_4: '/assets/puppets-and-puppets/code_4.png',
        url: 'https://puppetsandpuppets.com/'
    },
    { 
        title: 'Mimi So',
        desktop_image: '/assets/mimi-so/desktop.png',
        mobile_image: '/assets/mimi-so/mobile.png',
        title_first: 'Mimi',
        title_second: 'So',
        video: '/assets/mimi-so/video.mov',
        quote: "<p>This was a 'full build' project which included a new custom built theme. My task while employed at Lemonade was to build the new theme and adhere to the design (referencing an InDesign file) to include new fonts, styles, and functionality.</p> <p>The goal was to emphasize the jewlery in addition to providing insight into Mimi So's story. We included an Instagram module to highlight the latest posts which feature new pieces.</p>",
        image_1: '/assets/mimi-so/image_1.png',
        code_1: '/assets/mimi-so/code_1.png',
        image_2: '/assets/mimi-so/image_2.png',
        code_2: '/assets/mimi-so/code_2.png',
        image_3: '/assets/mimi-so/image_3.png',
        code_3: '/assets/mimi-so/code_3.png',
        image_4: '/assets/mimi-so/image_4.png',
        code_4: '/assets/mimi-so/code_4.png',
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
const modalElements = [];

for (const modal of portfolioContent) {
  const modalId = modal.title.toLowerCase().replace(/ +/g, '-').replace('&', 'and');

  const imagesOneHTML = `
    <div class="container margin-left">
      <div class="img background-img">
        <picture>
          <source srcset="${modal.code_1}" media="(min-width: 600px)" />
          <img src="${modal.code_1}" alt="" width="" height="" loading="lazy">
        </picture>
      </div>
      <div class="img foreground-img">
        <picture>
          <source srcset="${modal.image_1}" media="(min-width: 600px)" />
          <img src="${modal.image_1}" alt="" width="" height="" loading="lazy">
        </picture>
      </div>
      <input type="range" min="1" max="100" value="50" class="slider" name="slider_1" id="slider_1">
    </div>
    <div class="container margin-right">
      <div class="img background-img">
        <picture>
          <source srcset="${modal.code_2}" media="(min-width: 600px)" />
          <img src="${modal.code_2}" alt="" width="" height="" loading="lazy">
        </picture>
      </div>
      <div class="img foreground-img">
        <picture>
          <source srcset="${modal.image_2}" media="(min-width: 600px)" />
          <img src="${modal.image_2}" alt="" width="" height="" loading="lazy">
        </picture>
      </div>
      <input type="range" min="1" max="100" value="50" class="slider" name="slider_2" id="slider_2">
    </div>
  `;

  const imagesTwoHTML = `
    <div class="container margin-left">
      <div class="img background-img">
        <picture>
          <source srcset="${modal.code_3}" media="(min-width: 600px)" />
          <img src="${modal.code_3}" alt="" width="" height="" loading="lazy">
        </picture>
      </div>
      <div class="img foreground-img">
        <picture>
          <source srcset="${modal.image_3}" media="(min-width: 600px)" />
          <img src="${modal.image_3}" alt="" width="" height="" loading="lazy">
        </picture>
      </div>
      <input type="range" min="1" max="100" value="50" class="slider" name="slider_3" id="slider_3">
    </div>
    <div class="container margin-right">
      <div class="img background-img">
        <picture>
          <source srcset="${modal.code_4}" media="(min-width: 600px)" />
          <img src="${modal.code_4}" alt="" width="" height="" loading="lazy">
        </picture>
      </div>
      <div class="img foreground-img">
        <picture>
          <source srcset="${modal.image_4}" media="(min-width: 600px)" />
          <img src="${modal.image_4}" alt="" width="" height="" loading="lazy">
        </picture>
      </div>
      <input type="range" min="1" max="100" value="50" class="slider" name="slider_4" id="slider_4">
    </div>
  `;

  const modalHTML = `
    <div class="modal hide" data-modal="${modalId}">
      <div class="video">
        <video width="1440" height="500" controls muted>
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
        <h3 class="title__accent"><span class="title__dark">${modal.title_first}</span><span class="title__light">${modal.title_second}</span></h3>
      </div>
      <div class="quote">${modal.quote}</div>
      <div class="image-slider margin-bottom-4">${imagesOneHTML}</div>
      <div class="technology">
        <h4>technology</h4>
        <ul class="portfolioDevStack"></ul>
      </div>
      <div class="image-slider">${imagesTwoHTML}</div>
      <div class="button__wrapper">
        <a href="${modal.url}" title="External link to ${modal.title}'s website" target="_blank">View the site</a>
      </div>
    </div>
  `;

  modalElements.push(modalHTML);
}

portfolioModal.innerHTML += modalElements.join('');


// Portfolio: Slider
const sliders = document.querySelectorAll('.slider');
const foregroundImgs = document.querySelectorAll('.foreground-img');

sliders.forEach((slider, index) => {
  slider.addEventListener('input', (e) => {
    const sliderPos = e.target.value;
    foregroundImgs[index].style.width = `${sliderPos}%`;
  });

  slider.addEventListener('change', (e) => {
    const sliderPos = e.target.value;
    foregroundImgs[index].style.width = `${sliderPos}%`;
  });
});



// Portfolio Modal: Tech Stack
const techStackWithImages = [
  {
    tech_name: 'Shopify',
    tech_image: '/assets/technology/shopify.webp'
  },
  {
    tech_name: 'Liquid',
    tech_image: '/assets/technology/liquid.png'
  },
  {
    tech_name: 'SCSS',
    tech_image: '/assets/technology/css.webp'
  },
  {
    tech_name: 'jQuery',
    tech_image: '/assets/technology/jquery.png'
  },
  {
    tech_name: 'GitHub',
    tech_image: '/assets/technology/github.png'
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




// Portfolio Modal: Trigger Visiblity
const triggerModal = document.querySelectorAll('[data-trigger-modal]');

const toggleModal = (modalTrigger) => {
  const theModal = document.querySelector(`[data-modal="${modalTrigger}"]`);
  const thePortfolioGrid = document.querySelector('#portfolioGrid');
  const theAboutSection = document.querySelector('#about');
  const theClientsSection = document.querySelector('#clients');
  const theContactSection = document.querySelector('#contact');

  if (theModal) {
    const isHidden = theModal.style.display === 'none' || theModal.style.display === '';

    theModal.style.display = isHidden ? 'block' : 'none';
    thePortfolioGrid.style.display = isHidden ? 'none' : 'block';
    theModal.classList.toggle('hide');
    theAboutSection.style.display = isHidden ? 'none' : 'block';
    theClientsSection.style.display = isHidden ? 'none' : 'block';
    theContactSection.style.display = isHidden ? 'none' : 'block';
    portfolioModal.setAttribute('aria-hidden', !isHidden);
    localStorage.setItem("modalIsOpen", isHidden ? modalTrigger : 'false');
  }
};

triggerModal.forEach((modal) => {
  modal.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const theModalTrigger = modal.getAttribute('data-trigger-modal');
    toggleModal(theModalTrigger);
  });

  modal.addEventListener('keyup', (event) => {
    if (event.code === 'Enter') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      const theModalTrigger = modal.getAttribute('data-trigger-modal');
      toggleModal(theModalTrigger);
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
      theModal.setAttribute('aria-hidden', false);
    } 
  });
});



// Portfolio: Modal Breadcrumbs
const breadcrumbs = document.querySelectorAll('.breadcrumbs');
      breadcrumbs.forEach(breadcrumb => {
        breadcrumb.addEventListener('click', function() {
          localStorage.setItem("modalIsOpen", 'false');
        });
});


// Portfolio: Modal Logo
const logo = document.querySelector('.logo');
      logo.addEventListener('click', function(){
        localStorage.setItem("modalIsOpen", 'false');
});

  