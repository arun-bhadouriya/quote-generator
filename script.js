//get quote from the api
async function getQuote() {
  const proxy = "https://cors-anywhere.herokuapp.com/";
  const apiUrl =
    "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";

  try {
    const response = await fetch(proxy + apiUrl);
    const data = await response.json();
    console.log(data);

    document.getElementById("quote-text").textContent = data.quoteText;
    document.getElementById("authorName").textContent = data.quoteAuthor;
  } catch (error) {
    getQuote();
    console.log("whoops no quote", error);
  }
}

// onload
// window.onLoad(() => getQuote());
document.getElementById("new-quote").onclick = () => {
  getQuote();
};
// getQuote();

function tweetQuote() {
  const quote = document.getElementById("quote-text").innerText;
  const authorName = document.getElementById("authorName").textContent;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${authorName}`;
  window.open(twitterUrl, "_blank");
}

document.getElementById("tweets").onclick = () => {
  tweetQuote();
};
