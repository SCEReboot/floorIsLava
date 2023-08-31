import {Player} from "./player.js"
var board = document.getElementById("board")
var player1 = new Player(250, 800);

if(player1.jumping === true){
    player1.stopJump
    clearInterval(timerId)
}

window.addEventListener('keydown', function (e) {
    switch (e.key) {
        case 'a':
            player1.direction = -1
            player1.move()
            break
        case 'd':
            player1.direction = 1
            player1.move()
            break
        case 'w':
            player1.direction = -1
            player1.jump()    
            break
            
    
}})



/*  window.addEventListener('keydown', function (event) {
    if (event.key === 'w') {
        player1.direction
    } player1.jump()
})  */

window.addEventListener("keyup", function(e){
    if(e.key === 'a' || e.key ==='d') {
        player1.direction = 0    

    }})
    



 

player1.insertPlayer()

