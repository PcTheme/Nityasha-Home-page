document.addEventListener('DOMContentLoaded', function () {
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
    // Animation for first card
    tl2.from(".asiudha8sdhasuduysagdagsd", {
        x: "-200%",
        scale: 2,
        rotate: "-20.7668deg",
        backgroundSize: "0% 100%",
        backgroundPositionX: "-1.28%", // animate background position x
        scrollTrigger: {
            backgroundColor: "#000",
            trigger: ".asiudha8sdhasuduysagdagsd",
            start: "left right",
            end: "center center",
            scrub: 0.2,
            rotate: "-20.7668deg",
            onComplete: function () {
            }
        }
    });

    tl2.from(".asiudha8sdhasuduysagdagsd3", {
        x: "-200%",
        scale: 2,
        rotate: "20.7668deg",
        // backgroundSize: "0% 100%",
        backgroundPositionX: "-1.28%", // animate background position x
        scrollTrigger: {
            backgroundColor: "#000",
            trigger: ".asiudha8sdhasuduysagdagsd3",
            start: "left right",
            end: "center center",
            scrub: 0.0,
            rotate: "-20.7668deg",
            onComplete: function () {
            }
        }
    });
    tl2.from(".asiudha8sdhasuduysagdagsd2", {
        x: "200%", // Fixed position at 200%
        scale: 2,
        rotate: "20.7668deg",
        // backgroundSize: "0% 100%",
        backgroundPositionX: "-1.28%", // animate background position x
        scrollTrigger: {
            backgroundColor: "#000",
            trigger: ".asiudha8sdhasuduysagdagsd2",
            start: "left right",
            end: "center center",
            scrub: 0.0,
            rotate: "20.7668deg",
            onComplete: function () {
                // Your onComplete function code here
            }
        }
    });
    tl2.from(".asiudha8sdhasuduysagdagsd4", {
        x: "200%", // Fixed position at 200%
        scale: 2,
        rotate: "20.7668deg",
        // backgroundSize: "0% 100%",
        backgroundPositionX: "-1.28%", // animate background position x
        scrollTrigger: {
            backgroundColor: "#000",
            trigger: ".asiudha8sdhasuduysagdagsd4",
            start: "left right",
            end: "center center",
            scrub: 0.0,
            rotate: "20.7668deg",
            onComplete: function () {
                // Your onComplete function code here
            }
        }
    });
    tl2.from(".asdasidasiund1", {
        x: "200%", // Fixed position at 200%
        scale: 2,
        rotate: "20.7668deg",
        // backgroundSize: "0% 100%",
        backgroundPositionX: "-1.28%", // animate background position x
        scrollTrigger: {
            backgroundColor: "#000",
            trigger: ".asdasidasiund1",
            start: "left right",
            end: "center center",
            scrub: 0.0,
            rotate: "20.7668deg",
            onComplete: function () {
                // Your onComplete function code here
            }
        }
    });

    tl2.from(".asdasidasiund2", {
        x: "-200%",
        scale: 2,
        rotate: "-20.7668deg",
        // backgroundSize: "0% 100%",
        backgroundPositionX: "-1.28%", // animate background position x
        scrollTrigger: {
            backgroundColor: "#000",
            trigger: ".asdasidasiund2",
            start: "left right",
            borderRadius: "10px",
            end: "center center",
            scrub: 0.0,
            rotate: "-20.7668deg",
            onComplete: function () {
            }
        }
    });
    tl2.from(".asdasidasiund56", {
        x: "200%", // Fixed position at 200%
        scale: 2,
        rotate: "20.7668deg",
        // backgroundSize: "0% 100%",
        backgroundPositionX: "-1.28%", // animate background position x
        scrollTrigger: {
            backgroundColor: "#000",
            trigger: ".asdasidasiund56",
            start: "left right",
            end: "center center",
            scrub: 0.0,
            rotate: "20.7668deg",
            onComplete: function () {
                // Your onComplete function code here
            }
        }
    });
    tl2.to("#suydbasuydasvdasyd1", {
        rotate: "-45deg",
        x: "-50%",
        scrollTrigger: {
            trigger: "#suydbasuydasvdasyd1",
            // markers: true,
            start: "top 20%",
            end: "top 100%",
            scrub: 7, // Adjust scrub value as needed
            onComplete: function () {
                // Optional: Callback function when animation is complete
            }
        }
    });
    tl2.to("#suydbasuydasvdasyd3", {
        rotate: "-45deg",
        x: "-50%",
        y: "-20%",
        scrollTrigger: {
            trigger: "#suydbasuydasvdasyd3",
            // markers: true,
            start: "left right",
            end: "center center",
            scrub: 6, // Adjust scrub value as needed
            onComplete: function () {
                // Optional: Callback function when animation is complete
            }
        }
    });
    tl2.to("#suydbasuydasvdasyd5", {
        rotate: "-45deg",
        x: "-50%",
        y: "-33%",
        scrollTrigger: {
            trigger: "#suydbasuydasvdasyd5",
            // markers: true,
            start: "top 100%",
            end: "center 100%",
            scrub: 5, // Adjust scrub value as needed
            onComplete: function () {
                // Optional: Callback function when animation is complete
            }
        }
    });
    tl2.to("#suydbasuydasvdasyd2", {
        rotate: "45deg",
        x: "50%",
        y: "33%", 
        transformOrigin: "top right",
        scrollTrigger: {
            trigger: "#suydbasuydasvdasyd2",
            // markers: true, 
            start: "top 20%",
            end: "top 100%",
            scrub: 7, // Adjust scrub value as needed
            onComplete: function () {
                // Optional: Callback function when animation is complete
            }
        }
    });
   
    tl2.to("#suydbasuydasvdasyd4", {
        rotate: "45deg",
        x: "50%",
        y: "33%", 
        transformOrigin: "top right",
        scrollTrigger: {
            trigger: "#suydbasuydasvdasyd4",
            // markers: true, 
            start: "left right",
            end: "center center",
            scrub: 6, // Adjust scrub value as needed
            onComplete: function () {
                // Optional: Callback function when animation is complete
            }
        }
    });
   
    tl2.to("#suydbasuydasvdasyd6", {
        rotate: "45deg",
        x: "60%",
        y: "-33%",
        transformOrigin: "top right",
        scrollTrigger: {
            trigger: "#suydbasuydasvdasyd6",
            // markers: true, 
            start: "top 100%",
            end: "center 100%",
            scrub: 5, // Adjust scrub value as needed
            onComplete: function () {
                // Optional: Callback function when animation is complete
            }
        }
    });
   



//  moje ose jab me scroll karu to ye side me jana chye ha
    gsap.from(".video-con video", {
        scale: 0.14,
        yPercent: -104,
        width: "",
        borderRadius: "400",
        scrollTrigger: {
            trigger: ".video-con",
            start: "top bottom",
            end: "center center",
            scrub: 2
        }
    });


    // Listen for the scroll event on the window
    window.addEventListener('scroll', function () {
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


gsap.from(".asdoiuasduiasudybsad", {
    // scale: 0.2,
    y: "-100%",
    backgroundSize: "0% 100%",
    backgroundPositionX: "-1.28%", // animate background position x
    scrollTrigger: {
        backgroundColor: "#000",
        trigger: ".asdoiuasduiasudybsad",
        start: "left right",
        end: "center center",
        scrub: 2,
        rotate: "10deg",
    }
});


gsap.from(".usadbsiaydbasidvgaysdas", {
    // scale: 0.2,
    x: "-100%",
    backgroundSize: "0% 100%",
    backgroundPositionX: "-1.28%", // animate background position x
    scrollTrigger: {
        backgroundColor: "#000",
        trigger: ".usadbsiaydbasidvgaysdas",
        start: "left right",
        end: "center center",
        scrub: 2,
        rotate: "10deg",
    }
});
var splide = new Splide('.abdasbdasbgdasdbasudvasasdas', {
    type: 'loop',
    perPage: 3,
    autoplay: true,
});

splide.mount();


// gsap.from(".adnasidbsid", {
//     x: -100,
    
// })


