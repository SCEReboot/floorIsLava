
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


   this.fallplatform = function () {
    if (self.y < 880 ) {
        
        self.y = self.y + self.speedY
        self.sprite.style.top = self.y + 'px' 
   }
   
}




}


export { Platform }