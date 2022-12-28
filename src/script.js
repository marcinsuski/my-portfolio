"use strict";
const header = document.querySelector("haeder");
const sectionOne = document.querySelector(".about");
const sections = document.querySelectorAll("section");
const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll('.slide-in');

const appearOptions = {
    threshold: 0.7,
    rootMargin: '0px 0px 0px 0px'
};

const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll
) {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            return;
        } else {
            console.log(entry.target);
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    });
},
appearOptions);

faders.forEach((fader) => {
    appearOnScroll.observe(fader);
});

// sliders.forEach((slider) => {
//     appearOnScroll.observe(slider);
// });

// const options = {
//     root: null,
//     threshold: 0.25,
//     rootMargin: "0px",
// };

// const observer = new IntersectionObserver(function (entries, observer) {
//     entries.forEach((entry) => {
//         if (!entry.isIntersecting) {
//             return;
//         }
//         console.log(entry.target);
//         // entry.target.classList.toggle('fade-in')
//         // observer.unobserve(entry.target);
//     });
// }, options);

// sections.forEach((section) => {
//     observer.observe(section);
// });
// observer.observe(sectionOne);

// (function() {

//     let doc = document.documentElement;
//     let w = window;
//     let prevScroll;
//     let prevDirection;

//     let curScroll = prevScroll = w.scrollY || doc.scrollTop;
//     let curDirection = prevDirection = 0;

//     let checkScroll = function() {
//         curScroll = prevScroll = w.scrollY || doc.scrollTop;
//         if (curScroll > prevScroll) {
//             curDirection = 2
//          } else {
//             curDirection = 1;
//          }

//         if (curDirection !== prevDirection) {
//             toggleHeader();
//          }

//     let toggleHeader = function() {
//         if (curDirection === 2) {
//             header.classList.add('nav-scrolled');
//         } else if (curDirection === 1) {
//             header.classList.remove('nav-scrolled');
//         }
//     }

//     window.addEventListener('scroll', checkScroll);
//     }
// })();
