var board = document.getElementById("board")
var player1 = new Player(250,800);

function Player (x,y){
    this.x = x
    this.y = y 
    this.sprite


this.insertPlayer = function( ){
 var newPlayer = document.createElement("div")
 newPlayer.setAttribute("id","player")
 newPlayer.style.left = this.x + "px"
 newPlayer.style.top = this.y + "px"
this.sprite = newPlayer
board.appendChild(this.sprite)

}}

player1.insertPlayer()