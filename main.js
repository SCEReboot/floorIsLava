import { Player } from "./player.js"
import { Platform } from "./platform.js"

var board = document.getElementById("board")
var firstplatform = new Platform(260,700)
var player1 = new Player(274, 5);
 
var platforms = []

firstplatform.insertPlatform()

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
    
  }
  

function loop () {
      for (let i = 0; i < platforms.length; i++) {
        platforms[i].fallplatform();
    }
    
}

var timerId 
var timerId2
function start () {
    timerId = setInterval(loop,22)
    timerId2 = setInterval(createplatform,1500)
}



start()



