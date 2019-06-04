/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/

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
 




/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - use the random number to `return` a random quote object from the `quotes` array.
***/
 const getRandomQuote = (quotesArray) =>{
  
  var storeRandomNumber;
  storeRandomNumber = Math.floor(Math.random() * quotesArray.length);


  return quotesArray[storeRandomNumber]; 
}


// //Function to genereate random rgb color value
// function randomColorGenerator() {
// 	var randomColor;
// 	red = Math.floor(Math.random() * 256 );
// 	green = Math.floor(Math.random() * 256 );
// 	blue = Math.floor(Math.random() * 256 );
// 	randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
//   return randomColor;
  


// }





/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

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
 

  



  // function​ printQuote(​ )​ {​
  //   //createavariablethatcallstheg​ etRandomQuote()​function
  //   // create a variable that initiates your HTML string
  //   // using the template in the project instructions, add the two default quote
  //   properties, q​ uote​ and s​ ource
  //   // i​ f​ there is a quote.citation property, add it the string
  //   // i​ f​ there is a quote.year property, add it the string
  //   // close the string with the necessary closing HTML tags
  //   // set the innnerHTML of the .​ quote-box​ to the complete HTML string
  //   }
 

 





/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// print(message);
// 	//Generate random color
// 	randomColorGenerator();
// 	//Update background with new random color
// 	document.getElementById('bgcolor').style.backgroundColor = randomColorGenerator();


// Remember to delete the comments that came with this file, and replace them with your own code comments.

