document.querySelector('.submit').addEventListener('click', addBook);
let books;

const bookList = document.createElement('ol');
bookList.className = 'bookList';
const bookListItem = document.createElement('li');
bookListItem.className = 'bookList-item';

function addBook(e) {
  e.preventDefault();

  let bookTitle = document.querySelector('.book-title-item').value;
  let author = document.querySelector('.author-item').value;
  let isbn = document.querySelector('.isbn-item').value;
    if(!bookTitle || !author || !isbn) {
      const warning = document.createElement('p');
      warning.className = 'warning';
      warning.textContent = 'please fill all blanks';
      document.querySelector('.warning-container').appendChild(warning);
      warning.style.color = 'red';
    } else {
      
      if(!books) {
        books = [];
        books.push({Title: bookTitle, author, isbn});
        // bookList.appendChild(bookListItem);
        // bookListItem.textContent = books[0].Title;
        // console.log(bookListItem);
        document.querySelector('.book-list-title-item').textContent = books[0].Title;
        document.querySelector('.book-list-author-item').textContent = books[0].author;
        document.querySelector('.book-list-isbn-item').textContent = books[0].isbn;
        localStorage.setItem('books', JSON.stringify(books));

        console.log(books);
      } else {
        books.push({Title: bookTitle, author, isbn});
        const bookListItem = document.createElement('li');
        bookListItem.className = 'bookList-item'; 
        bookListItem.textContent = books[1].Title;
        document.querySelector('.book-list-title').appendChild(bookListItem);

        const bookListAuthor = document.createElement('li');
        bookListAuthor.className = 'bookList-author';
        bookList.value = books[1].author;
        console.log(books[1].author);
        document.querySelector('.book-list-author').appendChild(bookListAuthor);



        console.log(books);
      }
      bookTitle = '';
      author = '';
      isbn = '';
    }
 
  

  
}



