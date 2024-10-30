function playMusic(song) {
    const audioPlayer = document.getElementById('audio-player');
    audioPlayer.src = song;
    audioPlayer.play();
}
