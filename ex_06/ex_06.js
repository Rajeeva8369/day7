document.addEventListener('DOMContentLoaded', () => {
    const robot = document.getElementById('robot');
    const speechBubble = document.getElementById('speech-bubble');
    const screenText = document.getElementById('screen-text');
    const inputField = document.getElementById('robot-input');
    const leftIris = document.querySelector('.eye-left-iris');
    const rightIris = document.querySelector('.eye-right-iris');
    let eyeClickCount = 0;
    const showTempMessage = (element, message, duration = 2000, defaultMessage = "Hello !") => {
        element.textContent = message;
        setTimeout(() => element.textContent = defaultMessage, duration);
    };
    const getRandomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16);

    const handleEyeClick = () => {
        eyeClickCount++;
        if (eyeClickCount >= 10) {
            leftIris.style.fill = rightIris.style.fill = getRandomColor();
            eyeClickCount = 0;
        } };
    robot.addEventListener('click', () => showTempMessage(speechBubble, "Ouch, that hurts!"));
    robot.addEventListener('mousemove', (e) => screenText.textContent = `Coordinates: (${e.clientX}, ${e.clientY})`);
    inputField.addEventListener('input', () => showTempMessage(screenText, "Don't worry, I'll take care of it!", 2000, "Bip bip bip !"));
    document.querySelector('.eye-left-pupil').addEventListener('click', handleEyeClick);
    document.querySelector('.eye-right-pupil').addEventListener('click', handleEyeClick);
});
