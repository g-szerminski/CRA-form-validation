import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    username: "",
    email: "",
    pass: "",
    accept: false
  };

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    const type = e.target.type;
    if (type === "text" || type === "email" || type === "password") {
      this.setState({
        [name]: value
      });
    } else if (type === "checkbox") {
      const checked = e.target.checked;
      this.setState({
        [name]: checked
      });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("działa");
  };

  render() {
    return (
      <div className='App'>
        <form onSubmit={this.handleSubmit} noValidate>
          <label htmlFor='user'>
            Twoje imię:
            <input
              type='text'
              id='user'
              name='username'
              value={this.state.username}
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor='email'>
            Twój e-mail:
            <input
              type='email'
              id='email'
              name='email'
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor='password'>
            Twoje hasło:
            <input
              type='password'
              id='password'
              name='pass'
              value={this.state.pass}
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor='accept'>
            <input
              type='checkbox'
              id='accept'
              name='accept'
              checked={this.state.accept}
              onChange={this.handleChange}
            />
            Wyrażam zgodę wszelaką
          </label>

          <button>Zapisz się</button>
        </form>
      </div>
    );
  }
}

export default App;
