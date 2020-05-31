//Vars
const toggle = document.getElementById('toogle');
const clsBtn = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');

//Navigation
toggle.addEventListener('click', () => document.body.classList.toggle('show-nav'));

// Showing modal window
open.addEventListener('click', ()=> modal.classList.add('show-modal'));

// Hiding modal window
clsBtn.addEventListener('click', ()=> modal.classList.remove('show-modal'));
 
// Outside click for hiding
window.addEventListener('click', e=>e.target == modal ? modal.classList.remove('show-modal') : false);




