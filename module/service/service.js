import {CreateMenu} from "../../js/headerMenu.js";
import { data_services } from "../../js/config/config_table.js";
document.body.prepend(CreateMenu());
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

let table = document.querySelector('tbody');
CreateTable().forEach(item => {table.append(item)})