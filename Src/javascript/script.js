let count = 0;

// Verifica se existe um valor armazenado para 'count' no Local Storage
if (localStorage.getItem('count')) {
    count = parseInt(localStorage.getItem('count'));
}

// Atualiza o elemento HTML com o valor de 'count' ao carregar a página
const value = document.getElementById('value');
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const resetButton = document.getElementById('reset');

const updateValue = () => {
    value.innerHTML = count;
};

updateValue(); /* Clique Normal */

plusButton.addEventListener('click', () => {
    count += 1;
    updateValue();
    localStorage.setItem('count', count); // Armazena o valor atualizado no Local Storage
});

minusButton.addEventListener('click', () => {
    count -= 1;
    updateValue();
    localStorage.setItem('count', count); // Armazena o valor atualizado no Local Storage
});

resetButton.addEventListener('click', () => {
    count = 0;
    updateValue();
    localStorage.setItem('count', count); // Armazena o valor atualizado no Local Storage
});