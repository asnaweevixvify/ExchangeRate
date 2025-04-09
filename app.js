const currency_one = document.getElementById('currency-one');
const currency_two = document.getElementById('currency-two');

const amount_one = document.getElementById('type1')
const amount_two = document.getElementById('type2')

const rateText = document.getElementById('rate')
const swap = document.getElementById('btn')

currency_one.addEventListener('change',calculateMoney)
currency_two.addEventListener('change',calculateMoney)

amount_one.addEventListener('input',calculateMoney)
amount_two.addEventListener('input',calculateMoney)
swap.addEventListener('click',transit)


function calculateMoney(){
    const one = currency_one.value;
    const two = currency_two.value;
    fetch(`https://api.exchangerate-api.com/v4/latest/${one}`)
    .then(res=>res.json()).then(data=>{
        const rate = data.rates[two];
        rateText.innerText=`1 ${one}= ${rate} ${two}`;
        amount_two.value = (amount_one.value*rate).toFixed(2)
    })    
}
function transit(){
    const temp = currency_one.value;
    currency_one.value = currency_two.value;
    currency_two.value=temp;

    const tempText = amount_one.value;
    amount_one.value = amount_two.value;
    amount_two.value = tempText;
}
