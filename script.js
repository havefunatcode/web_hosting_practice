let character = document.getElementById("character");
let moveBy = 30;
 
window.addEventListener('load', () => {
    character.style.position = 'relative';
    character.style.left = 0;
    character.style.top = 0;
});
 
 
window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            character.style.left = parseInt(character.style.left) - moveBy + 'px';
            break;
        case 'ArrowRight':
            character.style.left = parseInt(character.style.left) + moveBy + 'px';
            break;
        case 'ArrowUp':
            character.style.top = parseInt(character.style.top) - moveBy + 'px';
            break;
        case 'ArrowDown':
            character.style.top = parseInt(character.style.top) + moveBy + 'px';
            break;
    }
});