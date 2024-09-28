const plusBtn = document.querySelector('#plusBtn');
const minusBtn = document.querySelector('#minusBtn');
const resetBtn = document.querySelector('#resetBtn');

const span1 = document.querySelector('#span1');
const span2 = document.querySelector('#span2');
const span3 = document.querySelector('#span3');
const span4 = document.querySelector('#span4');

let counter;

if (document.cookie == "") {
    counter = 0;
}
else {
    counter = parseInt(document.cookie)
    update(counter);
}

function update(number) {
    if (number < 0 || number > 9999 || !Number.isInteger(number)) {
        throw new Error("Number must be an integer between 0 and 9999");
    }
    
    const numStr = number.toString().padStart(4, '0');
    const digitArray = numStr.split('').map(digit => parseInt(digit));
    
    span1.textContent = digitArray[0];
    span2.textContent = digitArray[1];
    span3.textContent = digitArray[2];
    span4.textContent = digitArray[3];
}

plusBtn.onclick = () => {
    counter++;
    document.cookie = counter;
    update(counter);
}
minusBtn.onclick = () => {
    counter--;
    document.cookie = counter;
    update(counter);
}
resetBtn.onclick = () => {
    counter = 0;
    document.cookie = counter;
    update(counter);
}
