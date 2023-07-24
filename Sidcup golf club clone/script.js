
var crsr=document.querySelector("#cursor")
var crsr2=document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y+ "px"
    crsr2.style.left = dets.x-250 + "px"
    crsr2.style.top = dets.y-250 + "px"

})



var h4all=document.querySelectorAll("#nav h4")

h4all.forEach(function(elem){

    elem.addEventListener("mouseenter", function(){
        crsr.style.scale=3
        crsr.style.backgroundColor="transparent"
        crsr.style.border="0.5px solid #fff"

    })


    elem.addEventListener("mouseleave", function(){
        crsr.style.scale=1
        crsr.style.backgroundColor="#95c11e"
        crsr.style.border="0px solid #95c11e"

    })
})



gsap.to("#nav",{

    backgroundColor:"#000",
    height:"100px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top- 11%",
        scrub:2
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top- 80%",
        scrub:4
    }
})

gsap.from("#about-us img, #about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 55%",
        scrub:2

    }

})

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 55%",
        scrub:2

    }

})


gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})

gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon2",
        scroller:"body",
        start:"top 100%",
        end:"top 15%",
        scrub:4,
        
    }
})

gsap.to("#page4 h1",{
    y:-50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 80%",
        end:"top 55%",
        scrub:4,
     
        
    }
})