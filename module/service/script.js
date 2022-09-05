function openModalContacts(){
    document.querySelector('.modal_wrapper').hidden = false;
    document.querySelector('.bacround').hidden = false;
}
document.querySelector('.close').addEventListener('click', fiddenModal)
document.querySelector('.bacround').addEventListener('click', fiddenModal)
function fiddenModal(){
    document.querySelector('.bacround').hidden = true;
    document.querySelector('.modal_wrapper').hidden = true;
}
document.querySelectorAll('.nav a').forEach(item => item.addEventListener('click', () => document.querySelector('.nav_menu').classList.toggle('open_menu')))
document.querySelector('.toggle_menu').addEventListener('click', ()=>{
    document.querySelector('.nav_menu').classList.toggle('open_menu')
    document.querySelectorAll('.nav > ul > li ').forEach(item => item.classList.toggle('open_li'))
})
document.querySelector('.show_services > div ').addEventListener('click', () =>{
    document.querySelector('.switch_services').classList.toggle('switch_services_open')
})