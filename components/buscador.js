export default{
    buscador(){
        document.addEventListener("keyup", (e)=>{
            if(e.target.matches("#search")){
                document.querySelectorAll('.slide-container').forEach(pais=>{
                    pais.textContent.toLowerCase().includes(e.target.value.toLowerCase()) 
                    ? pais.classList.remove('filtro')
                    : pais.classList.add('filtro')
                })
            }
        });
    }
}