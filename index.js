//variables

let btn = document.getElementById("button");
let quote = document.getElementById("quote");
let person = document.getElementById("person");


// List of quotes and their respective persons

const quotes = [
    { quote: "The only way to do great work is to love what you do.", person: "Steve Jobs" },
    { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", person: "Winston Churchill" },
    { quote: "Life is what happens when you're busy making other plans.", person: "John Lennon" },
    { quote: "You miss 100% of the shots you don't take.", person: "Wayne Gretzky" },
    { quote: "It does not matter how slowly you go as long as you do not stop.", person: "Confucius" },
    { quote: "The future belongs to those who believe in the beauty of their dreams.", person: "Eleanor Roosevelt" },
    { quote: "In the end, it's not the years in your life that count. It's the life in your years.", person: "Abraham Lincoln" },
    { quote: "The only limit to our realization of tomorrow will be our doubts of today.", person: "Franklin D. Roosevelt" },
    { quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", person: "Nelson Mandela" },
    { quote: "I have not failed. I've just found 10,000 ways that won't work.", person: "Thomas A. Edison" }
];

// Generator

btn.addEventListener("click", ()=>{
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

}) 
