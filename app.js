let myLibrary = [];
let container = document.getElementById("container");
let cardID = 0;

function book (title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function(){
    return title + " by " + author + ", " + pages + " pages, " + this.read;
  }
}

function displayBook(book){
  const newDiv = document.createElement("div");
  const content = document.createTextNode(book.info());

  //add button to remove book
  const remove = document.createElement("button");
  remove.innerText = "Remove Book";
  remove.addEventListener("click", removeBook);

  //button to change read status
  const changeRead = document.createElement("button");
  changeRead.innerText = "Finished Reading";
  changeRead.addEventListener("click", changeToRead);

  //cardID
  newDiv.setAttribute("id", cardID);
  remove.setAttribute("id", cardID);
  changeRead.setAttribute("id", cardID);

  //style class
  newDiv.classList.add("card");

  newDiv.appendChild(content);
  newDiv.appendChild(changeRead);  
  newDiv.appendChild(remove);

  container.appendChild(newDiv);
}

function addBookToLibrary(title, author, pages, read){
  const newBook = new book(title, author, pages, read);
  myLibrary.push(newBook);
  if(myLibrary.length>1){
    reset();
  }
  displayLibrary();
}

//display each book- loop through array
function displayLibrary(){
  cardID = 0;
  for (let i=0;i<myLibrary.length;i++) {
    displayBook(myLibrary[i]);
    cardID++;
  }
}

//NEW BOOK
function newBook (){
  let bookTitle = window.prompt("Title");
  let bookAuthor = window.prompt("Author");
  let bookPages = window.prompt("Pages");
  let bookRead = window.prompt("Read");
  addBookToLibrary(bookTitle, bookAuthor, bookPages, bookRead);
}

//REMOVE
function removeBook(){
  reset();
  myLibrary.splice(this.id, 1);
  displayLibrary();
}

//CHANGE READ
function changeToRead(book){
  myLibrary[this.id].read = "read";
  reset();
  displayLibrary();
}

function reset(){
  for(let i=myLibrary.length-1 ; i>-1 ; i--){
    let card = document.getElementById(i);
    if(card !== null){
      card.remove();
    }
  }
}

function newBook(){
  let title, author, pages;
  title = window.prompt("Book Title");
  author = window.prompt("Book author");
  pages = window.prompt("Book pages");
  addBookToLibrary(title, author, pages, "not read");
}

// addBookToLibrary("Hobbit", "JRRT", "100", "not read");
displayLibrary();