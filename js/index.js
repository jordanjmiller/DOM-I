const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const nav = document.querySelector('nav');
//nav.prepend(document.createElement('a'));
let navAnchors = document.querySelectorAll('a');
navAnchors[0].textContent = 'Services';
//navAnchors[0].style.color = 'green';
navAnchors[1].textContent = 'Product';
navAnchors[2].textContent = 'Vision';
navAnchors[3].textContent = 'Features';
navAnchors[4].textContent = 'About';
navAnchors[5].textContent = 'Contact';

let newA = document.createElement('a');
newA.href = "#";
newA.textContent = "Prepended";
nav.prepend(newA);
let newA2 = document.createElement('a');
newA2.href = "#";
newA2.textContent = "Appended";
nav.append(newA2);

navAnchors = document.querySelectorAll('a');
navAnchors.forEach((anchor) => {anchor.style.color = 'green';} );

const ctaH1 = document.querySelector('h1');
ctaH1.style.whiteSpace = 'pre';
ctaH1.textContent = 'DOM\n Is\n Awesome';
const ctaButton = document.querySelector('button');
ctaButton.textContent = 'Get Started';

const ctaImg = document.getElementById("cta-img");
ctaImg.src = "img/header-img.png";
ctaImg.alt = "Image of a code snippet.";
const midImg = document.getElementById("middle-img");
midImg.src = "img/mid-page-accent.jpg";
midImg.alt = "Image of code snippets across the screen";

let h4s = document.querySelectorAll("h4");
h4s[0].textContent = 'Features';
h4s[1].textContent = 'About';
h4s[2].textContent = 'Services';
h4s[3].textContent = 'Product';
h4s[4].textContent = 'Vision';
h4s[5].textContent = 'Contact';

let ps = document.querySelectorAll("p");
ps[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
ps[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
ps[2].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
ps[3].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
ps[4].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
ps[5].style.whiteSpace = 'pre';
ps[5].textContent = '123 Way 456 Street\nSomewhere, USA';
ps[6].textContent = '1 (888) 888-8888';
ps[7].textContent = 'sales@greatidea.io';
ps[8].textContent = 'Copyright Great Idea! 2018';