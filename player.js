function Player(x, y) {
    var self = this
    this.x = x
    this.y = y
    this.direction = 0
    this.sprite
    this.speed = 60
    this.speedjump = 80
    this.jumping = false


    this.insertPlayer = function () {
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
    }   
    this.jump = function() {
        self.y = self.y + self.speedjump * self.direction
        self.sprite.style.top = self.y + 'px'
        self.jumping = true
    }
    this.stopJump = function() {
        self.jumping =false 
        
    }
}

export {Player}