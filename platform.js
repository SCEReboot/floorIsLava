
function Platform (x,y,platforms){
    var self = this
    this.x = x
    this.y = y
    this.sprite
    this.heightP = 20
    this.widthP = 100 
    this.speedY = 2

    this.insertPlatform = function () { //Funcion para crear  plataforma 
    var newPlatform = document.createElement("div")
    newPlatform.setAttribute("class", "platform")
    newPlatform.style.left = this.x + "px"
    newPlatform.style.top = this.y + "px"
    this.sprite = newPlatform
    board.appendChild(this.sprite)

    }

   this.fallplatform = function () {
    if (self.y < 880 ) {
        
        self.y = self.y + self.speedY
        self.sprite.style.top = self.y + 'px' 
   }else {
    self.sprite.remove();
    platforms.shift()
   }
}




}


export { Platform }