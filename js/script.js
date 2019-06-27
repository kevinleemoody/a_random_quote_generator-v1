/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing



// This creates an array of quote odjects

let quotes = [
  {
    quote: "If you wish to make an apple pie from scratch, you must first invent the universe.",
    source: "Carl Sagan",
    citation: "Cosmos",
    year: "1980"
  },
  {
    quote: "If you have the opportunity to play this game of life you need to appreciate every moment. a lot of people don’t appreciate the moment until it’s passed",
    source: "Kanye West",
    citation: "Twitter",
    year: "2015"
  
  },
  {
    quote: "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.",
    source: "Pele"
    
  
  },
  {
    quote: "It's so simple to be wise… just think of something stupid to say and then don't say it",
    source: "Homer Simpson",
   
  
  },
  {
    quote: "I think everybody should get rich and famous and do everything they ever dreamed of so they can see that it’s not the answer.",
    source: "Jim Carry",
   
  
  }
  
  ]
   
  
// This creates the getRandomQuote function to create a variable to store a random number 
// and uses the random number to `return` a random quote object from the `quotes` array.
   const getRandomQuote = (quotesArray) =>{
    
    var storeRandomNumber;
    storeRandomNumber = Math.floor(Math.random() * quotesArray.length);
  
  
    return quotesArray[storeRandomNumber]; 
  }
  
  // printQuote function calls getRandomQuote function and assigns it to a variable.
  // if statement to check for the citation and year property before adding it to the HTML string
  
  
   function printQuote() {
  
     var myQuote = getRandomQuote(quotes);
     var myHtml = '';
     var quote = myQuote.quote;
     var source = myQuote.source;
     var citation = myQuote.citation;
     var year = myQuote.year;
     myHtml = `
     <p class="quote">${quote}</p>
   <p class="source">${source}`
   
   if (citation) {
       myHtml = `${myHtml} <span class="citation">${citation}</span>`
   }
   if (year) {
      myHtml = `${myHtml}  <span class="year">${year}</span>`
   } 
   
   
    myHtml = `${myHtml} </p>`
   
    document.getElementById('quote-box').innerHTML= myHtml
  }
   
  

  // invoke the print quote function when the event listener is called.
  
  document.getElementById('loadQuote').addEventListener("click", printQuote, false);