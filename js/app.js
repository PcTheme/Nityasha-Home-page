window.addEventListener('load', function () {
    gsap.to('.loader', { duration: 1, opacity: 0, display: 'none', ease: 'power2.inOut' });
});


// calling inportant functions
navAnimation();


// Get reference to the button element
function toggleMode() {
    // Get reference to the body element
    var body = document.body;

    // Toggle between dark and light mode classes
    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");

    // Get reference to the button element
    var button = document.querySelector(".mode-toggle");

    // Toggle button text and style
    if (body.classList.contains("dark-mode")) {
        button.innerHTML = '<img alt="Trionn" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" class="w-full h-full tr__cursor__hoverable tr__magnetic" src="/_next/static/media/light-mode-icon.035572eb.svg" style="color: transparent; translate: none; rotate: none; scale: none; transform: translate(0px, 0px);"></img>';
        button.classList.remove("light-mode");
        button.classList.add("dark-mode");
    } else {
        button.innerHTML = '<img alt="Trionn" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" class="w-full h-full tr__cursor__hoverable tr__magnetic" src="/_next/static/media/dark-mode-icon.db0ad99a.svg" style="color: transparent; translate: none; rotate: none; scale: none; transform: translate(0px, 0px);">';
        button.classList.remove("dark-mode");
        button.classList.add("light-mode");
    }
}





// Listen for mouse movement


// function mujek() {
//     // Get reference to the body element
//     var body = document.body;

//     // Toggle between dark and light mode classes
//     // Get reference to the button element
//     var button = document.querySelector(".mode-toggle");

//     // Toggle button text and style
//     if (body.classList.contains("dark-mode")) {
//         button.innerHTML = '<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><g style="mix-blend-mode:difference" fill="#B0B1B4"><rect width="32" height="32" rx="16" fill-opacity=".1" /><path d="M22.773 16.054a6.72 6.72 0 1 1-6.72-6.72 6.26 6.26 0 0 1 1.467.166 4.113 4.113 0 1 0 5.087 5.087c.113.48.169.973.166 1.467Z" /></g></svg>';
//     } else {
//         button.innerHTML = '<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="16" fill="#D9D9D9" fill-opacity=".1"/><path d="M19.167 15.833a3.333 3.333 0 1 1-6.667 0 3.333 3.333 0 0 1 6.667 0ZM15.833 11.666a.507.507 0 0 0 .5-.5v-2a.5.5 0 1 0-1 0v2a.507.507 0 0 0 .5.5ZM15.833 20a.507.507 0 0 0-.5.5v2a.5.5 0 1 0 1 0v-2a.507.507 0 0 0-.5-.5ZM12.18 12.886a.5.5 0 0 0 .707-.706l-1.414-1.413a.5.5 0 1 0-.706.706l1.413 1.413ZM19.487 18.78a.5.5 0 0 0-.707.706l1.413 1.414c.094.094.221.147.354.147a.5.5 0 0 0 .353-.853l-1.413-1.414ZM11.667 15.833a.507.507 0 0 0-.5-.5h-2a.5.5 0 1 0 0 1h2a.507.507 0 0 0 .5-.5ZM22.5 15.333h-2a.5.5 0 1 0 0 1h2a.5.5 0 0 0 0-1ZM12.18 18.78l-1.413 1.413a.5.5 0 0 0 .706.707l1.414-1.413a.5.5 0 0 0-.707-.707ZM19.167 13.033c.132 0 .26-.052.353-.146l1.38-1.414a.5.5 0 1 0-.707-.707L18.78 12.18a.5.5 0 0 0 .387.853Z" fill="#E0EEEE"/></svg>';
//     }

//     // Get reference to the audio element
//     var audio = document.getElementById("myAudio");

//     // Toggle play/pause state of the audio
//     if (audio.paused) {
//         audio.play();
//     } else {
//         audio.pause();
//     }
// }
function togglePlay() {
    var audio = document.getElementById('audioPlayer');
    var playIcon = document.getElementById('playIcon');
    var pauseIcon = document.getElementById('pauseIcon');

    if (audio.paused) {
        audio.play();
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
    } else {
        audio.pause();
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
    }
}
// document.querySelectorAll('.secondddivnav li a').forEach(item => {
//     item.addEventListener('mouseover', event => {
//         item.classList.add('hovered'); // Add class to the anchor tag
//         item.parentNode.classList.add('li-hovered'); // Add class to the parent <li>
//         // Add 'nohover' class to all other anchor tags
//         document.querySelectorAll('.secondddivnav li a').forEach(a => {
//             if (a !== item) {
//                 a.classList.add('nohover');
//             }
//         });
//     });
//     item.addEventListener('mouseout', event => {
//         item.classList.remove('hovered'); // Remove class from the anchor tag
//         item.parentNode.classList.remove('li-hovered'); // Remove class from the parent <li>
//         // Remove 'nohover' class from all anchor tags
//         document.querySelectorAll('.secondddivnav li a').forEach(a => {
//             a.classList.remove('nohover');
//         });
//     });
// });





