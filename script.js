// Smooth scroll
// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
// const smoother = ScrollSmoother.create({
//     wrapper: "#smooth-wrapper",
//     content: "#smooth-content",
//     smooth: 2,
//     effects: true,
//     smoothTouch: 0.1,
// });



// Animations for service lists
let mm = gsap.matchMedia();
mm.add("(min-width: 1280px)", () => {
    gsap.from(".service-lists li", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.8, 
        scrollTrigger: {
            trigger: ".service-lists",
            start: "top 100%",
            once: true, 
        },
    });
});


//Smooth scroll

const content = document.getElementById("smooth-content");

let current = 0;
let target = 0;
let ease = 0.08;

function setBodyHeight() {
  document.body.style.height = content.getBoundingClientRect().height + "px";
}

setBodyHeight();
window.addEventListener("resize", setBodyHeight);

window.addEventListener("scroll", () => {
  target = window.scrollY;
});

function smoothScroll() {
  current += (target - current) * ease;
  
  content.style.transform = `translateY(-${current}px)`;

  requestAnimationFrame(smoothScroll);
}

smoothScroll();
