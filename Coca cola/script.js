
var tl = gsap.timeline();

tl.to('.intro video' , {
    y : '-110vh',
    delay:2,
})

tl.from('nav .logo img , ul li , button' , {
    y : -100,
    stagger : 0.1,
    duration : 1,
    ease : 'back.out',
    opacity:0
})

tl.from('.centerLogo img' , {
    y : 100, 
    duration : 1,
    ease : 'back.out',
    opacity:0
})

tl.from('.text h1 #text1 , #text2' , {
    y : 100, 
    duration : 1,
    ease : 'back.out',
    opacity:0
})

tl.from('.home #bottle' ,{
    y : -200, 
    duration : 1,
    ease : 'back.out',
    opacity:0
} , '-=1')

var tl = gsap.timeline({
    scrollTrigger : {
        trigger : '.home',
        start : '50% center',
        end : 'bottom center',
        scrub : 1,
        markers: true
    }
})

tl.to('.centerLogo , .centerLogo img' , {
    y : -300, 
    duration : 1,
    ease : 'back.out',
    opacity:0

})

tl.to('.text h1' , {
    y : 300, 
    duration : 1,
    ease : 'back.out',
    opacity:0
} , '-=1')

tl.to('#bottle' , {
    left : '10%',
    y : '50%',
    duration : 1,
    ease: 'power2.out'
} , '-=1')

