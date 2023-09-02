import { Player } from "./player.js"
import { Platform } from "./platform.js"

var board = document.getElementById("board")

var player1 = new Player(200, 5);
 
var platforms = []


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


function createplatform() {
  

    var xRandom = Math.floor(Math.random() * 10) * 55   // versión arcade
    var platform = new Platform(xRandom,0,platforms)
    platform.insertPlatform()
    platforms.push(platform)
    console.log(platform)
  }
  

function loop () {
    player1.move()
    for (let i = 0; i < platforms.length; i++) {
    player1.fall(platforms[i])}
    //platforms[0].fallplatform()
    for (let i = 0; i < platforms.length; i++) {
        platforms[i].fallplatform();
    }
    
}

var timerId 
function start () {
    timerId = setInterval(loop,30)
    timerId2 = setInterval(createplatform,1500)
}



start()



