main.js
/* ==========================================================
   EDILIZIA PIZZIMENTI S.R.L.
   MAIN.JS
========================================================== */

"use strict";

/* ==========================================================
   LOADER
========================================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.classList.add("hidden");

        setTimeout(() => {

            loader.remove();

        }, 600);

    }

});


/* ==========================================================
   HEADER SCROLL
========================================================== */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* ==========================================================
   MENU MOBILE
========================================================== */

const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");

if (menuBtn && navbar) {

    menuBtn.addEventListener("click", () => {
        navbar.classList.toggle("active");
        menuBtn.classList.toggle("open");
    });

}

/* ==========================================================
   CHIUSURA MENU AL CLICK
========================================================== */

document.querySelectorAll("#navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        menuBtn.classList.remove("open");

    });

});


/* ==========================================================
   SMOOTH SCROLL
========================================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// ===============================
// BACK TO TOP
// ===============================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// ===============================
// CONTATORI ANIMATI
// ===============================

const counters = document.querySelectorAll(".counter");

const startCounters = () => {

    counters.forEach(counter => {

        const target = +counter.dataset.target;
        let current = 0;

        const increment = Math.ceil(target / 100);

        const updateCounter = () => {

            current += increment;

            if (current >= target) {
                counter.innerText = target + "+";
            } else {
                counter.innerText = current;
                requestAnimationFrame(updateCounter);
            }

        };

        updateCounter();

    });

};

const numberSection = document.querySelector("#numbers");

let countersStarted = false;

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting && !countersStarted) {

            countersStarted = true;
            startCounters();

        }

    });

}, {
    threshold: 0.5
});

observer.observe(numberSection);

// ===============================
// ANIMAZIONI SCROLL
// ===============================

const animatedElements = document.querySelectorAll(
    ".service-card, .portfolio-item, .feature, .step, .testimonial, .info-box, .number-card"
);

const animationObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("fade-up", "active");

        }

    });

}, {
    threshold: 0.15
});

animatedElements.forEach(element => {
    animationObserver.observe(element);
});

