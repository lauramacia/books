import { useState } from 'react';
import useBooksContext from "../hooks/use-books-context";

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);
  const { editBookById } = useBooksContext();

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => { 
    event.preventDefault(); // do not reload the page when submitting the form

    onSubmit(); //this will close the form
    editBookById(book.id, title);
  };
  
  return <form className="book-edit" onSubmit={handleSubmit}>
    <label>Title</label>
    <input className="input" value={title} onChange={handleChange}/>
    <button className="button is-primary">
      Save
    </button>
  </form>;
}

export default BookEdit;