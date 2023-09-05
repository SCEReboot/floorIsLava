function Player(x, y) {
    var self = this
    this.x = x
    this.y = y
    this.direction = 0
    this.sprite
    this.speed = 5 //velocidad de x
    this.speedjump = 10;
    this.jumping = false;
    this.speedY = 1
    this.gravity = 1
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

    this.fall = function (platforms) {
       
        if (
            self.y + self.height <= platforms.y && // Colisión con la plataforma solo cuando el player se encuentra por encima del eje y
            self.x + self.width > platforms.x && // Colisión con la plataforma
            self.x < platforms.x + platforms.widthP &&
            self.y + self.height + self.speedY >= platforms.y // Colisión con la plataforma en la siguiente posición para que no se pase tuvimos que añadir la velocidad
           
        ) {
            
            self.speedY = 2
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
    }}

export { Player }