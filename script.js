const header=document.getElementById('siteHeader');
window.addEventListener('scroll',()=>header.classList.toggle('solid',window.scrollY>40),{passive:true});

const revealEls=document.querySelectorAll('.reveal');
const io=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
},{threshold:.14});
revealEls.forEach(el=>io.observe(el));

const toggle=document.querySelector('.nav-toggle');
const menu=document.getElementById('mobileMenu');
toggle?.addEventListener('click',()=>menu.classList.toggle('open'));
menu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));
