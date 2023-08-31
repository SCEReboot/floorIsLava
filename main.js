var board = document.getElementById("board")
var player1 = new Player(250, 800);

function Player(x, y) {
    this.x = x
    this.y = y
    this.direction = 0
    this.sprite


    this.insertPlayer = function () {
        var newPlayer = document.createElement("div")
        newPlayer.setAttribute("id", "player")
        newPlayer.style.left = this.x + "px"
        newPlayer.style.top = this.y + "px"
        this.sprite = newPlayer
        board.appendChild(this.sprite)

    }

    this.move = function () {
        this.x = this.x + 10 * this.direction
        this.sprite.style.left = this.x + 'px'
    }
}

window.addEventListener('keydown', function (e) {
    switch (e.key) {
        case 'a':
            player1.direction = -1
            break
        case 'd':
            player1.direction = 1
            break
    }
    player1.move()
})

player1.insertPlayer()


