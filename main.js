let topleft = document.querySelector("#topleft")
// topleft.style.width = "100%"
gsap.from("#topleft",{
    width:'-100%',
    duration:2,
    delay:0,
    opacity:0
})

gsap.from("#headtag",{
    y:60,
    duration:2,
    delay:2,
    opacity:0
});

gsap.from("#fh2 ,#sh2",{
    y:60,
    duration:2,
    delay:3,
    opacity:0
})
gsap.from("#vocher ,#inputbox", {
    y:60,
    duration:2,
    delay:4,
    opacity:0
})
gsap.from("p",{
    y:60,
    duration:2,
    delay:5,
    opacity:0
})
gsap.from("#icons",{
    y:60,
    duration:2,
    delay:6,
    opacity:0

})
