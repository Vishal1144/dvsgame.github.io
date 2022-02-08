score = 0;
cross = true;

audio = new Audio('music.mp3');
audiogo = new Audio('Gameover.wav');
setTimeout(() => {
    audio.play()
}, 1000);
document.onkeydown = function (e) {
    console.log("Key code is: ", e.keyCode)
    if (e.keyCode == 38) {
        oggy = document.querySelector('.oggy');
        oggy.classList.add('animateoggy');
        setTimeout(() => {
            dino.classList.remove('animateoggy')
        }, 700);
    }
    if (e.keyCode == 39) {
        oggy = document.querySelector('.oggy');
        oggyX = parseInt(window.getComputedStyle(oggy, null).getPropertyValue('left'));
        oggy.style.left = oggyX + 112 + "px";
    }
    if (e.keyCode == 37) {
        oggy = document.querySelector('.oggy');
        oggyX = parseInt(window.getComputedStyle(oggy, null).getPropertyValue('left'));
        oggy.style.left = (oggyX - 112) + "px";
    }
}

setInterval(() => {
    oggy = document.querySelector('.oggy');
    gameOver = document.querySelector('.gameOver');
    mark = document.querySelector('.mark');

    ox = parseInt(window.getComputedStyle(oggy, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(oggy, null).getPropertyValue('top'));

    mx = parseInt(window.getComputedStyle(mark, null).getPropertyValue('left'));
    my = parseInt(window.getComputedStyle(mark, null).getPropertyValue('top'));

    offsetX = Math.abs(ox - mx);
    offsetY = Math.abs(oy - my);
    // console.log(offsetX, offsetY)
    if (offsetX < 73 && offsetY < 52) {
        gameOver.innerHTML = "Game Over - Reload to Play Again"
        mark.classList.remove('markAni')
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);
    }
    else if (offsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(mark, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            mark.style.animationDuration = newDur + 's';
            console.log('New animation duration: ', newDur)
        }, 500);

    }

}, 10);

function updateScore(score) {
    scoreCont.innerHTML = "Your Score: " + score
}