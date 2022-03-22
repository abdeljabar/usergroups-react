import { useNavigate } from "react-router-dom";
import CreateForm from "../components/CreateForm";
import FormInput from "../components/formInput";
import useAuth from "../hooks/useAuth";

const GroupCreate = () => {
  const navigate = useNavigate();
  const isAuthenticated = useAuth();

  if (!isAuthenticated) {
    navigate("/", { replace: true });
  }

  const handleSuccess = () => {
    navigate("/groups", { replace: true });
  };

  return (
    <CreateForm resource="groups" onSuccess={handleSuccess}>
      <FormInput source="name" type="text" label="Name" />
      <FormInput source="description" type="text" label="Description" />
    </CreateForm>
  );
};

export default GroupCreate;
