
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

    exchangeButton.addEventListener('click', async () => {
        let fromCurrency = "USD"
        let toCurrency = "PLN"
        let exchanged = "200"

        const money = await exchange(fromCurrency, toCurrency, exchanged)
    })

}

app()
