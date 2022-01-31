import {CreateMenu} from "../../js/headerMenu.js";
import { data_services } from "../../js/config/config_table.js";
document.querySelector('header').append(CreateMenu());
function CreateTable(){
    let arrayService = [];
    Object.keys(data_services).forEach(key => {
        arrayService.push({
            services: data_services[key].services,
            name: key
        })
    });
    return arrayService[localStorage.service_index].services.map(item =>{
        let tr = document.createElement("tr");
        tr.innerHTML = `<td>${item.name}</td> <td class='price' >${item.prise}</td>`
        return tr
    } )
}

let table = document.querySelector('tbody');
CreateTable().forEach(item => {table.append(item)})