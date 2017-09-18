import React from 'react';

class LoginForm extends React.Component {
  state = { username: '', password: '' };

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ loading: true });

    // axios.post(`${API_URL}/signup`, { username: this.state.username, password: this.state.password })
    // .then((response) => {
    //   this.setState({ loading: false });
    //   this.props.loginSuccess(response);
    // })
  }
  render() {
    if (this.state.loading) return <p>loading...</p>;

    return (
      <form onSubmit={this.handleSubmit}>
        <input />
        <input />
      </form>
    )
  }
}

export default LoginForm;
