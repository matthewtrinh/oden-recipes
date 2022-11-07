$('#flipbook').turn({
    width: 1200,
    height: 800,
    page: 1,
    duration: 1200,
    autoCenter: true,
    gradients: true,
    acceleration: false,
})

$(window).bind('keydown', function(e) {
    if (e.keyCode === 37)
        $('#flipbook').turn('previous');

    else if (e.keyCode === 39)
        $('#flipbook').turn('next');

});

const toc_steak1 = document.querySelectorAll(`.turn-p2`);
toc_steak1.forEach(toc => toc.addEventListener('click', () => $('#flipbook').turn('next')));

const toc_steak2 = document.querySelectorAll(`.turn-p4`);
toc_steak2.forEach(toc => toc.addEventListener('click', () => $('#flipbook').turn('next').turn('next')));

const toc_steak3 = document.querySelectorAll(`.turn-p6`);
toc_steak3.forEach(toc => toc.addEventListener('click', () => $('#flipbook').turn('next').turn('next').turn('next')));