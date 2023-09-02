function Player(x, y) {
    var self = this
    this.x = x
    this.y = y
    this.direction = 0
    this.sprite
    this.speed = 5 //velocidad de x
    this.speedjump = 10
    this.jumping = false
    this.speedY = 1
    this.gravity = 1.1
    this.height = 50
    this.width = 50
    this.falling = true


    this.insertPlayer = function () { //Funcion para crear al jugador 
        var newPlayer = document.createElement("div")
        newPlayer.setAttribute("id", "player")
        newPlayer.style.left = this.x + "px"
        newPlayer.style.top = this.y + "px"
        this.sprite = newPlayer
        board.appendChild(this.sprite)

    }

    this.move = function () {
        self.x = self.x + self.speed * self.direction
        self.sprite.style.left = self.x + 'px'
        if (self.x < 1) {
            self.x = 500
        }
        else if (self.x > 500) {
            self.x = 0
        }
    }

    this.fall = function (platform) {
       
        if (
            self.y + self.height <= platform.y && // Colisión con la plataforma solo cuando el player se encuentra por encima del eje y
            self.x + self.width > platform.x && // Colisión con la plataforma
            self.x < platform.x + platform.widthP &&
            self.y + self.height + self.speedY >= platform.y // Colisión con la plataforma en la siguiente posición para que no se pase tuvimos que añadir la velocidad
           
        ) {
            self.y = platform.y - self.height;
            
            self.falling = false;
        } else {
            self.falling = true;
        }
    console.log(self.y)

        if (self.falling === true) {

            var nextY = self.y + self.speedY + self.height // Calculamos la siguiente posicion para que le de tiempo a parar
            if (nextY < 800 && self.speed < 20) {
                self.speedY *= self.gravity 
                self.y = self.y + self.speedY

            } else if (nextY < 900) {
                self.speedY = 20
                self.y = self.y + self.speedY
            }
            else {
                self.y = 850
            }
            self.sprite.style.top = self.y + 'px'
        }
    }

    /*  this.jump = function() {
         self.jumping =true
         if (self.jumping === true){
         self.y = self.y + self.speedjump * self.direction
         self.sprite.style.top = self.y + 'px'
         self.jumping = false
     }   
     }
 
     this.stopJump = function() {
         self.jumping =false 
     } */


}

export { Player }