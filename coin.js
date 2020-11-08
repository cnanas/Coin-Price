const url = "https://api.coindesk.com/v1/bpi/currentprice.json"
const priceTag = document.querySelector("h1")
let currency = "USD"

// lets make a function to grab data from coindesk

const checkPrice = function () {
    fetch(url)
        .then(response => response.json())
        .then(data => { 
            priceTag.innerHTML = data.bpi.USD.rate_float.toFixed(1)
        })
}

//run this on load
checkPrice()