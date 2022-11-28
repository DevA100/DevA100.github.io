const hamburgerbutton =document.getElementById('hamburger')
const navlist=document.getElementById('nav-list')

function togglebutton() {
    navlist.classList.toggle('show')
}     

hamburgerbutton.addEventListener('click', togglebutton)

// function myFunction() {
//    var element = document.body;
//    element.classList.toggle("dark-mode");
// }

const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change',()=>{document.body.classList.toggle('white');});
checkbox.addEventListener('change',()=>{
    document.getElementById('KnowMe'). classList.toggle('bgblack');
    document.getElementById('KnowMe'). classList.toggle('bgwhite');
    document.getElementById('sec'). classList.toggle('bgblue');
    document.getElementById('sec'). classList.toggle('bgblack');
});
  
 const splash = document.querySelector('.splash');

 document.addEventListener('DOMContentLoaded', (e) =>{
    setTimeout(()=>{
        splash.classList.add('display-none');
    }, 2000);
 })