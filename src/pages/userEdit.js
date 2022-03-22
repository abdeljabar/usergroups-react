import { useNavigate, useParams } from "react-router-dom";
import EditForm from "../components/EditForm";
import FormInput from "../components/formInput";
import useAuth from "../hooks/useAuth";

const UserEdit = () => {
  let { id } = useParams();

  const navigate = useNavigate();
  const isAuthenticated = useAuth();

  if (!isAuthenticated) {
    navigate("/", { replace: true });
  }

  return (
    <EditForm resource="users" to="/" id={id}>
      <FormInput source="firstName" type="string" label="First name" />
      <FormInput source="lastName" type="text" label="Last name" />
      <FormInput source="email" type="text" label="Email" />
      <FormInput source="phone" type="tel" label="Phone" />
      <FormInput source="age" type="number" label="Age" />
      <FormInput source="type" type="text" label="Type" />
    </EditForm>
  );
};

export default UserEdit;
