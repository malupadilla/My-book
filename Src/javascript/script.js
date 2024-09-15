let count = 0;

// Verifica se existe um valor armazenado para 'count' no Local Storage
if (localStorage.getItem('count')) {
    count = parseInt(localStorage.getItem('count'));
}

const value = document.getElementById('value');
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const resetButton = document.getElementById('reset');

const updateValue = () => {
    value.innerHTML = count;
};

let count = 0;

plusButton.addEventListener('click', () => {
    count += 1;
    updateValue();
});

minusButton.addEventListener('click', () => {
    count -= 1;
    updateValue();
});

resetButton.addEventListener('click', () => {
    count = 0;
    updateValue();
});