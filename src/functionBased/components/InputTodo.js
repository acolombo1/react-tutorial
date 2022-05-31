import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaPlusCircle } from 'react-icons/fa';

const InputTodo = (props) => {
  // could also use useState('')
  const [inputText, setInputText] = useState({ title: '' });
  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    const { addTodoProps } = props;
    e.preventDefault();
    if (inputText.title.trim()) {
      addTodoProps(inputText.title);
      setInputText({ title: '' });
    } else {
      const label = document.getElementById('label');
      label.innerHTML = 'Please input value...';
      if (label.classList.contains('hideslowly')) label.classList.remove('hideslowly');
      setTimeout(() => {
        if (!label.classList.contains('hideslowly')) label.classList.add('hideslowly');
      }, 1000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={inputText.title}
        name="title"
        onChange={onChange}
      />
      <button type="submit" className="input-submit">
        <FaPlusCircle />
      </button>
      <div id="label" className="hideslowly">Please add an item!</div>
    </form>
  );
};
InputTodo.propTypes = { addTodoProps: PropTypes.func.isRequired };

export default InputTodo;
