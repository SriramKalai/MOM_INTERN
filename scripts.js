// let productContainer = document.querySelector('.product-section');
// let pre = document.getElementById('pre');
// let next = document.getElementById('next');

// next.addEventListener("click", () => {
//   productContainer.style.scrollBehavior="smooth";
//   productContainer.scrollLeft+=340;
// });

// pre.addEventListener("click", () => {
//   productContainer.style.scrollBehavior="smooth";
//   productContainer.scrollLeft-=340;
// });

// const slider =document.querySelector('.product-container');
// let isDown=false;
// let startX;
// let left;

// slider.addEventListener("mousedown",(e)=>{
//   isDown=True;
//   slider.classList.add('active');
//   startX=e.pageX-slider.offsetLeft;
//   left=slider.left;
// });
// slider.addEventListener("mouseleave",()=>{
//   isDown=false;
//   slider.classList.remove('active');
// });
// slider.addEventListener("mouseup",()=>{
//   isDown=false;
//   slider.classList.remove('active');
// });
// slider.addEventListener("mousemove",(e)=>{
//   if(!isDown) return;
//   e.preventDefault();
//   const x=e.pageX-slider.offsetLeft;
//   const walk=(x -startX)*3;
//   slider.left=left-walk;
  
// });