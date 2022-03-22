import List from "../components/list";
import Field from "../components/field";
import FormInput from "../components/formInput";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

const GroupList = () => {
  const isAuthenticated = useAuth();
  const filters = [
    <FormInput source="id" type="text" label="#" />,
    <FormInput source="name" type="text" label="Name" />,
  ];

  return (
    <>
      {isAuthenticated ? (
        <Link to="/new-group">Create group</Link>
      ) : (
        <>
          <Link to="/login">Login</Link> to create a new group
        </>
      )}

      <List
        resource="groups"
        to="/groups"
        filters={filters}
        isAuthenticated={isAuthenticated}
      >
        <Field source="id" type="string" label="#" />
        <Field source="name" type="string" label="Name" />
      </List>
    </>
  );
};

export default GroupList;
