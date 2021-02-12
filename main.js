const NavigationBar = document.querySelector('#NavigationBar')

const btnSwitch = document.querySelector('#Switch');

const NavigationElement = document.querySelectorAll('#NavigationElement');

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
    NavigationBar.classList.toggle('active');
    
    //Se traen todos los elementos de la barra de navegacion para el cambio de color en el cambio de modo
    NavigationElement.forEach(NavigationElement => {
        NavigationElement.classList.toggle('active');
    });
})



//Script Animacion de tipeo
var typed = new Typed(".typing", {
    strings: ["Desarrollador", "Desarrollador", "Estudiante de sistemas", "Apasionado"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})