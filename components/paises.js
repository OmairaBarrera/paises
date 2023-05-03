import config from "../storage/config.js";
export default{
    data: config.datos,
    datos(){
        if (config.datos.length == 0){
            this.datosPaises()
        } else{
            console.log(config);
            this.mostrar();
        }
    },
    mostrar(){
        const ws = new Worker("../storage/wsPaises.js", {type:"module"}); 
        ws.postMessage({module:"paisesDibujar", data: this.data});
        ws.addEventListener("message", (e)=>{
            let doc = new DOMParser().parseFromString(e.data, "text/html");
            document.querySelector('.paises').append(...doc.body.children);
            ws.terminate();
        });
    },
    async datosPaises(){
        try {
            let response = await fetch('https://restcountries.com/v3.1/all')
            let data = await response.json();
            localStorage.setItem('datos', JSON.stringify(data))
        } catch (error) {
            console.log(error)
        }
    }
}