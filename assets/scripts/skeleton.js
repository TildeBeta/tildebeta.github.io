skeleton = document.getElementById("skeleton");


skeleton.style.left = screen.width  / 2;
skeleton.style.top  = screen.height / 2;

var dirx = 1;
var diry = -1;

function move() {
    var position = skeleton.getBoundingClientRect();

    posx = position.x + skeleton.offsetWidth;
    posy = position.y + skeleton.offsetHeight;

    console.log(screen.width);
    console.log(posx);

    if (posx >= window.innerWidth || position.x <= 0) {
        dirx = dirx * -1;
    }
    if (posy >= window.innerHeight || position.y <= 0) {
        diry = diry * -1;
    }

    skeleton.style.left = (position.x + dirx);
    skeleton.style.top  = (position.y + diry);
}

setInterval(move, 1);
