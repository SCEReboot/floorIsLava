import { Player } from "./player.js"
import { Platform } from "./platform.js"
var board = document.getElementById("board")
var player1 = new Player(200, 100);
var platform = new Platform(200,300)

platform.insertPlatform()
player1.insertPlayer()// Ejecutamos la funcion que crea al jugador

window.addEventListener('keydown', function (e) { //Cambiamos la direccion dependiendo de la tecla pulsada
    switch (e.key) {
        case 'a':
            player1.direction = -1
            break
        case 'd':
            player1.direction = 1
            
            break
                
        case 'w':
            player1.direction = -1
            break

    }
})



window.addEventListener("keyup", function (e) { //Quitamos direccion si dejamos de pulsar
    if (e.key === 'a' || e.key === 'd' || e.key === 'w') {
        player1.direction = 0

    }
})

function loop () {
    player1.move()
    player1.fall(platform)

    
}

var timerId 
function start () {
    timerId = setInterval(loop,30)
   
}

start()


