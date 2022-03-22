import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserList from "./pages/userList";
import UserShow from "./pages/userShow";
import UserCreate from "./pages/userCreate";
import UserEdit from "./pages/userEdit";
import GroupList from "./pages/groupList";
import GroupShow from "./pages/groupShow";
import GroupCreate from "./pages/groupCreate";
import GroupEdit from "./pages/groupEdit";
import Login from "./pages/Login";
import useAuth from "./hooks/useAuth";
import Logout from "./pages/Logout";

const queryClient = new QueryClient();

function App() {
  const isAuthenticated = useAuth();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="App">
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
          <Routes>
            <Route path="/" element={<UserList />} />,
            <Route path="/:id" element={<UserShow />} />,
            <Route path="/:id/edit" element={<UserEdit />} />,
            <Route path="/new-user" element={<UserCreate />} />,
            <Route path="/new-group" element={<GroupCreate />} />,
            <Route path="/groups" element={<GroupList />} />,
            <Route path="/groups/:id" element={<GroupShow />} />,
            <Route path="/groups/:id/edit" element={<GroupEdit />} />,
            <Route path="/login" element={<Login />} />,
            <Route path="/logout" element={<Logout />} />,
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
