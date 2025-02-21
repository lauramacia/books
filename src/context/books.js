import { createContext, useState } from "react";
import axios from 'axios';

const BooksContext = createContext();

// although named Provider, this is not same as context provider, this is a "wrapper" provider
function Provider({ children }) {
  const [books, setBooks] = useState([]);
  
  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books');
     setBooks(response.data);
  };

  const editBookById = async (id, newTitle) => {
    const response = await axios.put('http://localhost:3001/books/' + id, {
      title: newTitle,
    });

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        // by returning response instead of only changed value, we will capture any other changes that occurred outside of this process (e.g. someone else changing the book)
        return { ...book, ...response.data };
      }
  
      return book;        
    });
  
    setBooks(updatedBooks);
  };
  
  const deleteBookById = async (id) => {
    await axios.delete('http://localhost:3001/books/' + id);
  
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
  
    setBooks(updatedBooks);
  };
  
  const createBook = async (title) => {
    const response = await axios.post('http://localhost:3001/books', {
      title,
    });
  
    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };  

  // because these have the same name as what I'm assigning, can just list instead of doing { fetchBooks: fetchBooks }: TRIPLE CHECK THAT YOU ARE USING THE CORRECT NAME 
  // most projects don't have this variable but rather share directly
  const valueToShare = {
    books: books,
    deleteBookById,
    editBookById,
    createBook,
    fetchBooks,
  };
  
  return <BooksContext.Provider value={ valueToShare }>
    {children}
  </BooksContext.Provider>;
}

export { Provider };
export default BooksContext;