import paises from "./components/paises.js";
import buscador from "./components/buscador.js";

let listElements = document.querySelectorAll('.list__button--click');

listElements.forEach(listElement => {
    listElement.addEventListener('click', ()=>{
        listElement.classList.toggle('arrow')
        let height = 0;
        let menu = listElement.nextElementSibling;
        if(menu.clientHeight == "0"){
            height = menu.scrollHeight;
        }
        menu.style.height = `${height}px`
    })
})

paises.mostrar()
buscador.buscador()