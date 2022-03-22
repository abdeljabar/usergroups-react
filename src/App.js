import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/userList";
import UserShow from "./pages/userShow";
import UserCreate from "./pages/userCreate";
import UserEdit from "./pages/userEdit";
import GroupList from "./pages/groupList";
import GroupShow from "./pages/groupShow";
import GroupCreate from "./pages/groupCreate";
import GroupEdit from "./pages/groupEdit";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Header from "./components/Header";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header />
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
      </Router>
    </QueryClientProvider>
  );
}

export default App;
