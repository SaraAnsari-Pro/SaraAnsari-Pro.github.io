//const navbar= document.querySelector(".navbar");
//a=navbar.querySelectorAll("a");
//a.forEach(function(element){
//    element.addEventListener("click",function(){
//        for(let i=0; i<a.length; i++){ a[i].classList.remove("active"); 
//    }
//    this.classList.add("active") 
//    
//    })
//})
//
////ham-burger
//
//const hamBurger=document.queryselector(".ham-burger");
//hamBurger.addEventListener("click",function(){ document.querySelector(".navbar").classList.toggle("show");
//    
//})


//===========================

console.clear();

mySplitText = new SplitText(".txt", {type:"chars", charsClass:"char"}); 

let gtl = gsap.timeline({ yoyo: true, repeat: -20, delay: 0 });

function animateText() {
	let tl = gsap.timeline()
		.to( '.char', {
			fontWeight: 100,
			fontStretch: '10%',
			ease: "sine.inOut",
			duration: 0.8,
			stagger: {
				each: 0.4,
				yoyo: true,
				repeat: -1
			}
		} );
	
	return tl;
}

gsap.to('.containe', {
	autoAlpha: 1,
	duration: 4,
	ease: 'none'
})

gtl.add(animateText())
	.seek(6)
	.play();