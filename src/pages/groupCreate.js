import Form from "../components/form";
import FormInput from "../components/formInput";

const GroupCreate = () => {
  return (
    <Form resource="groups" to="/groups">
      <FormInput source="name" type="text" label="Name" />
      <FormInput source="description" type="text" label="Description" />
    </Form>
  );
};

export default GroupCreate;
