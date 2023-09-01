function Player(x, y) {
    var self = this
    this.x = x
    this.y = y
    this.direction = 0
    this.sprite
    this.speed = 5
    this.speedjump = 10
    this.jumping = false
    this.speedY = 5
    this.gravity = 1.1
    


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
        if (self.x < 0.99)  {
            self.x = 499.99
    }  
        else if (self.x > 500){
            self.x = 0
        }
}

    this.fall = function () {
        if (self.y < 799.99){
            self.speedY*=self.gravity
            self.y = self.y + self.speedY
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