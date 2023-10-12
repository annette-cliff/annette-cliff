// scripts/slideshow.js 


const clientSlideshow = [
    {
        client_name: 'Lauren Manoogian',
        agency: "Lemonade",
        url: 'https://laurenmanoogian.com/',
        logo: '../assets/clients/lauren-manoogian-logo.svg'
    },
    {
        client_name: 'La Ligne',
        agency: "Lemonade",
        url: 'https://lalignenyc.com/',
        logo: '../assets/clients/la-ligne-logo.svg'
    },
    {
        client_name: 'Veracity',
        agency: "Lemonade",
        url: 'https://veracityselfcare.com/',
        logo: '../assets/clients/veracity-logo.svg'
    },
    {
        client_name: 'Jamie Wolf',
        agency: "Lemonade",
        url: 'https://jamiewolf.com/',
        logo: '../assets/clients/jamie-wolf-logo.avif'
    },
    {
        client_name: 'Kelle',
        agency: "Lemonade",
        url: 'https://kellecompany.com/',
        logo: '../assets/clients/kelle-logo.svg'
    },
    {
        client_name: 'Alabama Chanin',
        agency: "Lemonade",
        url: 'https://alabamachanin.com/',
        logo: '../assets/clients/alabama-chanin-logo.svg'
    },
    {
        client_name: 'B Sides Jeans',
        agency: "Lemonade",
        url: 'https://bsidesjeans.com/',
        logo: '../assets/clients/b-sides-jeans-logo.png'
    },
    {
        client_name: 'Hindash',
        agency: "Lemonade",
        url: 'https://hindash.com/',
        logo: '../assets/clients/hindash-logo.png'
    },
    {
        client_name: 'Mimi So',
        agency: "Lemonade",
        url: 'https://mimiso.com/',
        logo: '../assets/clients/mimi-so-logo.avif'
    },
    {
        client_name: 'Two Minds',
        agency: "Lemonade",
        url: 'https://shop.twomindsnyc.com/account/login',
        logo: '../assets/clients/two-minds-logo.svg'
    },
    {
        client_name: 'Specialized Dispatch',
        agency: "Lemonade",
        url: 'https://www.specialized.com/us/en',
        logo: '../assets/clients/specialized-dispatch-logo.png'
    },
    {
        client_name: 'Caraa Sport',
        agency: "Lemonade",
        url: 'https://caraa.co/',
        logo: '../assets/clients/caraa-logo.svg'
    },
    {
        client_name: 'Ben Soleimani',
        agency: "Lemonade",
        url: 'https://bensoleimani.com/',
        logo: '../assets/clients/ben-soleimani-logo.svg'
    },
    {
        client_name: 'Ericka Bloom',
        agency: "Lemonade",
        url: 'https://erikabloom.com/',
        logo: '../assets/clients/ericka-bloom-logo.svg'
    },
    {
        client_name: 'Oliver Thomas',
        agency: "Lemonade",
        url: 'https://theoliverthomas.com/',
        logo: '../assets/clients/oliver-thomas-logo.png'
    },
    {
        client_name: 'St. Croix Rods',
        agency: "Lemonade",
        url: 'https://stcroixrods.com/',
        logo: '../assets/clients/st-croix-rods-logo.png'
    },
    {
        client_name: 'Welspun',
        agency: "Lemonade",
        url: 'https://welspunusa.com/',
        logo: '../assets/clients/welspun-logo.png'
    },
    {
        client_name: 'Milkshake',
        agency: "Fuel Made",
        url: 'https://www.milkshakehair.com/',
        logo: '../assets/clients/milkshake-logo.png'
    },
    {
        client_name: 'Lindye Galloway',
        agency: "Fuel Made",
        url: 'https://shop.lindyegalloway.com/',
        logo: '../assets/clients/lindye-galloway-logo.svg'
    },
    {
        client_name: 'Smidge',
        agency: "Fuel Made",
        url: 'https://www.getsmidge.com/',
        logo: '../assets/clients/smidge-logo.svg'
    },
    {
        client_name: 'Rosita',
        agency: "Fuel Made",
        url: 'https://www.rositausa.com/',
        logo: '../assets/clients/rosita-logo.svg'
    },
    {
        client_name: 'Live Bearded',
        agency: "Fuel Made",
        url: 'https://livebearded.com/',
        logo: '../assets/clients/live-bearded-logo.svg'
    },
    {
        client_name: 'Hairfinity',
        agency: "Fuel Made",
        url: 'https://www.hairfinity.com/',
        logo: '../assets/clients/hairfinity-logo.svg'
    },
    {
        client_name: 'Gofinity',
        agency: "Fuel Made",
        url: 'https://shopgofinity.com/',
        logo: '../assets/clients/gofinity-logo.svg'
    },
    {
        client_name: 'Satchel & Page',
        agency: "Fuel Made",
        url: 'https://www.satchel-page.com/',
        logo: '../assets/clients/satchel-and-page-logo.svg'
    },
    {
        client_name: 'Curated By Kayla',
        agency: "Personal",
        url: 'https://curatedbykayla.co/',
        logo: '../assets/clients/curated-by-kayla-logo.png'
    },
    {
        client_name: 'Adios Textbook',
        agency: "Personal",
        url: 'https://www.adiostextbook.com/',
        logo: '../assets/clients/adios-textbook-logo.png'
    },
    {
        client_name: 'Grace Cliff',
        agency: "Personal",
        url: 'https://grace-cliff.github.io/grace-cliff/layout/portfolio.html',
        logo: '../assets/clients/grace-cliff-logo.png'
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
            `<button data-agency="${agency}" class="button">${agency}</button>`
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
    const slideshowButton = document.querySelectorAll('.client__slideshow-buttons .button');

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
