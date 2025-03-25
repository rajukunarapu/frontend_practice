const paragraghtElement = document.getElementById('quote')
const buttonElement = document.getElementById('generate-btn')

var quotes = [
    " The best way to predict the future is to create it.",
    "The best way to predict the future is to create it1.",
    "The best way to predict the future is to create it2.",
    "The best way to predict the future is to create it3."
]

function getRandomQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex]
}

buttonElement.addEventListener('click', () => {
    paragraghtElement.textContent = getRandomQuote()
})