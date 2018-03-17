var player = document.getElementById("audio");
var previous = null;

var next_button = document.getElementById("next");
next_button.onclick = next;

var nowplaying = document.getElementById("nowplaying");

var dumbguard = false;


var songlist = [
    ["/assets/audio/BatCountry.mp3", "Avenged Sevenfold - Bat Country"],
    ["/assets/audio/LakeBodom.mp3",  "Children of Bodom - Lake Bodom" ],
    ["/assets/audio/Megitsune.mp3",  "Babymetal - Megitsune"          ],
];

function next() {
    if (dumbguard) {
        makeSkeleton();
    } else {
        dumbguard = true;
    }

    do {
        var next_song = songlist[Math.floor(Math.random() * songlist.length)];
    } while (next_song === previous);

    play(next_song);
}


function play(song) {
    previous = song;

    nowplaying.innerText = "Now playing: " + song[1];

    player.setAttribute("src", song[0]);
    player.load();
    player.play();
    player.addEventListener("ended", next);
}

window.onload = next;
