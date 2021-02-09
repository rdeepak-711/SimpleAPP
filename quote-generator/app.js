var quotes = [
    '\"I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best.\" ― Marilyn Monroe',
    '\"Be yourself; everyone else is already taken.\" ― Oscar Wilde',
    '\"Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.\"― Albert Einstein',
    '\“A room without books is like a body without a soul.\”― Marcus Tullius Cicero',
    '\“The purpose of our lives is to be happy.\” — Dalai Lama',
    '\“Life is what happens when you’re busy making other plans.\” — John Lennon',
    '\“Get busy living or get busy dying.\” — Stephen King',
    '\“You only live once, but if you do it right, once is enough.\” — Mae West',
    '\“Money and success don’t change people; they merely amplify what is already there.\” — Will Smith',
    '\“Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.\” – Steve Jobs',
    '\“Everything negative – pressure, challenges – is all an opportunity for me to rise.\” — Kobe Bryant'
];

function newQuote(){
    var randomNumber = Math.floor(Math.random()*quotes.length);

    document.getElementById('quotes').innerHTML = quotes[randomNumber];
}

function changeBackground() {
    const colors = ['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red', 'purple', 'aqua', 'azure', 'crimson'];

    const color = Math.floor(Math.random()*colors.length);
    console.log(colors[color]);
    document.body.style.background = colors[color];
}