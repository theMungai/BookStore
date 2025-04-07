document.addEventListener("DOMContentLoaded", () => {
  // Select dropdown classes
  // const profile = document.querySelector(".profile");
  // const dropdown = document.querySelector(".profile-dropdown");

  // //Toggle dropdown visibility when profile is clicked
  // profile.addEventListener("click", (e) => {
  //   e.stopPropagation();
  //   dropdown.classList.toggle("show")
  // });

  // // Hide dropdown when clicking anywhere outside of it
  // document.addEventListener("click", (e) => {
  //   if (!profile.contains(e.target) && !dropdown.contains(e.target)) {
  //     dropdown.classList.remove("show");
  //   }
  // });

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
    searchBooks(books)
  }

  // Search books functionality
  const searchResults = document.querySelector(".result-box")
  const searchInput = document.querySelector(".search-input")
  function searchBooks(books){
    searchInput.addEventListener("keyup", () => {
      let result = [];
      let input = searchInput.value

      if(input.length){
        searchResults.style.display = "block"
        result = books.filter((book) => {
          return  book.name.toLowerCase().includes(input.toLowerCase())
        })
        searchResults.innerHTML = "";
        
        result.forEach((book) => {
          let searchedItem = document.createElement("li")
          searchedItem.classList.add("js-searched-book")
          searchedItem.textContent = book.name
          searchedItem.addEventListener("click", () => {
            displaySearch(searchedItem)
          })
          searchResults.appendChild(searchedItem)
        })
      }
      else{
        searchResults.style.display = "none"
      }
    })
    
  }

  function displaySearch(result){
    searchInput.value = result.innerHTML
    searchResults.style.display = "none"
  }
});
