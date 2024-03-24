let text = document.getElementById("words");
let text2 = document.getElementById("scroll-down-div");
let center_screen = document.getElementById("center-screen");
let curtain_left = document.getElementById("curtain-left");
let curtain_right = document.getElementById("curtain-right");

window.addEventListener("scroll", () => {
    let value = window.scrollY;
    if(value >= 20) { 
        text2.style.display = 'none';
    } 
    if(value <= 20){
        text2.style.display = 'flex';
    }
    if(value <= 275){
        text.style.marginTop = value * 2.5 + 'px';
    }
    curtain_left.style.left = value * -.8+ 'px';
    curtain_right.style.left = value * .8 + 'px';
    center_screen.style.top = value * -1 + 'px';
})

