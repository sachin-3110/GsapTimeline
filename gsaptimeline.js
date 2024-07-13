var tl=gsap.timeline()
tl.from("#nav",{
    opacity:0,
    y:-100,
    duration:0.6,
})
tl.from("#clickables h2",{
    opacity:0,
    y:-100,
    duration:0.6,
    stagger:0.3,
})
tl.from("#text div",{
    x:-350,
    opacity:0,
    duration:0.5,
    stagger:0.4,
})

tl.to("#card3",{
    // rotate:15,
    opacity:1,
})
tl.to("#card1",{
    opacity:1,
    rotate:-5,
})
tl.to("#card2",{
    rotate:-10,
    opacity:1,
})