// scripts/portfolio.js 


var portfolioContent = [
    { 
        title: 'Jamie Wolf',
        desktop_image: '/assets/jamie-wolf-desktop.png',
        mobile_image: '/assets/jamie-wolf-mobile.png',
        title_first: 'Jamie',
        title_second: 'Wolf',
        video: '',
        quote: 'This was a full build redesign project done while I was employed at Lemonade. The goal was to emphasize the jewelry so we created split block sections to loop through the images, each featuring a link to the product or collection underneath the image. On the collection template, we looped through all products in the collection and displayed a featured image (which is stored in a collection metafield) after X number of products. We also updated the navigation by adding a dropdown so that users could easily find the contact information.',
        image_1: '/assets/jamie-wolf-desktop.png',
        image_2: '/assets/jamie-wolf-desktop.png',
        url: 'https://jamiewolf.com/'
    },
    { 
        title: 'Our Lady of Rocco', 
        desktop_image: '/assets/our-lady-of-rocco-desktop.png',
        mobile_image: '/assets/our-lady-of-rocco-mobile.png',
        title_first: 'Our Lady',
        title_second: 'of Rocco',
        video: '',
        quote: '',
        image_1: '',
        image_2: '',
        url: 'https://ourladyofrocco.com/'
    },
    { 
        title: 'Puppets & Puppets', 
        desktop_image: '/assets/puppets-and-puppets-desktop.png',
        mobile_image: '/assets/puppets-and-puppets-mobile.png',
        title_first: 'Puppets &',
        title_second: 'Puppets',
        video: '',
        quote: '',
        image_1: '',
        image_2: '',
        url: 'https://puppetsandpuppets.com/'
    },
    { 
        title: 'Mimi So',
        desktop_image: '/assets/mimi-so-desktop.png',
        mobile_image: '/assets/mimi-so-mobile.png',
        title_first: 'Mimi',
        title_second: 'So',
        video: '',
        quote: '',
        image_1: '',
        image_2: '',
        url: 'https://mimiso.com/'
    }
]


// Portfolio: Grid
const portfolioGrid = document.getElementById('portfolioGrid');

const portfolioGridHTML = portfolioContent
  .map(item => `<div class="grid-item">
                    <span class="plus" data-trigger-modal="${item.title.toLowerCase().replace(/ +/g, '-').replace('&', 'and')}"></span>
                    <h4 class="hide">${item.title}</h4>
                    <img src="${item.desktop_image}" alt="${item.title}'s homepage image on desktop" width="450" height="450" class="desktop-only">
                    <img src="${item.mobile_image}" alt="${item.title}'s homepage image on mobile" width="450" height="450" class="mobile-only">
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
                    <div class="title">
                      <h3 class="title-accent"><span class="dark">${modal.title_first}</span><span class="light">${modal.title_second}</span></h3>
                    </div>
                    <div class="quote">${modal.quote}</div>
                    <div class="image">
                      <img src="${modal.image_1}" alt="" width="" height="">
                      </div>
                    <div class="technology">
                      <h4>technology</h4>
                    </div>
                    <div class="image">
                      <img src="${modal.image_2}" alt="" width="" height="">
                    </div>
                    <div class="button-wrap">
                      <a href="${modal.url}" title="External link to ${modal.title}'s website" target="_blank" class="button">View the site</a>
                    </div>
                </div>`)
  .join('');

portfolioModal.innerHTML += portfolioModalHTML;




// Modal Trigger
const triggerModal = document.querySelectorAll('[data-trigger-modal]');


triggerModal.forEach((modal) => {
  modal.addEventListener('click', () => {
    const theModalTrigger = modal.getAttribute('data-trigger-modal');
    const theModal = document.querySelector(`[data-modal="${theModalTrigger}"]`);

    if (theModal) {
      if (theModal.style.display === 'none' || theModal.style.display === '') {
        theModal.style.display = 'block';
        theModal.classList.remove('hide');
        portfolioModal.classList.add('modal-is-visible');
      } else {
        theModal.style.display = 'none';
        theModal.classList.add('hide');
        portfolioModal.classList.remove('modal-is-visible');
      }
    }
  });
});
