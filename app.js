// Functions
// Pin Generator
function getPin() {
    const pin = Math.round(Math.random() * 10000);
    if ((pin + '').length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

// Pin Enter
document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calInput.value = '';
        }
    }
    else {
        const previousNumber = calInput.value;
        const newNumber = previousNumber + number;
        calInput.value = newNumber;
    }
});

// Pin Matching
function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumber = document.getElementById('typed-numbers').value;
    const successMessage = document.getElementById('notify-success');
    const failMessage = document.getElementById('notify-fail');
    if (pin == typedNumber) {
        successMessage.style.display = 'block';
        failMessage.style.display = 'none';
    }
    else {
        successMessage.style.display = 'none';
        failMessage.style.display = 'block';
    }
}



// Function Calling
// Pin Generator Calling
document.getElementById('generate-pin').addEventListener('click', function () {
    generatePin();
})





