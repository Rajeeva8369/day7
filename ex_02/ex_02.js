let currentRotation = 0;
function rotateCircle(step) {
    const circle = document.getElementById('circle');
      currentRotation += step;
 circle.style.transform = `rotate(${currentRotation}deg)`;
}
document.querySelectorAll('.rotate-button').forEach(button =>
    button.addEventListener('click', () => rotateCircle(parseInt(button.value)))
);
