export default{
    datos: (localStorage.getItem("datos")) ? JSON.parse(localStorage.getItem("datos")) : [],
}