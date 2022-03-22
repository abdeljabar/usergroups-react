import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Header = () => {
  const isAuthenticated = useAuth();
  return (
    <header>
      <input id="nav" type="checkbox" />
      <label for="nav"></label>

      <nav>
        <ul>
          <li>
            <Link to="/">Users</Link>
          </li>
          <li>
            <Link to="/groups">Groups</Link>
          </li>
          {!isAuthenticated && (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
          {isAuthenticated && (
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
