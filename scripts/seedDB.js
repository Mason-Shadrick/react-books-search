const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/googleboks"
);

const bookSeed =
{
    authors: ["George R. R. Martin"],
    description: "Winter is coming. Such is the stern motto of House Stark, the northernmost of the fiefdoms that owe allegiance to King Robert Baratheon in far-off King’s Landing. There Eddard Stark of Winterfell rules in Robert’s name. There his family dwells in peace and comfort: his proud wife, Catelyn; his sons Robb, Brandon, and Rickon; his daughters Sansa and Arya; and his bastard son, Jon Snow. Far to the north, behind the towering Wall, lie savage Wildings and worse—unnatural things relegated to myth during the centuries-long summer, but proving all too real and all too deadly in the turning of the season.",
    image: "https://books.google.com/books?id=5NomkK4EV68C&printsec=frontcover&dq=game+of+thrones&hl=en&newbks=1&newbks_redir=0&sa=X&ved=2ahUKEwi-mNacxv3rAhXEwVkKHYUzA9gQ6wEwAHoECAYQAQ",
    link: "https://books.google.com/books?id=5NomkK4EV68C&printsec=frontcover&dq=game+of+thrones&hl=en&newbks=1&newbks_redir=0&sa=X&ved=2ahUKEwi-mNacxv3rAhXEwVkKHYUzA9gQ6AEwAHoECAYQAg",
    title: "A Game of Thrones: A Song of Ice and Fire: Book One",
}


db.Book
    .remove({})
    .then(() => db.Book.collection.insertMany(bookSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });