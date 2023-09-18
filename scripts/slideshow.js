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


// Client Slideshow: Markup
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



// Client Slideshow: Buttons Markup
const agencies = ["Lemonade", "Fuel Made", "Personal"]
const clientSlideshowButtons = agencies
        .map((agency) =>
            `<button data-agency="${agency}" class="slideshow-button button">${agency}</button>`
        )
        .join('');

 clientSlideshowButtonsHTML.innerHTML += clientSlideshowButtons;



// Client Slideshow: Visibility & Active States
function handleSlideVisibility(slides, activeButtonValue) {
    slides.forEach(slide => {
        const slideValue = slide.getAttribute('data-agency');
        const shouldShowSlide = slideValue === activeButtonValue;

        slide.classList.toggle('show', shouldShowSlide);
        slide.classList.toggle('hide', !shouldShowSlide);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll('.slide');
    const localStorageClientSlideshow = localStorage.getItem("clientSlideshow");
    const slideshowButton = document.querySelectorAll('.slideshow-button');

    let activeButton = null;

    slideshowButton.forEach(button => {
        const buttonValue = button.getAttribute('data-agency');
        const isActive = buttonValue === localStorageClientSlideshow;

        if (isActive) {
            activeButton = button;
            button.classList.add('active');
        }

        button.addEventListener('click', () => {
            if (activeButton) {
                activeButton.classList.remove('active');
            }

            button.classList.add('active');
            activeButton = button;

            localStorage.setItem("clientSlideshow", buttonValue);
            handleSlideVisibility(slides, buttonValue);
        });
    });

    // Initial handling of slide visibility
    if (activeButton) {
        handleSlideVisibility(slides, activeButton.getAttribute('data-agency'));
    }
});