import List from "../components/list";
import Field from "../components/field";
import FormInput from "../components/formInput";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

const UserList = () => {
  console.log("UserList");

  const isAuthenticated = useAuth();

  const filters = [
    <FormInput source="id" type="text" label="#" />,
    <FormInput source="firstName" type="text" label="First name" />,
    <FormInput source="lastName" type="text" label="Last name" />,
    <FormInput source="email" type="text" label="Email" />,
    <FormInput source="phone" type="text" label="Phone" />,
  ];

  return (
    <>
      <h2>List of users</h2>
      {isAuthenticated ? (
        <Link to="/new-user">Create user</Link>
      ) : (
        <>
          <Link to="/login">Login</Link> to create a new user
        </>
      )}

      <List
        resource="users"
        to="/"
        filters={filters}
        isAuthenticated={isAuthenticated}
      >
        <Field source="id" type="string" label="#" />
        <Field source="firstName" type="string" label="First name" />
        <Field source="lastName" type="text" label="Last name" />
        <Field source="email" type="text" label="Email" />
        <Field source="phone" type="text" label="Phone" />
      </List>
    </>
  );
};

export default UserList;
