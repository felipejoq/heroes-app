import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../context";

export const LoginPage = () => {

  const {login} = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogin = () => {
    login('Felipe')

    const lastPath = localStorage.getItem('lastPath') || '/'

    navigate(lastPath, {replace: true})
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