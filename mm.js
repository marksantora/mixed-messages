const authors = ['William Burroughs', 'Kurt Vonnegut', 'Charles Bukowski'];
const williamsQuotes = ['A paranoid is someone who knows a little of what\'s going on', 'Silence is only frightening to people who are compulsively verbalizing', 'When you stop growing you start dying', 'There is nothing more provocative than minding your own business'];
const vonnegutQuotes = ['We have to contiually be jumping off cliffs and developing wings on the way down', 'Science is magic that always works', 'A sane person to an insane society must appear insane', 'Live by the harmless untruths that make you brave and kind and healthy and happy'];
const bukowskiQuotes = ['Some people never go crazy. What truly horrible lives they must lead', 'You have die a few times before you really live', 'Find what you love and let it kill you', 'The problem with the world is that the intelligent people are full of doubts, while the stupid ones are full of confidence'];

const drinks = ['a glass of malbec', 'a pint of nut brown ale', 'a tumbler of bourbon neat', 'a shot of anejo tequila', 'an extra cup of coffee'];

let author;

const chooseQuote = () => {
    author = authors[Math.floor(Math.random() * 3)];

    switch (author) {
        case 'William Burroughs':
            let williamsQuote = williamsQuotes[Math.floor(Math.random() * williamsQuotes.length)];
            return williamsQuote;

        case 'Kurt Vonnegut':
            let vonnegutQuote = vonnegutQuotes[Math.floor(Math.random() * vonnegutQuotes.length)];
            return vonnegutQuote;


        case 'Charles Bukowski':
            let bukowskiQuote = bukowskiQuotes[Math.floor(Math.random() * bukowskiQuotes.length)];
            return bukowskiQuote;

        default:
            console.log('There is nothing to be said today');
            break;
    }
}

const drink = drinks[Math.floor(Math.random() * drinks.length)];

const quote = chooseQuote();

console.log(`As you move through your day remember what ${author} said, "${quote}". Also, today may call for ${drink}.`);