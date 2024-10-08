document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('title');
    const words = title.textContent.split(' ');
    let intervalId;
    let isShuffling = true;
    const shuffleTitle = () => {
        if (isShuffling) {
            title.textContent = words.sort(() => Math.random() - 0.5).join(' ');
        }};
    const startShuffling = () => {
        intervalId = setInterval(shuffleTitle, 2000);
    };
    const stopShuffling = () => clearInterval(intervalId);
    title.addEventListener('mouseenter', () => isShuffling = false);
    title.addEventListener('mouseleave', () => isShuffling = true);
    title.addEventListener('click', () => {
        isShuffling = false;
        navigator.clipboard.writeText(title.textContent);
        stopShuffling();
    });
    document.addEventListener('click', (e) => {
        if (!title.contains(e.target) && !isShuffling) {
            isShuffling = true;
            startShuffling();
        }});
    document.addEventListener('keydown', (e) => {
        if (e.key === '!') {
            setTimeout(() => alert('42!'), 42000);
       }});

    startShuffling();
});
