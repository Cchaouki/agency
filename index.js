let  awards= document.querySelector(".awards")
let gg=document.querySelectorAll(".anim")
let skip=false;

window.onscroll=function (){
  if(window.scrollY>=awards.offsetTop-200)
  {if (!skip) {
    
  
    gg.forEach((e) => {
      tre(e)
    
    })}
    skip=true
    
  } 
  
  
} 



function tre(el){
 
   let data=el.dataset.count
   
  let inter= setInterval(() =>{
     
el.textContent++
if (el.textContent==data) {
     clearInterval(inter)
} 
     
   } ,2000 / data)
   
   
    
  
  
}
