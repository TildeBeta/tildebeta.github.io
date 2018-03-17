skeleton = document.getElementById("skeleton");

var skeletons = [skeleton];

skeleton.style.left = screen.width  / 2;
skeleton.style.top  = screen.height / 2;
skeleton.dirx =  1;
skeleton.diry = -1;


function move() {
    for (var i = 0; i < skeletons.length; i++) {
        var position = skeletons[i].getBoundingClientRect();

        posx = position.x + skeletons[i].offsetWidth;
        posy = position.y + skeletons[i].offsetHeight;

        if (posx >= window.innerWidth || position.x <= 0) {
            skeletons[i].dirx *= -1;
        }
        if (posy >= window.innerHeight || position.y <= 0) {
            skeletons[i].diry *= -1;
        }

        skeletons[i].style.left = (position.x + skeletons[i].dirx);
        skeletons[i].style.top  = (position.y + skeletons[i].diry);
    }
}

function makeSkeleton() {
    var new_skeleton = skeletons[0].cloneNode(true);

    var num1 = Math.floor(Math.random() * ((window.innerWidth  - 300) - 300 + 1) + 300);
    var num2 = Math.floor(Math.random() * ((window.innerHeight - 300) - 300 + 1) + 300);

    new_skeleton.style.left = num1;
    new_skeleton.style.top  = num2;
    new_skeleton.dirx = Math.random() < 0.5 ? 1 : -1;
    new_skeleton.diry = Math.random() < 0.5 ? 1 : -1;
    document.body.appendChild(new_skeleton);

    skeletons.push(new_skeleton);
}

setInterval(move, 1);
