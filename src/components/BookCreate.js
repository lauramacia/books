import { useState } from "react";

function BookCreate({ onCreate }) {
  const [title, setTitle] = useState('');

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // do no reload the page when submitting form
    onCreate(title);
    setTitle(''); // clear the input field
  };
  
  return <div className="book-create">
    <h3>Add a Book</h3>
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input className="input" value={title} onChange={handleChange}/>      
      <button className="button">Create</button>
    </form>
  </div>;
}

export default BookCreate;