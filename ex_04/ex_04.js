document.querySelectorAll('.item').forEach(item => {
    const quantityInput = item.querySelector('input[type="text"]');
    item.querySelector('.plus-btn').addEventListener('click', () => quantityInput.value++);
    item.querySelector('.minus-btn').addEventListener('click', () => {
        if (quantityInput.value > 1) quantityInput.value--;
    });
    item.querySelector('.delete-btn').addEventListener('click', () => item.remove());
    item.querySelector('.like-btn').addEventListener('click', function() {
        this.classList.toggle('is-active');
    });
});
