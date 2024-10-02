function generate() {
    var quotes = {
        "– William Shakespeare":" To be, or not to be, that is the question.",
        "– Mahatma Gandhi":  "You must be the change you wish to see in the world.",
        " – Nelson Mandela": "The greatest glory in living lies not in never falling, but in rising every time we fall." 
    }
    
    let authors = Object.keys(quotes);
    // console.log(authors);
    let author = authors[Math.floor(Math.random() * authors.length)];
    // console.log(author);
 
    let quote = quotes[author];
    // console.log(quote);
    
    document.querySelector("#quote").textContent = quote;
    document.querySelector("#author").textContent= author;
}