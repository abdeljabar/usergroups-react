import CreateForm from "../components/CreateForm";
import FormInput from "../components/formInput";

const GroupCreate = () => {
  return (
    <CreateForm resource="groups" to="/groups">
      <FormInput source="name" type="text" label="Name" />
      <FormInput source="description" type="text" label="Description" />
    </CreateForm>
  );
};

export default GroupCreate;
