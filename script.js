const character = document.getElementById("sus")
let jumping = 0;

function losowanie() {
    const random = -((Math.random() * 400) +200);
    hole.style.top = random + 'px';
}
hole.addEventListener('animationiteration', losowanie);
setInterval(function () {
    const characterTop =
    parseInt(window.getComputedStyle(sus).getPropertyValue("top"));
    if (jumping === 0) {
        character.style.top = (characterTop + 1) +"px;"
    };
}, 10);
function jump() {
    jumping = 1;
    let jumpcout = 0;
}