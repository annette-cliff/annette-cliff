const clientSlideshow=[{client_name:"Lauren Manoogian",agency:"Lemonade",url:"https://laurenmanoogian.com/",logo:"../assets/clients/lauren-manoogian-logo.svg",has_class:""},{client_name:"La Ligne",agency:"Lemonade",url:"https://lalignenyc.com/",logo:"../assets/clients/la-ligne-logo.svg",has_class:""},{client_name:"Veracity",agency:"Lemonade",url:"https://veracityselfcare.com/",logo:"../assets/clients/veracity-logo.svg",has_class:""},{client_name:"Jamie Wolf",agency:"Lemonade",url:"https://jamiewolf.com/",logo:"../assets/clients/jamie-wolf-logo.webp",has_class:"brightness"},{client_name:"Kelle",agency:"Lemonade",url:"https://kellecompany.com/",logo:"../assets/clients/kelle-logo.svg",has_class:""},{client_name:"Alabama Chanin",agency:"Lemonade",url:"https://alabamachanin.com/",logo:"../assets/clients/alabama-chanin-logo.svg",has_class:""},{client_name:"B Sides Jeans",agency:"Lemonade",url:"https://bsidesjeans.com/",logo:"../assets/clients/b-sides-jeans-logo.webp",has_class:""},{client_name:"Hindash",agency:"Lemonade",url:"https://hindash.com/",logo:"../assets/clients/hindash-logo.webp",has_class:""},{client_name:"Mimi So",agency:"Lemonade",url:"https://mimiso.com/",logo:"../assets/clients/mimi-so-logo.webp",has_class:"brightness"},{client_name:"Two Minds",agency:"Lemonade",url:"https://shop.twomindsnyc.com/account/login",logo:"../assets/clients/two-minds-logo.svg",has_class:"brightness"},{client_name:"Specialized Dispatch",agency:"Lemonade",url:"https://www.specialized.com/us/en",logo:"../assets/clients/specialized-dispatch-logo.webp",has_class:""},{client_name:"Caraa Sport",agency:"Lemonade",url:"https://caraa.co/",logo:"../assets/clients/caraa-logo.svg",has_class:""},{client_name:"Ben Soleimani",agency:"Lemonade",url:"https://bensoleimani.com/",logo:"../assets/clients/ben-soleimani-logo.svg",has_class:""},{client_name:"Ericka Bloom",agency:"Lemonade",url:"https://erikabloom.com/",logo:"../assets/clients/ericka-bloom-logo.svg",has_class:"brightness"},{client_name:"Oliver Thomas",agency:"Lemonade",url:"https://theoliverthomas.com/",logo:"../assets/clients/oliver-thomas-logo.webp",has_class:"brightness"},{client_name:"St. Croix Rods",agency:"Lemonade",url:"https://stcroixrods.com/",logo:"../assets/clients/st-croix-rods-logo.webp",has_class:"brightness"},{client_name:"Welspun",agency:"Lemonade",url:"https://welspunusa.com/",logo:"../assets/clients/welspun-logo.webp",has_class:"brightness"},{client_name:"Milkshake",agency:"Fuel Made",url:"https://www.milkshakehair.com/",logo:"../assets/clients/milkshake-logo.webp",has_class:"brightness"},{client_name:"Lindye Galloway",agency:"Fuel Made",url:"https://shop.lindyegalloway.com/",logo:"../assets/clients/lindye-galloway-logo.svg",has_class:""},{client_name:"Smidge",agency:"Fuel Made",url:"https://www.getsmidge.com/",logo:"../assets/clients/smidge-logo.svg",has_class:"greyscale"},{client_name:"Rosita",agency:"Fuel Made",url:"https://www.rositausa.com/",logo:"../assets/clients/rosita-logo.svg",has_class:""},{client_name:"Live Bearded",agency:"Fuel Made",url:"https://livebearded.com/",logo:"../assets/clients/live-bearded-logo.svg",has_class:""},{client_name:"Hairfinity",agency:"Fuel Made",url:"https://www.hairfinity.com/",logo:"../assets/clients/hairfinity-logo.svg",has_class:""},{client_name:"Gofinity",agency:"Fuel Made",url:"https://shopgofinity.com/",logo:"../assets/clients/gofinity-logo.svg",has_class:""},{client_name:"Satchel & Page",agency:"Fuel Made",url:"https://www.satchel-page.com/",logo:"../assets/clients/satchel-and-page-logo.svg",has_class:""},{client_name:"Curated By Kayla",agency:"Personal",url:"https://curatedbykayla.co/",logo:"../assets/clients/curated-by-kayla-logo.webp",has_class:""},{client_name:"Adios Textbook",agency:"Personal",url:"https://www.adiostextbook.com/",logo:"../assets/clients/adios-textbook-logo.webp",has_class:"brightness"},{client_name:"Grace Cliff",agency:"Personal",url:"https://grace-cliff.github.io/grace-cliff/layout/portfolio.html",logo:"../assets/clients/grace-cliff-logo.webp",has_class:"brightness"}],clientSlideshowHTML=document.getElementById("clientSlideshow"),clientSlideshowButtonsHTML=document.getElementById("clientSlideshowButtons"),clientSlideshowContent=clientSlideshow.map(e=>`<div class="slide ${e.has_class} ${"Lemonade"==e.agency?"show":"hide"}" data-agency="${e.agency}">\n                        <a href="${e.url}" title="External link to ${e.client_name}'s website">\n                            <picture>\n                                <source type="image/webp" srcset="${e.logo}" media="(min-width: 600px)" />\n                                <img src="${e.logo}" alt="${e.client_name}'s logo" width="250" height="250" loading="lazy">\n                            </picture>\n                        </a>\n                    </div>`).join("");clientSlideshowHTML.innerHTML+=clientSlideshowContent;const agencies=["Lemonade","Fuel Made","Personal"],clientSlideshowButtons=agencies.map(e=>`<button data-agency="${e}" class="button">${e}</button>`).join("");function handleSlideVisibility(e,s){e.forEach(e=>{const a=e.getAttribute("data-agency")===s;e.classList.toggle("show",a),e.classList.toggle("hide",!a)})}clientSlideshowButtonsHTML.innerHTML+=clientSlideshowButtons,document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll(".slide"),s=localStorage.getItem("clientSlideshow"),a=document.querySelectorAll(".client__slideshow-buttons .button");let l=null;a.forEach(a=>{const t=a.getAttribute("data-agency");t===s&&(l=a,a.classList.add("active")),a.addEventListener("click",()=>{l&&l.classList.remove("active"),a.classList.add("active"),l=a,localStorage.setItem("clientSlideshow",t),handleSlideVisibility(e,t)})}),l&&handleSlideVisibility(e,l.getAttribute("data-agency"))});