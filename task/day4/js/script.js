const books = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        available: true
    },
    {
        title: "1984",
        author: "George Orwell",
        available: false
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        available: true
    }
];

const bookContainer = document.querySelector(".book-container");
console.log("bookContainer: ", bookContainer);

let html = "";

const totalItemsOfBooks = books.length;

for (let i = 0; i < totalItemsOfBooks; i++) {
    html += `
        <div class="book">
            <h2>Title: ${books[i].title}</h2>
            <p>Author: ${books[i].author}</p>
            <p>Available: ${books[i].available}</p>
        </div>
    `;
    console.log(html);
}

bookContainer.innerHTML = html;
