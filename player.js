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
    this.gravity = 1.05
    this.height = 50
    this.width = 50
    this.falling = true
    this.onPlatform = true

    this.insertPlayer = function () { //Funcion para crear al jugador 
        var newPlayer = document.createElement("div")
        newPlayer.setAttribute("id", "player")
        newPlayer.style.left = this.x + "px"
        newPlayer.style.top = this.y + "px"
        this.sprite = newPlayer
        board.appendChild(this.sprite)

    }

    this.moveX = function () {
        self.x = self.x + self.speed * self.direction
        self.sprite.style.left = self.x + 'px'
        if (self.x < 1) {
            self.x = 500
        }
        else if (self.x > 500) {
            self.x = 0
        }
    }

    this.moveY = function () {
        console.log(self.falling)


        if (self.jumping === false) {
            console.log("cualquier cosa")
            self.fall()
        } else {
            console.log("cualquier cosa 3")
            self.jump()
        }
    }

    this.jump = function () {
        
        if (self.speedY < -3) {
            self.speedY *= 0.91
            self.y = self.y + self.speedY
            self.sprite.style.top = self.y + 'px'
        }
        else { 
            self.jumping = false
            self.falling = true
            self.speedY = 2
        }

    }

    this.collision = function (platforms) {
        // platforms.forEach(platform => {
        for (let i = 0; i < platforms.length; i++) {

            if (
                self.falling === true &&
                self.y + self.height + self.speedY >= platforms[i].y && // Colisión con la plataforma solo cuando el player se encuentra por encima del eje y
                self.x + self.width > platforms[i].x && // Colisión con la plataforma
                self.x < platforms[i].x + platforms[i].widthP &&
                self.y + self.height <= platforms[i].y + 1 &&
                self.speedY >= 0 // Colisión con la plataforma en la siguiente posición para que no se pase tuvimos que añadir la velocidad
            ) {
                self.onPlatform = true
                self.speedY = 2
                self.falling = false;
                self.y = platforms[i].y - self.height
            } else {
                self.falling = true;
                self.platforms = false
            }
        }
    }

    this.fall = function () {

        if (self.falling === true) {

            var nextY = self.y + self.speedY + self.height // Calculamos la siguiente posicion para que le de tiempo a parar
            if (nextY < 900 && self.speedY < 20) {
                self.speedY *= self.gravity ** 2
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
}

export { Player }