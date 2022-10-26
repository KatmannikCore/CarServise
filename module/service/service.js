
import { data_services } from "../../js/config/config_table.js";
function CreateTable(){
    let arrayService = [];
    let nameService = '';
    Object.keys(data_services).forEach(key => {
        arrayService.push({
            services: data_services[key].services,
            name: key
        })
    });

    if(nameService === '')
        nameService = arrayService[localStorage.service_index].name
        console.log(nameService)
    document.querySelector('.name_service').textContent = nameService
    
    return arrayService[localStorage.service_index].services.map(item =>{
        let tr = document.createElement("tr");
        tr.innerHTML = `<td>${item.name}</td> <td class='price' >${item.prise}</td>`
        return tr
    } )
} 
async function formSend(){
    let form = document.querySelector('.order form')
    let formData = new FormData(form)
    let response = await fetch('sendmail.php',{
        method: 'POST',
        body: formData
    })
    if(response.ok){
        let result = await response.json()
        alert(result.message)
        form.reset();
    }
}
FormData

let table = document.querySelector('tbody');
CreateTable().forEach(item => {table.append(item)})

document.querySelectorAll(".switch_services a").forEach(element => element.addEventListener('click', function(e){
    if (e.currentTarget.id == 1){
        document.location.href="/module/service/fitting/fitting.htm";
    }else{
        localStorage.setItem('service_index', e.currentTarget.id);
        document.location.href="/module/service/service.html";
    }
}) );

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
