const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

// saltos infinitos del dino
function jump(){
    // evitar que vuelva a salta cuando está arriba
    if (dino.classList != "jump"){
        dino.classList.add("jump");
    
        // reseteo del salto para poder hacerlo infinito
        setTimeout(function () {
            dino.classList.remove("jump");
        }, 300);
    }
}

// funcion para detectar si chocan
let isAlave = setInterval(function () {
    
    // obetenr la posicion en Y del dino
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

    //obtener la posicion en X del cactus
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    //detectar la colision
    if (cactusLeft <50 && cactusLeft > 0 && dinoTop >= 140) {

    //colision
        alert("Game Over");
    }
}, 10);

// salto cada vez que se pulsa una tecla
document.addEventListener("keydown", function (event){
    jump();
})