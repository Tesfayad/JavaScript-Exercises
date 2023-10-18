const books =`[
    {
        "title": "The Purpose Driven Life",
        "author": "Rick Warren",
        "publishedYear": 2002,
        "price": 14.99
    },
    {
        "title": "Being and Time",
        "author": "Martin Heidegger'",
        "publishedYear": 1927,
        "price": 57.99
    }
]`;

const parsedBooks = JSON.parse(books);
const priceSum = parsedBooks.reduce((sum, book) => sum + book.price,0);
console.log("price sum", priceSum);

const booksBefore1960 = parsedBooks.filter(book => book.publishedYear < 1960);
console.log('Books published before 1960:', booksBefore1960);

const sortedBooks = parsedBooks.sort((a, b) => a.publishedYear - b.publishedYear);
console.log('Sorted Books', sortedBooks);

