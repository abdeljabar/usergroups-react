import { useNavigate, useParams } from "react-router-dom";
import EditForm from "../components/EditForm";
import FormInput from "../components/formInput";
import useAuth from "../hooks/useAuth";
import { encodeIri } from "../utils/common";

const GroupEdit = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const isAuthenticated = useAuth();

  if (!isAuthenticated) {
    navigate("/", { replace: true });
  }

  const handleSuccess = () => {
    navigate(`/groups/${encodeIri(id)}`, { replace: true });
  };

  return (
    <EditForm resource="groups" id={id} onSuccess={handleSuccess}>
      <FormInput source="name" type="text" label="Name" />
      <FormInput source="description" type="text" label="Description" />
    </EditForm>
  );
};

export default GroupEdit;
