
const exchangeButton = document.getElementById('exchange')



async function fetchDataCurrency() {
    const url = 'https://api.currencyapi.com/v3/latest?apikey=cur_live_OZc8C0HqZZkVDcx79ZnmqTpKV72UKa3dqjz1jT7g';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'cur_live_OZc8C0HqZZkVDcx79ZnmqTpKV72UKa3dqjz1jT7g',
        }
    };


    const response = await fetch(url, options);
    const result = await response.text();

    return result;


}


async function app() {

    const currencies = await fetchDataCurrency()

    const currencyCodes = [];



    for (const currency in currencies) {
        if (currencies.hasOwnProperty(currency)) {
            currencyCodes.push(currencies[currency].code);
        }
    }
    console.log(currencyCodes);


    const fromCurrency = document.getElementById('fromCurrency')
    const toCurrency = document.getElementById('toCurrency')

    currencyCodes.forEach(part => {


        const option = document.createElement('option')
        option.textContent = part;
        option.value = part;
        fromCurrency.appendChild(option)

        const option2 = document.createElement('option')
        option2.textContent = part;
        option2.value = part;
        toCurrency.appendChild(option2)

    })




    exchangeButton.addEventListener('click', async () => {
        let fromCurrency = "USD"
        let toCurrency = "PLN"
        let exchanged = "200"

        const money = await exchange(fromCurrency, toCurrency, exchanged)
    })

}

app()