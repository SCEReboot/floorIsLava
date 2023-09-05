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
    this.height = 30
    this.width = 30
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
            self.x = 570
        }
        else if (self.x > 571) {
            self.x = 2
        }
    }

    this.jump = function(platforms) {
        self.speedY -1
        self.Y = self.y - 200
        self.sprite.style.top = self.y + 'px'
        console.log(self.speedY)
        self.falling = true

    
        this.collision = function (platfomrs) {
        // s
        }
        
        if (!self.jumping) { // Verificar si no estamos ya en medio de un salto
            console.log("Estoy saltando");
            self.jumping = true; // Marcamos que estamos en medio de un salto
            let alturaSalto = 0;
            let saltoInterval = setInterval(function() {
                // Mueve el personaje hacia arriba (simulando un salto)
                alturaSalto += 5; // Puedes ajustar la altura del salto cambiando este valor
                self.sprite.style.bottom = alturaSalto + "px";
                
                if (alturaSalto >= 100) {
                    clearInterval(saltoInterval);
                    self.caer();
                }
            });
        }
    }

    this.caer = function() {
        if (self.jumping) { // Verificar si estamos en medio de un salto
            let caidaInterval = setInterval(function() {
                // Mueve el personaje hacia abajo (simulando la caída)
                let alturaActual = parseInt(self.sprite.style.bottom);
                if (alturaActual > 0) {
                    alturaActual -= 5; // Puedes ajustar la velocidad de caída cambiando este valor
                    self.sprite.style.bottom = alturaActual + "px";
                } else {
                    clearInterval(caidaInterval);
                    self.jumping = false; // Marcar que hemos terminado el salto
                }
            }, 20);
        }
    }

    this.moveY = function () {
      


        if (self.jumping === false) {
            
            self.fall()
        } else {
          
            self.jump()
        }
    }

    this.jump = function () {
       
        if (self.speedY < -3) {
            self.speedY *= 0.91
            self.y = self.y + self.speedY
            self.sprite.style.top = self.y + 'px'
            if (self.y < 0) {
                self.y = 0; // Limitar la posición Y mínima a 0
                self.speedY = 0; // Detener el salto cuando alcanza la parte superior
            }
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


        this.firstcollision = function (firstplatform) {
            if (
                self.falling === true &&
                self.y + self.height + self.speedY >= firstplatform.y && // Colisión con la plataforma solo cuando el player se encuentra por encima del eje y
                self.x + self.width > firstplatform.x && // Colisión con la plataforma
                self.x < firstplatform.x + firstplatform.widthP &&
                self.y + self.height <= firstplatform.y + 1 &&
                self.speedY >= 0 // Colisión con la plataforma en la siguiente posición para que no se pase tuvimos que añadir la velocidad
            ) {
                self.onPlatform = true;
                self.speedY = 0; // Detener la velocidad vertical (caída)
                self.falling = false;
                self.y = firstplatform.y - self.height; // Alinear el jugador justo encima de la plataforma
            } else {
                self.falling = true;
                self.onPlatform = false; // El jugador no está en la plataforma
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