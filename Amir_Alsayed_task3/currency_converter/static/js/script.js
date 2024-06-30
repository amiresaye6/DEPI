document.addEventListener('DOMContentLoaded', function () {
    const btnSubmit = document.getElementById("submit");
    const amountInput = document.getElementById('amount');
    const sourceCurrency = document.getElementById('from_currency');
    const targetCurrency = document.getElementById('to_currency');
    const resultDisplay = document.getElementById("result");

    btnSubmit.addEventListener('click', () => {
        const amount = parseFloat(amountInput.value);
        const fromCurrency = sourceCurrency.value;
        const toCurrency = targetCurrency.value;

        console.log(amount, fromCurrency, toCurrency);

        switch (fromCurrency) {
            case 'EGP':
                switch (toCurrency) {
                    case 'USD':
                        resultDisplay.textContent = amount * 0.0208818;
                        break;
                    case 'EUR':
                        resultDisplay.textContent = amount * 0.01944674;
                        break;
                    case 'JPY':
                        resultDisplay.textContent = amount * 3;
                        break;
                    case 'EGP':
                        resultDisplay.textContent = amount;
                        break;
                }
                break;
            case 'USD':
                switch (toCurrency) {
                    case 'EGP':
                        resultDisplay.textContent = amount * 47.8886;
                        break;
                    case 'EUR':
                        resultDisplay.textContent = amount * 0.93128;
                        break;
                    case 'JPY':
                        resultDisplay.textContent = amount * 160.8305;
                        break;
                    case 'USD':
                        resultDisplay.textContent = amount;
                        break;
                }
                break;
            case 'EUR':
                switch (toCurrency) {
                    case 'USD':
                        resultDisplay.textContent = amount * 1.0737944;
                        break;
                    case 'EGP':
                        resultDisplay.textContent = amount * 51.4225;
                        break;
                    case 'JPY':
                        resultDisplay.textContent = amount * 172.69889;
                        break;
                    case 'EUR':
                        resultDisplay.textContent = amount;
                        break;
                }
                break;
            case 'JPY':
                switch (toCurrency) {
                    case 'USD':
                        resultDisplay.textContent = amount * 0.00622;
                        break;
                    case 'EUR':
                        resultDisplay.textContent = amount * 0.00579;
                        break;
                    case 'EGP':
                        resultDisplay.textContent = amount * 0.333333;
                        break;
                    case 'JPY':
                        resultDisplay.textContent = amount;
                        break;
                }
                break;
        }
    });
});
