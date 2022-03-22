import { useNavigate, useParams } from "react-router-dom";
import EditForm from "../components/EditForm";
import FormInput from "../components/formInput";
import useAuth from "../hooks/useAuth";

const GroupEdit = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const isAuthenticated = useAuth();

  if (!isAuthenticated) {
    navigate("/", { replace: true });
  }

  return (
    <EditForm resource="groups" to="/groups" id={id}>
      <FormInput source="name" type="text" label="Name" />
      <FormInput source="description" type="text" label="Description" />
    </EditForm>
  );
};

export default GroupEdit;
