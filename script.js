gsap.to('#bg',{
    scrollTrigger:{
    
        scrub:1
    },
    scale:1.5
})
gsap.to('#mountain1',{
    scrollTrigger:{
        scrub:1,
       
    },
    x:-2000,
    
})

gsap.to('#mountain2',{
    scrollTrigger:{
        
        scrub:1,
       
    },
    x:2000,
})
gsap.to('#clouds1',{
    ScrollTrigger:{
        scrub:1,
    },
    x:-100,
})
gsap.to('#clouds2',{
    ScrollTrigger:{
        scrub:1,
    },
    x:160,
})



const content2=document.querySelector('.content2')
const nav=document.querySelector('.navbar')
const a1=document.querySelectorAll('.a1')
window.addEventListener('scroll',()=>{
    if(scrollY>500){
        nav.style.backgroundColor='#233329'
        a1.forEach((item)=>{
            item.style.color='#fff'
        })
    }else{
        nav.style.backgroundColor="#94c997"
        a1.forEach((item)=>{
            item.style.color='#555'
        })
    }
})


const yearr=new Date()
const getyearr=yearr.getFullYear()

const copyrightdynamicdate=document.querySelector('.copy')
copyrightdynamicdate.innerText=getyearr
console.log(getyearr)


const hover = gsap.to(a1[0], {
  scaleX:1.12, scaleY:1.12, scaleZ:1.5,
  color: "#ffacfc",
  duration: 1.5,
  paused: true,
  ease: "ease-in-out"
});

a1[0].addEventListener("mouseenter", () => hover.play())

a1[0].addEventListener('mouseleave',()=>{
    hover.reverse()
})

const hover1 = gsap.to(a1[1], {
    scaleX:1.12, scaleY:1.12, scaleZ:1.5,
    color: "#ffacfc",
    duration: 1.5,
    paused: true,
    ease: "ease-in-out"
  });
  
  a1[1].addEventListener("mouseenter", () => hover1.play())
  
  a1[1].addEventListener('mouseleave',()=>{
      hover1.reverse()
  })

  const hover2 = gsap.to(a1[2], {
    scaleX:1.12, scaleY:1.12, scaleZ:1.5,
    color: "#ffacfc",
    duration: 1.5,
    paused: true,
    ease: "ease-in-out"
  });
  
  a1[2].addEventListener("mouseenter", () => hover2.play())
  
  a1[2].addEventListener('mouseleave',()=>{
      hover2.reverse()
  })

  const hover3= gsap.to(a1[3], {
    scaleX:1.12, scaleY:1.12, scaleZ:1.5,
    color: "#ffacfc",
    duration: 1.5,
    paused: true,
    ease: "ease-in-out"
  });
  
  a1[3].addEventListener("mouseenter", () => hover3.play())
  
  a1[3].addEventListener('mouseleave',()=>{
      hover3.reverse()
  })