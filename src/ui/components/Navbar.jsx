import {Link, NavLink, useNavigate} from 'react-router-dom';
import {useContext} from "react";
import {AuthContext} from "../../auth/index.js";

export const Navbar = () => {

  const {user, logout} = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    logout()
    navigate('/login', {
      replace: true // Evita volver al historial anterior
    })
  }


  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container">
        <Link
          className="navbar-brand"
          to="/"
        >
          HeroesSpa
        </Link>

        <div className="navbar-collapse">
          <div className="navbar-nav">

            <NavLink
              className={({isActive}) => `nav-item nav-link ${isActive ? "active" : ""}`}
              to="/marvel"
            >
              Marvel
            </NavLink>

            <NavLink
              className={({isActive}) => `nav-item nav-link ${isActive ? "active" : ""}`}
              to="/dc"
            >
              DC
            </NavLink>

            <NavLink
              className={({isActive}) => `nav-item nav-link ${isActive ? "active" : ""}`}
              to="/search"
            >
              Search
            </NavLink>
          </div>
        </div>

        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
          <ul className="navbar-nav ml-auto">
            <div className="nav-item nav-link">
              {user?.name}
            </div>
            <button
              className="nav-item nav-link btn btn-secondary"
              onClick={handleLogout}
            >
              Logout
            </button>
          </ul>
        </div>
      </div>
    </nav>
  )
}