document.addEventListener('DOMContentLoaded', function() {
    const videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.addEventListener('canplay', function() {
        videoPlayer.play();
    });
});
