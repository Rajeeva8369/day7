function reduceOpacity() {
    square.style.opacity = 0.5;
}
function resetOpacity() {
    square.style.opacity = 1;
}
const square = document.getElementById('square');
square.addEventListener('mouseenter', reduceOpacity); 
square.addEventListener('mouseleave', resetOpacity);
