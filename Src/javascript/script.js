const value = document.getElementById('value');
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const resetButton = document.getElementById('reset');

const updatValue = () => {
    value.innerHTML = count;
};

let count = 0;
let intervalid = 0;

plusButton.addEventListener('click', () => {
    intervalid = setInterval(() => {
        count +=1;
        updatValue();
    }, 100);
});

minusButton.addEventListener('click', () => {
    intervalid = setInterval(() => {
        count -=1;
        updatValue();
    }, 100);
});

resetButton.addEventListener('click', () => {
    count = 0;
    updatValue();
});

document.addEventListener('clickup', () => clearInterval(intervalid));