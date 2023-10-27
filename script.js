const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function CircleFollow(){
    window.addEventListener("mousemove", function(details){
        document.querySelector("#circle").style.transform = `translate(${details.clientX}px, ${details.clientY}px)`
    })
}

function heroani(){
    var t1 = gsap.timeline();
    t1.from(".bounding-text", {
        y:200,
    opacity: .5,
    // backgroundColor: "blue",
    duration: .6,
    stagger: 0.2,
})
t1.from(".slowani", {
    y:-30,
    opacity: 0,
    // backgroundColor: "blue",
    duration: .8,
})
t1.from(".opacani", {
    opacity:0,
    duration:1.4,
    delay: -.5
})
}

document.querySelectorAll(".elem").forEach(function (elem) {
    elem.addEventListener("mousemove", function (details) {
        gsap.to(elem.querySelector("span"), {
            opacity: 1,
            display: "block",
        })
        gsap.to(elem.querySelector("h1"), {
            x:60,
            duration: .6,
            opacity: .2,
            scrub: 5
        })
    })
    elem.addEventListener("mouseleave", function (details) {
        gsap.to(elem.querySelector("span"), {
            display: "none",
            opacity: 0
        })
        gsap.to(elem.querySelector("h1"), {
            x:0,
            duration: 1,
            opacity: .6,
            scrub: 5

        })
    })
})

CircleFollow();
heroani();

// document.querySelectorAll(".elem").forEach(function (elems) {
//     elems.addEventListener("mouseleave", function (details) {
//         gsap.to(elems.querySelector("img"), {
//             opacity:0,
//             ease: Power1,
//         })
//     })
//     elems.addEventListener("mousemove", function (details) {
//         var diffy = details.clientY - elems.getBoundingClientRect().top;
//         var diffx = details.clientX - elems.getBoundingClientRect().left;
//         gsap.to(elems.querySelector("img"), {
//             display: "block",
//             ease: Power1,
//             top: diffy,
//             left: details.clientX,
//             // transform: `translate(${diffx}px, ${diffy})`
//         })
//     })
    
// })
