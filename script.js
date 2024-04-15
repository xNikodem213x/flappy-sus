

function losowanie() {
    const random = -((Math.random() * 400) +200);
    hole.style.top = random + 'px';
}
hole.addEventListener('animationiteration',losowanie);
