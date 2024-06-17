var tl = gsap.timeline();

tl.from('nav , nav img , ul li , button' , {
    y : -100,
    stagger : 0.1,
    duration : 1,
    ease : 'back.out',
    opacity:0
})

tl.from('nav i' , {
    x : -30 ,
    duration : .5,
    ease : 'back.out',
    opacity:0
})

tl.from('.centerLogo img ' , {
    y : 100, 
    duration : .5,
    ease : 'back.out',
    opacity:0
})

tl.from('.text h1' , {
    y : 100, 
    duration : .5,
    ease : 'back.out',
    opacity:0
})

tl.from('#bottle' , {
    y : -100, 
    duration : .5,
    ease : 'back.out',
    opacity:0
} ,'-=1')


// scroll time line

var tl = gsap.timeline({
    scrollTrigger : {
        trigger : '.hero',
        start : '40% center',
        end : '80% center',
        scrub : 1,
    }
})

tl.to('h1' , {
    y : 300, 
    duration : 1, 
    opacity:0
} )

tl.to('.centerLogo img' , {
    width: '60vw',
    y : -100,
} ,'-=1')

tl.to('#bottle' , {
    width : '15vw',
    y: '80vh',
    duration : 1,
} , '-=1') 

var tl = gsap.timeline({
    scrollTrigger : {
        trigger : '.page2',
        start : '-40% center',
        end : '0 center',
        scrub : 1,
        markers:true
    }
})

tl.to('.page2 .center',{
    width : '85%',
    height : '85%',
} )