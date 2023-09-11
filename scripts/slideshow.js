// scripts/slideshow.js 


const clientSlideshow = [
    {
        client_name: 'Lauren Manoogian',
        index: '1',
        url: 'https://laurenmanoogian.com/',
        logo: '/assets/lauren-manoogian-logo.svg'
    },
    {
        client_name: 'La Ligne',
        index: '2',
        url: 'https://lalignenyc.com/',
        logo: '/assets/la-ligne-logo.svg'
    },
    {
        client_name: 'Veracity',
        index: '3',
        url: 'https://veracityselfcare.com/',
        logo: '/assets/veracity-logo.svg'
    },
    {
        client_name: 'Kelle',
        index: '4',
        url: 'https://kellecompany.com/',
        logo: '/assets/kelle-logo.svg'
    },
    {
        client_name: 'Ericka Bloom',
        index: '5',
        url: 'https://erikabloom.com/',
        logo: '/assets/ericka-bloom-logo.svg'
    },
    {
        client_name: 'Milkshake',
        index: '6',
        url: 'https://www.milkshakehair.com/',
        logo: '/assets/milkshake-logo.png'
    },
    {
        client_name: 'Lindye Galloway',
        index: '7',
        url: 'https://shop.lindyegalloway.com/',
        logo: '/assets/lindye-galloway-logo.svg'
    },
    {
        client_name: 'Smidge',
        index: '8',
        url: 'https://www.getsmidge.com/',
        logo: '/assets/smidge-logo.svg'
    },
    {
        client_name: 'Rosita',
        index: '9',
        url: 'https://www.rositausa.com/',
        logo: '/assets/rosita-logo.svg'
    },
    {
        client_name: 'Live Bearded',
        index: '10',
        url: 'https://livebearded.com/',
        logo: '/assets/live-bearded-logo.svg'
    }
]

const clientSlideshowHTML = document.getElementById('clientSlideshow');

const clientSlideshowContent = clientSlideshow 
    .map(slide => `<div class="slide" data-slide-index="${slide.index}"><a href="${slide.url}" title="External link to ${slide.client_name}'s website"><img src="${slide.logo}" alt="${slide.client_name}'s logo" width="250" height="250"></a></div>`)
    .join('');

clientSlideshowHTML.innerHTML += clientSlideshowContent;