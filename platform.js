console.log('hola')
function Platform (x,y){
    this.x = x
    this.y = y
    this.sprite
    this.heightP = 20
    this.widthP = 100 

    this.insertPlatform = function () { //Funcion para crear  plataforma 
    var newPlatform = document.createElement("div")
    newPlatform.setAttribute("id", "platform")
    newPlatform.style.left = this.x + "px"
    newPlatform.style.top = this.y + "px"
    this.sprite = newPlatform
    board.appendChild(this.sprite)

    }

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