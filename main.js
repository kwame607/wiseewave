const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");
const navbar = document.querySelector(".navbar");

let lastScrollTop = 0;
let scrollTimeout;

// Enhanced scroll behavior
window.addEventListener("scroll", () => {
  if (scrollTimeout) {
    clearTimeout(scrollTimeout);
  }
  
  scrollTimeout = setTimeout(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add scroll class to navbar for visual effects
    if (scrollTop > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
    
    // Hide/show navbar based on scroll direction
    if (scrollTop > lastScrollTop && scrollTop > 100) {
      navbar.classList.add("hide");
    } else {
      navbar.classList.remove("hide");
    }
    
    lastScrollTop = scrollTop;
  }, 10);
});

// Mobile menu toggle
menuBtn.addEventListener("click", () => {
  const isOpen = navLinks.classList.contains("open");
  
  // Toggle menu state
  navLinks.classList.toggle("open");
  menuBtn.classList.toggle("active");
  menuBtn.setAttribute("aria-expanded", !isOpen);
  
  // Update icon
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-menu-line" : "ri-close-line"
  );
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (
    !navLinks.contains(e.target) &&
    !menuBtn.contains(e.target) &&
    navLinks.classList.contains("open")
  ) {
    navLinks.classList.remove("open");
    menuBtn.classList.remove("active");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
  }
});

// Close menu when clicking a link
navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    navLinks.classList.remove("open");
    menuBtn.classList.remove("active");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
  }
});

// Smooth scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Enhanced scroll reveal animations
const scrollRevealOption = {
  distance: "40px",
  duration: 1000,
  delay: 200,
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  reset: false
};

// Header animations
ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1500,
});

// Section animations
ScrollReveal().reveal(".destination__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".showcase__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".showcase__content h4", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".showcase__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".showcase__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".banner__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".discover__card", {
  ...scrollRevealOption,
  interval: 500,
});

// Enhance swiper configuration
const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  on: {
    init: function () {
      this.el.addEventListener('mouseenter', () => {
        this.autoplay.stop();
      });
      this.el.addEventListener('mouseleave', () => {
        this.autoplay.start();
      });
    },
  },
});

// Enhanced Navbar Scroll Effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
