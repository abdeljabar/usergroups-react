import { useParams } from "react-router-dom";
import EditForm from "../components/EditForm";
import FormInput from "../components/formInput";

const GroupEdit = () => {
  let { id } = useParams();
  return (
    <EditForm resource="groups" to="/groups" id={id}>
      <FormInput source="name" type="text" label="Name" />
      <FormInput source="description" type="text" label="Description" />
    </EditForm>
  );
};

export default GroupEdit;
