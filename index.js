var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");
var navLinks = document.querySelectorAll("#nav h4");

document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x+20+"px";
    crsr.style.top = dets.y+"px";
    blur.style.left = dets.x- 200 +"px";
    blur.style.top = dets.y- 200 +"px";
})

navLinks.forEach(function(elem) {
    elem.addEventListener('mouseenter', function(){
        crsr.style.scale = 2.5
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener('mouseleave', function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95C11E"
        crsr.style.backgroundColor = "#95C11E"
    })

})



gsap.to("#nav", {
    backgroundColor: "#000",
    height: "90px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger:{
        trigger: "#main", 
        scroller: "body",
        // markers: true,
        start: "top -25%",
        end: "top -70%",
        scrub: 2
    }
})

gsap.from("#about-us img, #about-us-in", {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        start: "top 60%",
        end: "top 55%",
        scrub: 2
    }
})

gsap.from("#cards-container", {
    scale: 0.8,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        trigger: "#cards-container",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 2
    }
})

gsap.to("#left-colon", {
    x: 60,
    y: 60,
    scrollTrigger: {
        trigger: "#left-colon",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub:4
    }
})

gsap.to("#right-colon", {
    x: -66,
    y: -66,
    scrollTrigger: {
        trigger: "#left-colon",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub:4
    }
})

gsap.from("#page4 h4", {
    y: 50,
    scrollTrigger: {
        trigger: "#page4 h4",
        scroller: "body",
        start: "top 75%",
        end: "top 72%",
        scrub: 3
    }
})