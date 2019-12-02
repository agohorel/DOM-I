const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// NAV LINKS
const navLinks = document.querySelectorAll("a");
const navText = Object.values(siteContent.nav);

navLinks.forEach((link, i) => (link.textContent = navText[i]));

// HERO IMG
document.querySelector("#cta-img").src = siteContent.cta["img-src"];

// CTA
const ctaText = document.querySelector(".cta-text");

ctaText.querySelector("h1").textContent = siteContent.cta.h1;
ctaText.querySelector("button").textContent = siteContent.cta.button;

// FEATURES / ABOUT
const topContent = document.querySelector(".top-content");
const features = topContent.children[0],
  about = topContent.children[1];

features.querySelector("h4").textContent =
  siteContent["main-content"]["features-h4"];
features.querySelector("p").textContent =
  siteContent["main-content"]["features-content"];

about.querySelector("h4").textContent = siteContent["main-content"]["about-h4"];
about.querySelector("p").textContent =
  siteContent["main-content"]["about-content"];

// MIDDLE IMG
document.querySelector("#middle-img").src =
  siteContent["main-content"]["middle-img-src"];

// SERVICES / PRODUCT / VISION
const bottomContent = document.querySelector(".bottom-content");
const services = bottomContent.children[0],
  product = bottomContent.children[1],
  vision = bottomContent.children[2];

services.querySelector("h4").textContent =
  siteContent["main-content"]["services-h4"];
services.querySelector("p").textContent =
  siteContent["main-content"]["services-content"];

product.querySelector("h4").textContent =
  siteContent["main-content"]["product-h4"];
product.querySelector("p").textContent =
  siteContent["main-content"]["product-content"];

vision.querySelector("h4").textContent =
  siteContent["main-content"]["vision-h4"];
vision.querySelector("p").textContent =
  siteContent["main-content"]["vision-content"];

// CONTACT
const contact = document.querySelector(".contact");
const contactDetails = Object.values(siteContent.contact);

contact.querySelector("h4").textContent = siteContent.contact["contact-h4"];

contact.querySelectorAll("p").forEach((item, i) => {
  item.textContent = contactDetails[i + 1];
});

// FOOTER
document.querySelector("footer").children[0].textContent =
  siteContent.footer.copyright;
