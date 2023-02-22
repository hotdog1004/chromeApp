const quotes = [
    {
        quote : 'Live life to the fullest.',
        author : 'Anonymous',
    },
    {
        quote : 'It is kind of fun to do the impossible',
        author : 'Walt Disney',
    },
    {
        quote : 'If you are not willing to risk the usual, you will have to settle for the ordinary.',
        author : 'Jim Rohn',
    },
    {
        quote : 'Great minds have purposes, others have wishes.',
        author : 'Washington Irving',
    },
    {
        quote : 'Life is from the inside out. When you shift on the inside, life shifts on the outside.',
        author : 'Kamal Ravikant',
    },
    {
        quote : 'Tough times never last, but tough people do.',
        author : 'Robert H. Schuller',
    },
    {
        quote : 'I’ve failed over and over and over again in my life and that is why I succeed.',
        author : 'Michael Jordan',
    },
    {
        quote : 'You will never know until you try.',
        author : 'Anonymous',
    },
    {
        quote : 'Behind the cloud is the sun still shining.',
        author : 'Anonymous',
    },
    {
        quote : 'Better late than never.',
        author : 'Anonymous',
    },
]


const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];


quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;