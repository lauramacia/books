import { useState } from 'react';

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => { 
    event.preventDefault(); // do not reload the page when submitting the form

    onSubmit(book.id, title);
    console.log('Save book with title: ', title);
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