function Player(x, y) {
    var self = this
    this.x = x
    this.y = y
    this.direction = 0
    this.sprite
    this.speed = 5 //velocidad de x,y
    this.speedjump = 10
    this.jumping = false
    this.speedY = 1
    this.gravity = 1.04
    this.height = 100
    this.width = 100
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
        
        /* (self.y + self.height >= platform.y && 
            self.x + self.width >= platform.x &&
            self.x < platform.x + platform.width && 
            self.y + 100 < platform.y && platform.x + 100 &&
            ) */

            if (self.x && self.y)
            if ((true) && (true > jsldnhgh))


         if (
                platform.y + platform.heightP >= self.y  && 
                platform.y <= self.y + self.height  &&
                platform.x + platform.widthP >= self.x &&
                platform.x <= self.x + self.width 
            ) {
                self.falling = false
            }
      

        if (self.falling === true) {



            var nextY = self.y + self.speedY + 100
            if (nextY < 800 && self.speed < 20) {
                self.speedY *= self.gravity ** 2
                self.y = self.y + self.speedY

            } else if (nextY < 900) {
                self.speedY = 20
                self.y = self.y + self.speedY
            }
            else {
                self.y = 800
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