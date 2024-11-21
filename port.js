// Basic Animation Setup Using GSAP and ScrollMagic
document.addEventListener("DOMContentLoaded", function() {

    // GSAP Animations for elements that need entrance effects
    gsap.from("header h1", {
        opacity: 0,
        y: -50,
        duration: 1,
        delay: 0.5
    });

    gsap.from(".section h2", {
        opacity: 0,
        y: -30,
        duration: 1,
        stagger: 0.3,
        delay: 1
    });

    gsap.from(".profile-img", {
        opacity: 0,
        x: -100,
        duration: 1.5,
        delay: 1.5
    });

    gsap.from(".about-text", {
        opacity: 0,
        x: 100,
        duration: 1.5,
        delay: 1.5
    });

    // Text animations for project descriptions and titles
    $('.project h3').textillate({
        in: { effect: 'fadeInUp', delay: 50, shuffle: true }
    });

    $('.project p').textillate({
        in: { effect: 'fadeInLeft', delay: 50 }
    });

    // ScrollMagic for Scroll-Based Animations
    var controller = new ScrollMagic.Controller();

    // Example: Project section animation
    var projectScene = new ScrollMagic.Scene({
        triggerElement: "#projects",
        triggerHook: 0.8
    })
    .setClassToggle(".project", "tlt") // Add 'tlt' class to animate
    .addTo(controller);

    // Scroll-to-top Button Visibility and Scroll Functionality
    var scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = "↑";
    scrollBtn.id = "scroll-to-top";
    document.body.appendChild(scrollBtn);

    scrollBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollBtn.style.display = "block";
        } else {
            scrollBtn.style.display = "none";
        }
    };
});
// Wait for the DOM to be ready
$(document).ready(function() {
    // GSAP animations for different sections
    gsap.from("#home .home-content", {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
            trigger: "#home",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        }
    });

    gsap.from("#about .about-content", {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
            trigger: "#about",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        }
    });

    gsap.from("#education .education-entry", {
        opacity: 0,
        x: -100,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
            trigger: "#education",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        }
    });

    gsap.from("#achievements ul li", {
        opacity: 0,
        y: 30,
        duration: 1.5,
        ease: "power4.out",
        stagger: 0.3,
        scrollTrigger: {
            trigger: "#achievements",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        }
    });

    // Optional: You can add more animations or adjust the parameters to your liking
});

