var player = document.getElementById("audio");


function next() {
    var songlist = [
        "/assets/audio/BatCountry.mp3",
        "/assets/audio/LakeBodom.mp3"
    ];
    var next_song = songlist[Math.floor(Math.random() * songlist.length)];
    // TODO prevent choosing the same song?
    play(next_song);
}


function play(name) {
    player.setAttribute("src", name);
    player.load();
    player.play();
    player.addEventListener("ended", next);
}

window.onload = next;
