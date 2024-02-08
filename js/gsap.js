document.addEventListener('DOMContentLoaded', function() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.magnet-target2', {
        duration: 1,
        ease: 'power1.inOut',
        rotation: 360,
        scrollTrigger: {
            trigger: '.magnet-target2',
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: true,
            once: true
        }
    });

    var tl = gsap.timeline();

    tl.from(".Nityshadsa, .asdsadasdadggfbujuik, .asdsadasdadggfbujuik2 , .tr__cursor__hoverable", { 
        translateY: "-200px", 
        opacity: 0,     
        duration: 2, 
        stagger: 0.2, 
        ease: "power2.out" 
    });

    var tl2 = gsap.timeline();

    tl2.from(".make-magnet3 , .asdasdisfd", { 
        opacity: 0,     
        duration: 2,
        translateY: "-100px",  
        delay: 1,
        stagger: 0.1, 
        ease: "power2.out"
    });
    
    tl2.from(".asdasdisfd2", { 
        opacity: 0,     
        duration: 0.5,
        translateY: "-50px",  
        ease: "power2.out"
    });

    gsap.from(".video-con video", {
        scale: 0.2,
        yPercent: -100,
        borderRadius: "400",
        scrollTrigger: {
            trigger: ".video-con",
            start: "top bottom",
            end: "center center",
            scrub: 2
        }
    });


    // Listen for the scroll event on the window
    window.addEventListener('scroll', function() {
        // Check if the element you want to animate is in view
        var element = document.querySelector('.videoscroll');
        if (element) {
            var elementPosition = element.getBoundingClientRect();

            // If the element is in view, trigger the GSAP animation
            if (elementPosition.top < window.innerHeight && elementPosition.bottom >= 0) {
                gsap.fromTo('.videoscroll', {
                    width: "200px",
                    height: "200px",
                }, {
                    duration: 1,
                    ease: 'power1.inOut',
                    height: "500px",
                    width: "500px",
                });
            }
        }
    });
});

gsap.from(".sfohfasiudhasdasd", {
    // scale: 0.2,
    x: "-100%",
    backgroundSize: "0% 100%",
    backgroundPositionX: "-1.28%", // animate background position x
    scrollTrigger: {
        backgroundColor: "#000",
        trigger: ".sfohfasiudhasdasd",
        start: "left right",
        end: "center center",
        scrub: 2
    }
});

gsap.from(".asdasidasiund", {
    // scale: 0.2,
    x: "-100%",
    backgroundSize: "0% 100%",
    backgroundPositionX: "-1.28%", // animate background position x
    scrollTrigger: {
        backgroundColor: "#000",
        trigger: ".asdasidasiund",
        start: "left right",
        end: "center center",
        scrub: 2,
        rotate: "10deg",
    }
});

