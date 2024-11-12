let bill = 0;
let numOfPeople = 0;
let tipValue = 0;
let total = 0;
let tipPerPerson = 0;
let currentTip = null;
let tips = document.querySelectorAll('.single-tip');
let totalHtml = document.querySelector('#total-per-person-output');
let tipHtml = document.querySelector('#total-output');
let billInput = document.querySelector('#bill-input');
let peopleInput = document.querySelector('#number-of-people-input');
let resetBtn = document.querySelector('.reset-btn');
let error = document.querySelector('#error');
function calculateTip() {
    if (bill > 0 && numOfPeople > 0 && tipValue > 0) {
        total = (bill * tipValue) / 100;
        tipPerPerson = total / numOfPeople;
        totalHtml.innerText = `$${total.toFixed(2)}`;
        tipHtml.innerText = `$${tipPerPerson.toFixed(2)}`;
    } else {
        totalHtml.innerText = `$0.00`;
        tipHtml.innerText = `$0.00`;
    }
}

billInput.addEventListener('input', () => {
    bill = parseFloat(billInput.value) || 0;
    resetBtn.className = ('selected-btn');
    calculateTip();
});

peopleInput.addEventListener('input', () => {
    numOfPeople = parseFloat(peopleInput.value) || 0;
    resetBtn.className = ('selected-btn');
    calculateTip();
});

tips.forEach(tip => {
    tip.addEventListener('click', e => {
        if (currentTip) {
            currentTip.classList.remove('selected');
        }
        bill = document.querySelector('#bill-input').value;
        numOfPeople = document.querySelector('#number-of-people').value;
        bill = parseFloat(bill);
        numOfPeople = parseFloat(numOfPeople);
        if (e.target.id === 'tip6') {
            currentTip = e.target;
            currentTip.addEventListener('input', e => {
                tipValue = parseFloat(currentTip.value);
                if (currentTip.value === '') {
                    error.innerText = `Can't be zero`
                } else {
                    error.innerText = ``
                }
            })


        } else {
            currentTip = e.target.closest('.single-tip');
            tipValue = parseFloat(currentTip.innerText.substring(0, currentTip.innerText.length - 1));
        }
        total = bill * tipValue / 100;
        tipPerPerson = tip / numOfPeople;
        currentTip.classList.add('selected');
        if (currentTip.value === '') {
            error.innerText = `Can't be zero`
        } else {
            error.innerText = ``
        }
        resetBtn.className = ('selected-btn');
        calculateTip();
    })
})

const reset = () => {
    resetBtn.className = 'reset-btn';
    totalHtml.innerText = `$0.00`;
    tipHtml.innerText = `$0.00`;
    billInput.value = '';
    peopleInput.value = '';
    let bill = 0;
    let numOfPeople = 0;
    let tipValue = 0;
    let total = 0;
    let tipPerPerson = 0;
    let currentTip = null;
    tips.forEach(tip => {
        tip.classList.remove('selected');
    })
    error.innerText = '';
}

resetBtn.addEventListener('click', e => {
    reset();
})