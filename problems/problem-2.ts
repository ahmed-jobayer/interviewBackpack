type TBook ={
    title: string ;
    author: string;
    year: number
}

const books: TBook[] = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
    { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
    { title: "Brave New World", author: "Aldous Huxley", year: 1932 }
  ];
  

  function getArrWithOnlyTitle(books: TBook[]){
    return books.map(book=> book.title)
  }

  const result2 = getArrWithOnlyTitle(books)
//   console.log(result2);