// Important functions
function navAnimation() {
    const menuPara = document.querySelector(".nav-btn p");
    const menuBtn = document.querySelector(".menu-icon");
    let count = 1;




    menuPara.onmouseenter = () => {
        gsap.to(".mousefollower", {
            scale: 4,
            boxShadow: "0 0 5px 5px black",
            ease: "none"
        })
    }

    menuPara.onmouseleave = () => {
        gsap.to(".mousefollower", {
            scale: 1,
            boxShadow: "0 0 0 0 transparent",
            ease: "none"
        })
    }


    menuBtn.onmouseenter = () => {
        gsap.to(".mousefollower", {
            scale: 0,
        })
    }



    menuBtn.onclick = () => {
        let tl = gsap.timeline();
        if (count) {
            gsap.to(".menu-icon .lines", {
                gap: 0,
                rotate: 180,
            })
            gsap.to(".menu-icon .line", {
                width: 17,
                rotate: 45,
                y: 1,
            })
            gsap.to(".menu-icon .line:nth-child(2)", {
                rotate: -45,
                y: -1,
            })


            tl
                .to(".nav-list", {
                    height: "calc(100vh - 0px)",
                })
                .to(".nav-list li a", {
                    y: 0,
                    opacity: 1,
                    stagger: .1,
                })


            count--;
        } else {
            gsap.to(".menu-icon .lines", {
                gap: 4,
                transform: "",
            })
            gsap.to(".menu-icon .line", {
                width: 22,
                transform: "",
            })
            gsap.to(".menu-icon .line:nth-child(2)", {
                width: 15,
                transform: "",
            })

            tl
                .to(".nav-list li a", {
                    y: 200,
                    opacity: 0,
                    stagger: .1,
                })
                .to(".nav-list", {
                    height: 0,
                })

            count++;
        }

    }


    document.querySelectorAll(".nav-list li").forEach(list => {
        list.onmouseenter = () => {
            gsap.to(".nav-list li a", {
                color: "#252525",
            })
        }
        list.onmouseleave = () => {
            gsap.to(".nav-list li a", {
                color: "#e0eeee",
            })
        }
    })

}


// Important functions
function navAnimation() {
    const menuPara = document.querySelector(".nav-btn p");
    const menuBtn = document.querySelector(".menu-icon");
    let count = 1;




    menuPara.onmouseenter = () => {
        gsap.to(".mousefollower", {
            scale: 4,
            boxShadow: "0 0 5px 5px black",
            ease: "none"
        })
    }

    menuPara.onmouseleave = () => {
        gsap.to(".mousefollower", {
            scale: 1,
            boxShadow: "0 0 0 0 transparent",
            ease: "none"
        })
    }


    menuBtn.onmouseenter = () => {
        gsap.to(".mousefollower", {
            scale: 0,
        })
    }



    menuBtn.onclick = () => {
        let tl = gsap.timeline();
        if (count) {
            gsap.to(".menu-icon .lines", {
                gap: 0,
                rotate: 180,
            })
            gsap.to(".menu-icon .line", {
                width: 17,
                rotate: 45,
                y: 1,
            })
            gsap.to(".menu-icon .line:nth-child(2)", {
                rotate: -45,
                y: -1,
            })


            tl
                .to(".nav-list", {
                    height: "calc(100vh - 0px)",
                })
                .to(".nav-list li a", {
                    y: 0,
                    opacity: 1,
                    stagger: .1,
                })


            count--;
        } else {
            gsap.to(".menu-icon .lines", {
                gap: 4,
                transform: "",
            })
            gsap.to(".menu-icon .line", {
                width: 22,
                transform: "",
            })
            gsap.to(".menu-icon .line:nth-child(2)", {
                width: 15,
                transform: "",
            })

            tl
                .to(".nav-list li a", {
                    y: 200,
                    opacity: 0,
                    stagger: .1,
                })
                .to(".nav-list", {
                    height: 0,
                })

            count++;
        }

    }


    document.querySelectorAll(".nav-list li").forEach(list => {
        list.onmouseenter = () => {
            gsap.to(".nav-list li a", {
                color: "#252525",
            })
        }
        list.onmouseleave = () => {
            gsap.to(".nav-list li a", {
                color: "#e0eeee",
            })
        }
    })

}

function lenisscroll() {
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
        // console.log(e)
    })

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
}
lenisscroll()

