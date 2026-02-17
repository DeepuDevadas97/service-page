window.addEventListener("load", () => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    let mm = gsap.matchMedia();

    mm.add("(min-width: 1280px)", () => {
        const smoother = ScrollSmoother.create({
            wrapper: "#smooth-wrapper",
            content: "#smooth-content",
            smooth: 1.8,
            effects: true,
        });

        gsap.from(".service-lists li", {
            y: 120,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
            stagger: 0.8,
            scrollTrigger: {
                trigger: ".service-lists",
                start: "top 80%",
                once: true,
            },
        });
    });
});

// window.addEventListener("load", () => {
//     document.body.classList.add("loaded");
// });


