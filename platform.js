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
      
       console.log('out') 
    }
}



export { Platform }