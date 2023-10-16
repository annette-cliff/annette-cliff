// scripts/portfolio.js 


var portfolioContent = [
    { 
      title: 'Our Lady of Rocco', 
      desktop_image: '../assets/our-lady-of-rocco/desktop.png',
      mobile_image: '../assets/our-lady-of-rocco/mobile.png',
      title_first: 'Our Lady',
      title_second: 'of Rocco',
      video: '../assets/our-lady-of-rocco/video.mov',
      quote: "<p>This was a 'full build' project which included a new custom built theme. My task while employed at Lemonade was to build the new theme and adhere to the design (referencing an InDesign file) to include new fonts, styles, and functionality.</p> <p>The goal was to emphasize the editorial imagery so we created unique sections and included an image snippet that allowed various image sizes based on media size. Additionally, we created the functionality to 'Quick Add' a product to cart on the collections and homepage using a snippet to include on the appropriate templates.</p>",
      image_1: '../assets/our-lady-of-rocco/image_1.png',
      image_2: '../assets/our-lady-of-rocco/image_2.png',
      image_3: '../assets/our-lady-of-rocco/image_3.png',
      image_4: '../assets/our-lady-of-rocco/image_4.png',
      url: 'https://ourladyofrocco.com/'
    },
    { 
      title: 'Puppets & Puppets', 
      desktop_image: '../assets/puppets-and-puppets/desktop.png',
      mobile_image: '../assets/puppets-and-puppets/mobile.png',
      title_first: 'Puppets &',
      title_second: 'Puppets',
      video: '../assets/puppets-and-puppets/video.mov',
      quote: "<p>This was a 'full build' project which included a new custom built theme. My task while employed at Lemonade was to build the new theme and adhere to the design (referencing an InDesign file) to include new fonts, styles, and functionality.</p> <p>The goal was to emphasize the editorial imagery so we created unique sections and included an image snippet that allowed various image sizes based on media width. The product templates were designed so that the product images could be scrolled through while the main information remains sticky. Additionally, we added a hover state for the logo to display a custom gif.</p>",
      image_1: '../assets/puppets-and-puppets/image_1.png',
      image_2: '../assets/puppets-and-puppets/image_2.png',
      image_3: '../assets/puppets-and-puppets/image_3.png',
      image_4: '../assets/puppets-and-puppets/image_4.mov',
      url: 'https://puppetsandpuppets.com/'
    },
    { 
      title: 'Bethel China', 
      desktop_image: '../assets/bethel-china/desktop.png',
      mobile_image: '../assets/bethel-china/mobile.png',
      title_first: 'Bethel',
      title_second: 'China',
      video: '../assets/bethel-china/video.mov',
      quote: "<p>This was a 'full build' project which included a new custom built theme. My task while employed at Fuel Made was to build the new theme and adhere to the design (referencing a Figma file) to include new fonts, styles, and functionality.</p> <p>The goal was to showcase the successes of the children while also making it easy to donate by including the DonorBox donation form on multiple pages. We also included the ability to add a video transcript which amplifies the importance of accessibility in websites while echoing the work that Bethel does for children with visual impairments.</p>",
      image_1: '../assets/bethel-china/image_1.png',
      image_2: '../assets/bethel-china/image_2.png',
      image_3: '../assets/bethel-china/image_3.png',
      image_4: '../assets/bethel-china/image_4.png',
      url: 'https://www.bethelchina.org/'
    },
    { 
      title: 'Blackcraft Cult', 
      desktop_image: '../assets/blackcraft-cult/desktop.png',
      mobile_image: '../assets/blackcraft-cult/mobile.png',
      title_first: 'Blackcraft',
      title_second: 'Cult',
      video: '../assets/blackcraft-cult/video.mov',
      quote: "<p>This was a 'full build' project which included a new custom built theme. My task while employed at Fuel Made was to build the new theme and adhere to the design (referencing a Figma file) to include new fonts, styles, and functionality.</p> <p>The goal was to include an array of custom filtering options for each collection template. Additionally, we included a free shipping meter which subtracts the total price in cart from the free shipping meter amount. This dynamically updates if a product is added, the quantity of a current product in the cart is increased/decreased or removed entirely.</p>",
      image_1: '../assets/blackcraft-cult/image_1.png',
      image_2: '../assets/blackcraft-cult/image_2.png',
      image_3: '../assets/blackcraft-cult/image_3.png',
      image_4: '../assets/blackcraft-cult/image_4.png',
      url: 'https://www.blackcraftcult.com/'
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
                      <img src="${item.desktop_image}" alt="${item.title}'s homepage image on desktop" width="450" height="450" class="desktop-only">
                    </picture>
                    <picture>
                      <source srcset="${item.mobile_image}" media="(min-width: 600px)" />
                      <img src="${item.mobile_image}" alt="${item.title}'s homepage image on mobile" width="450" height="450" class="mobile-only">
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
    <div class="image__featured-left">
      <picture>
        <source srcset="${modal.image_1}" media="(min-width: 600px)" />
        <img src="${modal.image_1}" alt="" width="" height="" loading="lazy">
      </picture>
    </div>
    <div class="image__featured-right">
      <picture>
        <source srcset="${modal.image_2}" media="(min-width: 600px)" />
        <img src="${modal.image_2}" alt="" width="" height="" loading="lazy">
      </picture>
    </div>
  `;

  const imagesTwoHTML = `
    <div class="image__featured-left">
      <picture>
        <source srcset="${modal.image_3}" media="(min-width: 600px)" />
        <img src="${modal.image_3}" alt="" width="" height="" loading="lazy">
      </picture>
    </div>
    <div class="image__featured-right">
    ${modal.image_4.includes('.mov')
    ? `<video width="1440" height="500" controls="muted">
        <source src="${modal.image_4}" type="video/mp4">
        <source src="${modal.image_4}" type="video/ogg">
      </video>`
    : `<picture>
        <source srcset="${modal.image_4}" media="(min-width: 600px)" />
        <img src="${modal.image_4}" alt="" width="" height="" loading="lazy">
      </picture>`
    }
    </div>
  `;

  const modalHTML = `
    <div class="modal hide" data-modal="${modalId}">
      <div class="video">
        <video width="1440" height="500" controls="muted">
          <source src="${modal.video}" type="video/mp4">
          <source src="${modal.video}" type="video/ogg">
        </video>
      </div>
      <navigation class="breadcrumbs">
        <ul>
          <li><a class="home has-hover-state hover-state-dark" href="../layout/index.html" title="Navigate back to the home page">Home</a><span> / </span></li>
          <li>${modal.title}</li>
        </ul>
      </navigation>
      <div class="title">
        <h2 class="title__accent h3"><span class="title__dark">${modal.title_first}</span><span class="title__light">${modal.title_second}</span></h2>
      </div>
      <div class="quote">${modal.quote}</div>
      <div class="wrapper__large">${imagesOneHTML}</div>
      <div class="technology">
        <h3 class="h4">technology</h3>
        <ul class="portfolioDevStack"></ul>
      </div>
      <div class="wrapper__large">${imagesTwoHTML}</div>
      <h4 class="button__wrapper">
        <a href="${modal.url}" title="External link to ${modal.title}'s website" target="_blank">View the site</a>
      </h4>
    </div>
  `;

  modalElements.push(modalHTML);
}

portfolioModal.innerHTML += modalElements.join('');



// Portfolio Modal: Tech Stack
const techStackWithImages = [
  {
    tech_name: 'Shopify',
    tech_image: '../assets/technology/shopify.webp'
  },
  {
    tech_name: 'Liquid',
    tech_image: '../assets/technology/liquid.png'
  },
  {
    tech_name: 'SCSS',
    tech_image: '../assets/technology/css.webp'
  },
  {
    tech_name: 'jQuery',
    tech_image: '../assets/technology/jquery.png'
  },
  {
    tech_name: 'GitHub',
    tech_image: '../assets/technology/github.png'
  }
]
const techStackHTML = techStackWithImages
  .map(tech =>
    `<li><img src="${tech.tech_image}" alt="Logo for ${tech.tech_name}" width="920" height="840" loading="lazy"></li>`)
  .join('');

const portfolioTechStack = document.querySelectorAll('.portfolioDevStack');
      portfolioTechStack.forEach((stack) => {
        stack.innerHTML += techStackHTML;
});




// Portfolio Modal: Trigger Visiblity
const triggerModal = document.querySelectorAll('[data-trigger-modal]');

const toggleModal = (modalTrigger) => {
  const allModals = document.querySelectorAll('.modal');
  allModals.forEach(modal => {
    modal.style.display = 'none';
    modal.classList.add('hide');
  });

  const theModal = document.querySelector(`[data-modal="${modalTrigger}"]`);
  const thePortfolioGrid = document.querySelector('#portfolioGrid');
  const theAboutSection = document.querySelector('#about');
  const theClientsSection = document.querySelector('#clients');
  const theContactSection = document.querySelector('#contact');

  if (theModal) {
    const isHidden = theModal.style.display === 'none' || theModal.style.display === '';

    theModal.style.display = isHidden ? 'block' : 'none';
    !theModal.classList.add('hide');
    thePortfolioGrid.style.display = isHidden ? 'none' : 'block';
    theModal.classList.toggle('hide');
    theAboutSection.style.display = isHidden ? 'none' : 'block';
    theClientsSection.style.display = isHidden ? 'none' : 'block';
    theContactSection.style.display = isHidden ? 'none' : 'block';
    portfolioModal.setAttribute('aria-hidden', !isHidden);
    localStorage.setItem("modalIsOpen", isHidden ? modalTrigger : 'false');
  }
};

triggerModal.forEach(element => {
  element.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    toggleModal(element.dataset.triggerModal);
  });

  element.addEventListener('keyup', (event) => {
    if (event.code === 'Enter') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      toggleModal(element.dataset.triggerModal);
    }
  });
});



function hideModalWhenFooterClicked() {
  const footerLinks = document.querySelector('#mainLinks');
      footerLinks.addEventListener('click', function(){
        const thePortfolioGrid = document.querySelector('#portfolioGrid');
        const theAboutSection = document.querySelector('#about');
        const theClientsSection = document.querySelector('#clients');
        const theContactSection = document.querySelector('#contact');
        localStorage.setItem("modalIsOpen", 'false');
        document.querySelector('#portfolioModal').setAttribute('aria-hidden', true);
        thePortfolioGrid.style.display = 'grid';
        theAboutSection.style.display = 'block';
        theClientsSection.style.display = 'block';
        theContactSection.style.display = 'block';
  });
}

hideModalWhenFooterClicked();

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
    const portfolioModal = document.querySelector('#portfolioModal');
    
    if (localStorageModalOpen && localStorageModalOpen === theModalTrigger) {
      theModal.style.display = 'block';
      portfolioModal.setAttribute('aria-hidden', false);
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
const logos = document.querySelectorAll('.logo');
      logos.forEach(logo => {
        logo.addEventListener('click', function(){
          localStorage.setItem("modalIsOpen", 'false');
      })
});
  