let wsPaises = {
    async paisesDibujar(data){
        let plantilla = "";
        data.forEach((val,id)=>{
            plantilla += `
                <div class="slide-container">
                    <div class="slide-content">
                        <div class="card-wrapper">
                            <div class="card">
                                <div class="image-content">
                                    <span class="overlay"></span>
                                    <div class="card-image">
                                        <img src="${val.flags.png}" alt="" class="card-img">
                                    </div>
                                    <div class="card-content">
                                        <h3 class="name">${val.name.common}</h3>
                                        <p class="region">${val.region}</p>
                                        <p class="poblacion">${val.population}</p>
                                        <p class="idioma">${val.capital}</p> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
        });
        return plantilla;
    }
}
self.addEventListener("message", async(e)=>{
    postMessage(await wsPaises[`${e.data.module}`](e.data.data));
})