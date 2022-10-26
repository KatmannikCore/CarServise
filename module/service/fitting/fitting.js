window.addEventListener('scroll', function() {
    console.log(window.scrollY)
    if(window.scrollY > 200){
        this.document.querySelector('.switch_services').classList.add('switch_services_active') 
    }
    if(window.scrollY < 200){
        this.document.querySelector('.switch_services').classList.remove('switch_services_active') 
    }
});
function openModalContacts(){
    document.querySelector('.modal_wrapper').hidden = false;
    document.querySelector('.bacround').hidden = false;
}
document.querySelector('.close').addEventListener('click', fiddenModal)
document.querySelector('.bacround').addEventListener('click', fiddenModal)
function fiddenModal(){
    document.querySelector('.modal_wrapper').hidden = true;
    document.querySelector('.bacround').hidden = true;
}
document.querySelector('.toggle_menu').addEventListener('click', ()=>{
    document.querySelector('.nav').classList.toggle('open_menu')
    document.querySelectorAll('.nav > ul > li ').forEach(item => item.classList.toggle('open_li'))
})
document.querySelectorAll(".switch_services a").forEach(element => element.addEventListener('click', function(e){
    if (e.currentTarget.id == 1){
        document.location.href="/module/service/fitting/fitting.htm";
    }else{
        localStorage.setItem('service_index', e.currentTarget.id);
        document.location.href="/module/service/service.html";
    }
}) );