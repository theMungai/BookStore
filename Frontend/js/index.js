document.addEventListener("DOMContentLoaded", () => {
  // Select dropdown classes
  const profile = document.querySelector(".profile");
  const dropdown = document.querySelector(".profile-dropdown");

  //Toggle dropdown visibility when profile is clicked
  profile.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdown.classList.toggle("show")
  });

  // Hide dropdown when clicking anywhere outside of it
  document.addEventListener("click", (e) => {
    if (!profile.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.classList.remove("show");
    }
  });

  // Fetching books from db.json
  function fetchBooks(){
    fetch("http://localhost:3000/books")
    .then((response) => response.json())
    .then((books) => displayBooks(books));
  }
  fetchBooks()

  // Displaying books in the home-page
  const booksContainer = document.querySelector("#popular-books")
  booksContainer.innerHTML = ""
  function displayBooks(books){
    books.forEach((book) => {
      let bookItem = document.createElement("li");
      bookItem.classList.add("js-book-item")
      bookItem.innerHTML = `
        <div class="popular-book">
          <img src="${book.image_url}" alt="${book.name}">
          <p class="book-title">${book.name}</p>
          <p class="author">${book.author}</p>
        </div>
      `;
      booksContainer.appendChild(bookItem)
        
    })
    
  }
});
