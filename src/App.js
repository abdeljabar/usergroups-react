import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserList from "./pages/userList";
import UserShow from "./pages/userShow";
import GroupList from "./pages/groupList";
import GroupShow from "./pages/groupShow";
import "./App.css";

const queryClient = new QueryClient();

function App() {
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
              {/*<li>
                <Link to="/login">Login</Link>
  </li>*/}
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<UserList />} />,
            <Route path="/:id" element={<UserShow />} />,
            <Route path="/groups" element={<GroupList />} />,
            <Route path="/groups/:id" element={<GroupShow />} />,
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
