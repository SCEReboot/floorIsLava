console.log('hola')
function Platform (x,y){
    var self = this
    this.x = x
    this.y = y
    this.sprite
    this.heightP = 20
    this.widthP = 100 
    this.speedY = 3.5

    this.insertPlatform = function () { //Funcion para crear  plataforma 
    var newPlatform = document.createElement("div")
    newPlatform.setAttribute("id", "platform")
    newPlatform.style.left = this.x + "px"
    newPlatform.style.top = this.y + "px"
    this.sprite = newPlatform
    board.appendChild(this.sprite)

    }

    this.movePlatform = function () {
        self.y += self.speedY
        self.sprite.style.top = self.y +'px'

    }     
       
    this.timerId = setInterval(this.movePlatform, 50)


    this.checkCollision = function() {
       if(
        this.y + this.heightP <= player1.y &&
        this.y <= player1.y + player1.height &&
        this.x + this.widthP >= player1.x &&
        this.x <= player1.x + player1.widthP
       )
       console.log('out') 
    }
}



export { Platform }