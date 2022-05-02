const QUOTES = [
    {
      quote: "The earth is what we all have in common.",
      author: "Wendell Berry"
    }, {
      quote: "Those who contemplate the beauty of the Earth find reserves of strength that will endure as long as life lasts.",
      author: "Rachel Carson"
    }, {
      quote: "Earth provides enough to satisfy every man's need, but not every man's greed.",
      author: "Mahatma Gandhi"
    }, {
      quote: "There are no passengers on Spaceship Earth. We are all crew.",
      author: "Marshall McLuhan"
    }, {
      quote: "The earth is but one country and mankind its citizens.",
      author: "Baha'U'Llah"
    }, {
      quote: "The earth has grown a nervous system, and it's us.",
      author: "Daniel Dennett"
    }, {
      quote: "The materials of wealth are in the earth, in the seas, and in their natural and unaided productions.",
      author: "Daniel Webster"
    }, {
      quote: "... do something. Pay your rent for the privilege of living on this beautiful, blue-green, living Earth.",
      author: "Dave Foreman"
    }, {
      quote: "The Earth does not belong to us: we belong to the Earth.",
      author: "Marlee Matlin"
    }, {
      quote: "Lower your expectations of earth. This isn't heaven, so don't expect it to be.",
      author: "Pope John Paul II"
    }
  ];
  
  // Window Loading
  window.onload = init;
  function init() {
    generateQuote();
  }
  
  function generateQuote() {
    // Random index selection from QUOTEBANK
    let quoteSize = QUOTES.length;
    let randomIndex = Math.floor(Math.random() * quoteSize);
    let randomQuoteData = QUOTES[randomIndex];
    
    let twitterLink = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + randomQuoteData;
    // Add the Quote
    
    // Add the Author
    document.getElementById("tweet-quote").href = twitterLink;
    document.getElementById("text").innerText = randomQuoteData.quote + "\n";
    document.getElementById("author").innerText = randomQuoteData.author;
  }