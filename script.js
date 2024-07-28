function scrolltrigger(){
      gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

}
scrolltrigger();



function cursor(){
      var pageContent =document.querySelector("#page1-content")
var cursor = document.querySelector("#cursor")
pageContent.addEventListener("mousemove",function(val){
     gsap.to(cursor,{
      x:val.x,
      y:val.y,
     })
})
pageContent.addEventListener("mouseleave",function(val){
     gsap.to(cursor,{
      scale:0,
      opacity:0,
     })
})
pageContent.addEventListener("mouseenter",function(val){
     gsap.to(cursor,{
      scale:1,
      opacity:1,
     })
})
}
cursor();

function page2Animation(){
      gsap.from("#page2 #content2>h1,h2,h5",{
          y:60,
          opacity:0,
          ease:Power3,
          stagger:.1,

        
          scrollTrigger:{
            trigger:"#page2",
            scroller:"#main",
            scrub:2,
          
            start: "Top 46%",
            end:"Top 50%",
            pin:true,

          }
         
      })
      
    
}

page2Animation();

function page3Animation(){
  gsap.from("#page3top h1",{
    y:50,
    opacity:0,
    
      
    scrollTrigger:{
      trigger:"#page3top",
      scroller:"#main",
      scrub:2,
    
     start: "top 59%",
      end:"Top 65%",
      pin:true,

    }
    
  })
}
page3Animation();

function page4animation(){var tl= gsap.timeline({
  scrollTrigger:{
      trigger:"#page4",
      scroller:"#main",
      start: "Top 50%",
      end:"Top 65%",

      scrub:3,
      pin:true,
     
     
  }
})
tl.to("#page4 h5",{
 opacity:1,
 y:-10,
 ease:Power1,
 duration:1,
  
},"hello1")

   tl.to("#page4 #line4",{
    width:"100%",
    duration:1,
    ease:Power3,
    
  },"hello1")
   tl.from("#page4 p span",{
    y:90,
    opacity:0,
    stagger:.1,
    duration:1,
    ease:Power3,
    
  },"hello")
}
page4animation();

function page5animation(){var tl2= gsap.timeline({
  scrollTrigger:{
      trigger:"#page5",
      scroller:"#main",
      start: "Top Top",
      end:"Top 65%",
      
      
      scrub:3,
      pin:true,
     
     
  }
})
function cursor2(){
  var pageContent2=document.querySelector("#page5")
var cursor2 = document.querySelector("#cursor5")
pageContent2.addEventListener("mousemove",function(value){
   cursor2.style.left = value.x +'px'
   cursor2.style.top = value.y +'px'
})
pageContent2.addEventListener("mouseenter",function(value){
  gsap.to(cursor2,{
   scale:1,
   opacity:1,
  })
  
 
 })
pageContent2.addEventListener("mouseleave",function(value){
 gsap.to(cursor2,{
  scale:0,
  opacity:0,
 })
})

}

cursor2();
}

page5animation();
function swiper(){
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: true,
    },
  });
}

swiper();

function loader1(){
var tl3 = gsap.timeline()

tl3.from("#loader h1",{
  x:40,
  opacity:0,
  stagger:0.2,
  duration:.5,
})
tl3.to("#loader h1",{
 opacity:0,
 x:-40,
 stagger:.2,
 duration:.5,
})
tl3.to("#loader",{
  x:-10,
opacity:0,
})
tl3.to("#loader",{
  display:"none",
})
tl3.from("#page1-content h1 span",{
y:30,
opacity:0,
duration:.1,
stagger:.1,

})

}

loader1();

function page7animation(){var tl5= gsap.timeline({
  scrollTrigger:{
      trigger:"#page7",
      scroller:"#main",
      start: "Top 20%",
      end:"Top 80%",   
      scrub:2,
      pin:true, 
  }
})
.from("#page7>h1",{
  y:10,
  opacity:0,
  duration:.8,
  delay:.3,
  ease:Power3,
})
}

page7animation();

function footeranimation(){var tl6= gsap.timeline({
  scrollTrigger:{
      trigger:"#footer",
      scroller:"#main",
      start: "Top 10%",
      end:"Top 80%",   
      scrub:2,
      pin:true, 
  }
})
.from("#ftop",{
  y:10,
  opacity:0,
  stagger:.4,
  ease:Power2,

},"hello6")
.from("#fcenter",{
  y:10,
  opacity:0,
  stagger:.4,
  delay:1.5,
  ease:Power3,

},"hello7")
.from("#lastbtm1 h1 span",{
  y:-100,
  x:10,
opacity:0,
delay:1.5,
  stagger:.6,

  ease:Power3,

},"hello8")

}
footeranimation()
