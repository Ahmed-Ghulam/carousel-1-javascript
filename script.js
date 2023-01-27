let index = 1;
function moveslideto(e) {
    showslide((index = e));
}
function arrowcontrol(e) {
    showslide((index += e));
}
function showslide(e) {
    const image = document.querySelectorAll("img");
    const indicator = document.querySelectorAll(".slider-indicators span");
    const content = document.querySelectorAll(".slider-content h3");


    e > image.length ? (index -= image.length) : null
    e < 1 ? (index = image.length) : null

    for (let img of image) {
        img.style.opacity = '0'
    }
    for (let ind of indicator) {
        ind.style.widht = '8px'
        ind.style.background = '#232323'
    }

    for (let con of content) {
        con.style.opacity = '0'
        con.style.transitionDlay = '.2s'
    }

    image[index - 1].style.opacity = '1'
    indicator[index - 1].style.widht = '20px'
    indicator[index - 1].style.background = '#ffff'

    content[index - 1].style.opacity = '1'
}
showslide()