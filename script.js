const newQuote = document.getElementById("new-quote");
const tweetQuote = document.getElementById("tweet-quote");
const twitterUrl = "https://twitter.com/intent/tweet?text=";
const DATA = {
    quotes: [],
};

function fetchQuote() {
    fetch("https://type.fit/api/quotes")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            DATA.quotes = data;
            renderQuote();
        });
}

function renderQuote() {
    const textEl = document.getElementById("text");
    const authorEl = document.getElementById("author");
    const idx = getRandomNumber();
    const { text, author } = DATA.quotes[idx];
    textEl.innerHTML = text;
    authorEl.innerHTML = "- " + author;
    const urlParam = encodeURI(text + "\n - " + author);

    tweetQuote.href = twitterUrl + urlParam;
}

function getRandomNumber() {
    return Math.floor(Math.random() * DATA.quotes.length);
}

newQuote.addEventListener("click", renderQuote);

fetchQuote();

// "https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=%22We%20can%20easily%20forgive%20a%20child%20who%20is%20afraid%20of%20the%20dark%3B%20the%20real%20tragedy%20of%20life%20is%20when%20men%20are%20afraid%20of%20the%20light.%22%20Plato"
