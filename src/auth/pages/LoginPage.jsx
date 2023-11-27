import {useNavigate} from "react-router-dom";

export const LoginPage = () => {

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/', {replace: true})
  }

  return (
    <div className="container">
      <h1>Login Page</h1>
      <hr/>
      <button
        onClick={handleLogin}
        className="btn btn-success"
      >
        Login
      </button>
    </div>
  );
};