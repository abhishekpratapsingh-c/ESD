import { Component } from 'react';

class Login extends Component {
  
  googleLogin = () => {
    window.location.href = 'http://localhost:8080/oauth2/authorization/google';
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        <button onClick={this.googleLogin}>Login with Google</button>
      </div>
    );
  }
}

export default Login;
