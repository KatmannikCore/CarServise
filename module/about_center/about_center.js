// window.addEventListener('scroll', function() {
//     console.log(window.scrollY)
//     if(window.scrollY > 200){
//         this.document.querySelector('.switch_services').classList.add('switch_services_active') 
//     }
//     if(window.scrollY < 200){
//         this.document.querySelector('.switch_services').classList.remove('switch_services_active') 
//     }
// });
function openModalContacts(){
    document.querySelector('.modal_wrapper').hidden = false;
    document.querySelector('.bacround').hidden = false;
    document.querySelector('.modal_window').hidden = false;
}
document.querySelector('.close').addEventListener('click', fiddenModal)
document.querySelector('.order_wrapper .close').addEventListener('click', fiddenModal)  
document.querySelector('.bacround').addEventListener('click', fiddenModal)
function fiddenModal(){
    document.querySelector('.bacround').hidden = true;
    document.querySelector('.modal_wrapper').hidden = true;
    document.querySelector('.order_wrapper').hidden = true;
}
document.querySelectorAll('.nav a').forEach(item => item.addEventListener('click', () => document.querySelector('.nav').classList.toggle('open_menu')))
document.querySelector('.toggle_menu').addEventListener('click', ()=>{
    document.querySelector('.nav').classList.toggle('open_menu')
    document.querySelectorAll('.nav > ul > li ').forEach(item => item.classList.toggle('open_li'))
})
function openOrderContacts(){
    document.querySelector('.bacround').hidden = false;
    document.querySelector('.order_wrapper').hidden = false;
    
}