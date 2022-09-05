
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
    console.log(arrayService[localStorage.service_index])
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