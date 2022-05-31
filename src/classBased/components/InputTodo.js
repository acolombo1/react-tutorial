import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { title } = this.state;
    const { addTodoProps } = this.props;
    if (title.trim()) {
      addTodoProps(title);
      this.setState({
        title: '',
      });
    } else {
      const label = document.getElementById('label');
      if (label.classList.contains('hideslowly')) label.classList.remove('hideslowly');
      setTimeout(() => {
        if (!label.classList.contains('hideslowly')) label.classList.add('hideslowly');
      }, 1000);
    }
  };

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input type="text" className="input-text" placeholder="Add Todo..." value={title} name="title" onChange={this.onChange} />
        <button type="submit" className="input-submit">Submit</button>
        <div id="label" className="hideslowly">Please add an item!</div>
      </form>
    );
  }
}
InputTodo.propTypes = { addTodoProps: PropTypes.func.isRequired };

export default InputTodo;
