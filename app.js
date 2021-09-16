// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
// const date = document.querySelector(".date");
// date.innerHTML = new Date().getFullYear();

// ********** close links ************
const linksContainer = document.querySelector(".links-container");
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  let containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

// ********** fixed navbar ************
const navbar = document.querySelector("#nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const navbarHeight = navbar.getBoundingClientRect().height;
  const scrollHeight = window.pageYOffset;

  if (scrollHeight > navbarHeight) {
    navbar.classList.add("fixed-nav");
    topLink.classList.add("show-link");
  } else {
    navbar.classList.remove("fixed-nav");
    topLink.classList.remove("show-link");
  }
});

// ********** smooth scroll ************
const scrollLink = document.querySelectorAll(".scroll-link");

scrollLink.forEach((link) => {
  link.addEventListener("click", function (el) {
    el.preventDefault();
    const id = el.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navbarHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");

    let position = element.offsetTop - navbarHeight;
    console.log(position, navbarHeight);
    if (!fixedNav) {
      position = position - navbarHeight;
    }
    window.scrollTo({
      left: 0,
      top: position,
    });
    linksContainer.style.height = 0;
  });
});


// select links
