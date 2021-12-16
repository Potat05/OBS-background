

// Give transitions & blur to the top and bottom elements
document.querySelectorAll('.background > video').forEach(video => {
    video.style.transition = `opacity ${settings.transition_time_ms}ms ease-in-out`;
});

document.querySelector('.background').style.filter = `blur(${settings.background_blur}px)`;


// Start video on click
document.addEventListener('click', () => {
    document.querySelector('.top').play();
});



let current_background = -1;

function setRandomBackground() {

    // Get a random background
    do {
        var new_background = Math.floor(Math.random() * settings.backgrounds.length);
    } while(new_background == current_background);
    current_background = new_background;


    // Get top & bottom elements
    const top = document.querySelector('.top');
    const bottom = document.querySelector('.bottom');

    // Set new bg
    const bg = settings.backgrounds[current_background];
    bottom.setAttribute('src', bg.file);
    bottom.setAttribute('type', `video/${bg.file.split('.').pop()}`);

    // Wait till image is loaded to start transition
    bottom.onloadeddata = () => {
        if(bottom.readyState < 3) return;
        top.classList.remove('top');
        top.classList.add('bottom');
        bottom.classList.remove('bottom');
        bottom.classList.add('top');

        bottom.play();
        bottom.volume = bg.volume || 1;
        // Remove old bg to save resources (I think this helps)
        setTimeout(() => {
            top.pause();
            top.removeAttribute('src');
            changing = false;
        }, settings.transition_time_ms);
    }

}


const checkEndInterval = 100;
let changing = false;

setInterval(() => {
    if(changing) return;

    const top = document.querySelector('.top');

    if(top.currentTime >= top.duration - settings.time_before_next*0.001) {
        changing = true;
        setRandomBackground();
    }

}, checkEndInterval)


setRandomBackground();