
const exchangeButton = document.getElementById('exchange')
const input = document.querySelector('#bar')
const resultText = document.querySelector('.resultText')

let firstCurrency = ''
let secondCurrency = ''
let inputUserValue = 1;


input.addEventListener('input', function () {
    inputUserValue = input.value;
})

async function fetchDataCurrency() {   //latest exchange rates

    const url = 'https://api.currencyapi.com/v3/latest'
    const options = {
        method: 'GET',
        headers: {
            'apikey': 'cur_live_OZc8C0HqZZkVDcx79ZnmqTpKV72UKa3dqjz1jT7g',
        }
    };


    const response = await fetch(url, options);
    const result = await response.json();

    return result;


}
async function exchangeDataCurrency() {
    const url = `https://api.currencyapi.com/v3/convert?value=${inputUserValue}&base_currency=${firstCurrency}&currencies=${secondCurrency}`
    const options = {
        method: 'GET',
        headers: {
            'apikey': 'cur_live_OZc8C0HqZZkVDcx79ZnmqTpKV72UKa3dqjz1jT7g',
        }
    };


    const response = await fetch(url, options);
    const result = await response.json();


    return result;


}

async function app() {

    const responseData = await fetchDataCurrency()
    const codeArray = [];

    for (const currency in responseData.data) {
        const code = responseData.data[currency].code;
        codeArray.push(code);
    }

    const fromCurrency = document.getElementById('fromCurrency')
    const toCurrency = document.getElementById('toCurrency')


    codeArray.forEach(part => {



        const option = document.createElement('option')
        option.textContent = part;
        option.value = part;
        firstCurrency = part;
        fromCurrency.appendChild(option)

        fromCurrency.addEventListener('change', function () {
            firstCurrency = this.value;
            console.log(firstCurrency)
        })

        const option2 = document.createElement('option')
        option2.textContent = part;
        option2.value = part;
        toCurrency.appendChild(option2)

        toCurrency.addEventListener('change', function () {
            secondCurrency = this.value;
            console.log(secondCurrency)
        })

    })




    exchangeButton.addEventListener('click', async () => {
        const money = await exchangeDataCurrency()
        console.log(money)
        // const convertedValue = money.result[secondCurrency]
        // resultText.textContent = convertedValue;
    })

}

app()