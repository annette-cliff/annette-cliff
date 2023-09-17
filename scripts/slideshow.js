// scripts/slideshow.js 


const clientSlideshow = [
    {
        client_name: 'Lauren Manoogian',
        agency: "Lemonade",
        url: 'https://laurenmanoogian.com/',
        logo: '/assets/lauren-manoogian-logo.svg'
    },
    {
        client_name: 'La Ligne',
        agency: "Lemonade",
        url: 'https://lalignenyc.com/',
        logo: '/assets/la-ligne-logo.svg'
    },
    {
        client_name: 'Veracity',
        agency: "Lemonade",
        url: 'https://veracityselfcare.com/',
        logo: '/assets/veracity-logo.svg'
    },
    {
        client_name: 'Kelle',
        agency: "Lemonade",
        url: 'https://kellecompany.com/',
        logo: '/assets/kelle-logo.svg'
    },
    {
        client_name: 'Ericka Bloom',
        agency: "Lemonade",
        url: 'https://erikabloom.com/',
        logo: '/assets/ericka-bloom-logo.svg'
    },
    {
        client_name: 'Milkshake',
        agency: "Fuel Made",
        url: 'https://www.milkshakehair.com/',
        logo: '/assets/milkshake-logo.png'
    },
    {
        client_name: 'Lindye Galloway',
        agency: "Fuel Made",
        url: 'https://shop.lindyegalloway.com/',
        logo: '/assets/lindye-galloway-logo.svg'
    },
    {
        client_name: 'Smidge',
        agency: "Fuel Made",
        url: 'https://www.getsmidge.com/',
        logo: '/assets/smidge-logo.svg'
    },
    {
        client_name: 'Rosita',
        agency: "Fuel Made",
        url: 'https://www.rositausa.com/',
        logo: '/assets/rosita-logo.svg'
    },
    {
        client_name: 'Live Bearded',
        agency: "Fuel Made",
        url: 'https://livebearded.com/',
        logo: '/assets/live-bearded-logo.svg'
    }
]

const clientSlideshowHTML = document.getElementById('clientSlideshow');
const clientSlideshowButtonsHTML = document.getElementById('clientSlideshowButtons');

const clientSlideshowContent = clientSlideshow 
    .map(slide => `<div class="slide ${slide.agency == 'Lemonade' ? 'show' : 'hide'}" data-agency="${slide.agency}">
                        <a href="${slide.url}" title="External link to ${slide.client_name}'s website">
                            <picture>
                                <source srcset="${slide.logo}" media="(min-width: 600px)" />
                                <img src="${slide.logo}" alt="${slide.client_name}'s logo" width="250" height="250" loading="lazy">
                            </picture>
                        </a>
                    </div>`)
    .join('');

clientSlideshowHTML.innerHTML += clientSlideshowContent;



// Slideshow Buttons
const agencies = ["Lemonade", "Fuel Made", "Personal"]
const clientSlideshowButtons = agencies
        .map((agency, index) =>
            `<button data-agency="${agency}" class="slideshow-button button ${index == 0 ? 'active' : ''}">${agency}</button>`
        )
        .join('');

 clientSlideshowButtonsHTML.innerHTML += clientSlideshowButtons;



 // Slideshow Trigger
const slideshowButton = document.querySelectorAll('.slideshow-button');
let previousButton;

slideshowButton.forEach((button, index) => {
  if (index === 0) {
    button.classList.add('active');
    previousButton = button;
  }

  button.addEventListener('click', (e) => {
    previousButton.classList.remove('active');
    button.classList.add('active');
    previousButton = button;

    var slides = document.querySelectorAll('.slide');
            slides.forEach((slide) => {
            var slideshowValue = slide.getAttribute('data-agency'),
                buttonValue = button.getAttribute('data-agency'),
                equalValues = (slideshowValue == buttonValue)
                equalValues ? (slide.classList.add('show'), slide.classList.remove('hide')) : (slide.classList.add('hide'), slide.classList.remove('show'));
        });
  });
});
