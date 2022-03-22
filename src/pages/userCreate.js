import { useNavigate } from "react-router-dom";
import CreateForm from "../components/CreateForm";
import FormInput from "../components/formInput";
import useAuth from "../hooks/useAuth";

const UserCreate = () => {
  const navigate = useNavigate();
  const isAuthenticated = useAuth();

  if (!isAuthenticated) {
    navigate("/", { replace: true });
  }

  return (
    <>
      <h2>Create a new user</h2>
      <CreateForm resource="users" to="/">
        <FormInput source="firstName" type="text" label="First name" />
        <FormInput source="lastName" type="text" label="Last name" />
        <FormInput source="email" type="text" label="Email" />
        <FormInput source="phone" type="tel" label="Phone" />
        <FormInput source="age" type="number" label="Age" />
        <FormInput source="type" type="text" label="Type" />
      </CreateForm>
    </>
  );
};

export default UserCreate;
