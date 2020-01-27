import React, {useState} from 'react';
import './App.css';

function AddButton(props) {

  const [input, setInput] = useState('');

  console.log(input)

  return (
    <div className="add-button">
        <label>
        <input onChange={(event) => 
          setInput(event.target.value)
        } type="text" name="add to do list" />
          </label>
      <button type="submit" onClick={(event) => {
        props.todoOnClick(input)
        event.preventDefault()
      }}>AddButton</button>
    </div>
  );
}

export default AddButton;