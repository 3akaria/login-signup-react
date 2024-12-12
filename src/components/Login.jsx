import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post('http://localhost:8000/', {
          email,
          password,
        })
        .then((res) => {
          if (res.data == 'exist') {
            history('/home', { state: { id: email } });
          } else if (res.data == 'notexist') {
            // history('/signup', {});
            alert('User have not signed up!');
          }
        })
        .catch((e) => {
          alert('Wrong details');
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className='login'>
      <h1>Login Page.</h1>
      <form action='' method='post'>
        <input
          type='email'
          onChange={(e) => setEmail(e.target.value)}
          name='email'
          placeholder='Email'
        />
        <input
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          name='password'
          placeholder='Password'
        />
        <input type='submit' value='Login' onClick={submit} />
      </form>
      <br />
      <p>OR</p>
      <br />
      <Link to='/signup'>Signup Page</Link>
    </div>
  );
};

export default Login;
