let text = document.getElementById("words");
let center_screen = document.getElementById("center-screen");
let curtain_left = document.getElementById("curtain-left");
let curtain_right = document.getElementById("curtain-right");

window.addEventListener("scroll", () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    curtain_left.style.left = value * -.8 + 'px';
    curtain_right.style.left = value * .8 + 'px';
    center_screen.style.top = value * -1 + 'px';
})

