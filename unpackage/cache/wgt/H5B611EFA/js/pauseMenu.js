document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('show-pause-menu').addEventListener('click', togglePauseMenu);
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') { // Toggle menu with 'Escape' key
            togglePauseMenu();
        }
    });
});

function togglePauseMenu() {
    const pauseMenu = document.getElementById('pause-menu');
    if (pauseMenu.style.display === 'none' || pauseMenu.style.display === '') {
        pauseMenu.style.display = 'block'; // Show the menu
    } else {
        pauseMenu.style.display = 'none'; // Hide the menu
    }
}


let condition = true;

function play_music()
{
    
    const music_player = document.getElementById("music-player");
    const music_button = document.getElementById("music_button");
    if (condition == true )
    {
        music_player.play();
        condition = false;
    }
    else{
        music_player.pause();
        condition = true;
       

    }
    
}

function handleLogout() {
    localStorage.clear();
    window.location.href = '../index.html';
}