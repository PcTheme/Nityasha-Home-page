document.addEventListener("DOMContentLoaded", function() {
    // Select all elements with class "make-magnet"
    let magnets = document.querySelectorAll(".make-magnet");

    // Initialize mouse follower
    Shery.mouseFollower();

    // Apply magnet effect to elements with class "make-magnet"
    Shery.makeMagnet(".make-magnet", {
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
    });


    Shery.makeMagnet(".make-magnet3", {
        ease: "cubic-bezier(10, 10, 10.320, 10)",
        duration: 1,
    });

    // Add mouse enter and leave event listeners to each magnet element
    magnets.forEach(magnet => {
        magnet.addEventListener("mouseenter", () => {
            gsap.to(".mousefollower", {
                boxShadow: "0 0 5px 5px black",
                filter: blur("3px"),
                scale: 1, 
                ease: "none"
            });
        });

        magnet.addEventListener("mouseleave", () => {
            gsap.to(".mousefollower", {
                boxShadow: "0 0 0 0 transparent",
                ease: "none",
                filter: blur("3px"),
                scale: 1,
            });
        });
    });

    gsap.to(".mousefollower", {
        boxShadow: "0 0 5px 5px black",
        ease: "none",
        filter: blur("3px"),
        scale: 1,
    });

    // Select menuPara element
    let menuPara = document.querySelector(".menu-para");

    // Add mouse enter event listener to menuPara element
    menuPara.addEventListener("mouseenter", () => {
        // Apply GSAP animation to blur the menuPara element
        gsap.to(".menu-para", {
            ease: "none"
        });

        // Apply GSAP animation to modify the mousefollower
        gsap.to(".mousefollower", {
            scale: 17,
            // color: "#c5fcfc",
            // backgroundColor: "#c5fcfc",
            // filter: "blur(2px)", // Add blur effect
            // boxShadow: "0 0 5px 5px black",
            ease: "none"
        });
    });

    // Add mouse leave event listener to menuPara element
    menuPara.addEventListener("mouseleave", () => {
        // Reset GSAP animation for mousefollower
        gsap.to(".mousefollower", {
            scale: 1,
            boxShadow: "0 0 0 0 transparent",
            ease: "none"
        });
    });

    // Apply magnet effect to element with class "magnet-target2"
    Shery.makeMagnet(".magnet-target2", {
        ease: "cubic-bezier(100.23, 100, 100.320, 100)",
        duration: 0,
    });

    document.addEventListener("DOMContentLoaded", function() {
        const asd8asdyasd = document.querySelector(".asd8asdyasd");
        
        asd8asdyasd.addEventListener("mouseenter", () => {
            gsap.to(".asd8asdyasd", {
                ease: "none"
            });
        
            gsap.to(".mousefollower", {
                scale: 3    ,
                filter: "blur(36px)", 
                boxShadow: "0 0 5px 5px black",
                ease: "none"
            });
        });
    });
    
});
Shery.imageMasker(".asdasidasiund" /* Element to target.*/, {
    mouseFollower: true,
    text: "View project",
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  Shery.textAnimate(".text-target" /* Element to target.*/, {
    //Parameters are optional.
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });
  
//   Shery.imageEffect("#asdasidasiund", {
//     style: 1,
//     debug: true,
//   });




  document.addEventListener("DOMContentLoaded", function() {
    const sfohfasiudhasdasd = document.querySelector(".sfohfasiudhasdasd");
    
    sfohfasiudhasdasd.addEventListener("mouseenter", () => {
        gsap.to(".sfohfasiudhasdasd", {
            ease: "none"
        });
    
        gsap.to(".mousefollower", {
            scale: 10,
            filter: "blur(2px)", 
            boxShadow: "0 0 5px 5px black",
            ease: "none"
        });

    });
            
        sfohfasiudhasdasd.addEventListener("mouseleave", () => {
            gsap.to(".mousefollower", {
                boxShadow: "0 0 0 0 transparent",
            scale: 1,
            ease: "none"
                
            });
        });
});

