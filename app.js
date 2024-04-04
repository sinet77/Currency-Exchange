
const exchangeButton = document.getElementById('exchange')



async function fetchDataCurrency() {
    const url = 'https://currency-exchange.p.rapidapi.com/listquotes';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '37dd2f3585mshc686436de66ad7bp1b621fjsne2272199deb7',
            'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
        }
    };


    const response = await fetch(url, options);
    const result = await response.text();

    return result;


}

async function exchange(from, to, quantity) {
    const url = `https://currency-exchange.p.rapidapi.com/exchange?from=${from}&to=${to}&q=${quantity}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '37dd2f3585mshc686436de66ad7bp1b621fjsne2272199deb7',
            'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
        }
    };


    const response = await fetch(url, options);
    const result = await response.text();

    return result;

}

async function app() {

    const currencies = await fetchDataCurrency()

    const currenciesArray = currencies.split(',')
    console.log(currenciesArray)

    const fromCurrency = document.getElementById('fromCurrency')
    const toCurrency = document.getElementById('toCurrency')

    currenciesArray.forEach(part => {


        const option = document.createElement('option')
        option.textContent = part;
        option.value = part;
        fromCurrency.appendChild(option)

        const option2 = document.createElement('option')
        option2.textContent = part;
        option2.value = part;
        toCurrency.appendChild(option2)   /// nie mozna tak na 2 opcje dla forEach

    })




    exchangeButton.addEventListener('click', async () => {
        let fromCurrency = "USD"
        let toCurrency = "PLN"
        let exchanged = "200"

        const money = await exchange(fromCurrency, toCurrency, exchanged)
    })

}

app()
