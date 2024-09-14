const value = document.getElementById('value')
const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const resetButton = document.getElementById('reset')

const updatValue = () => {
    value.innerHTML = count;
};

let count = 0;
let intervalid = 0;

plusButton.addEventListener('mausedown', () => {
    intervalid = setInterval(() => {
        count +=1;
        updatValue
    }, 100);
});

minusButton.addEventListener('mausedown', () => {
    intervalid = setInterval(() => {
        count -=1;
        updatValue();
    }, 100);
});

resetButton.addEventListener('click', () => {
    count = 0;
    updatValue
});

document,addEventListener('mouseup', () => clearInterval(intervalid));