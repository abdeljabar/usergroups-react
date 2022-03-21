import Form from "../components/form";
import FormInput from "../components/formInput";

const UserCreate = () => {
  return (
    <Form resource="users" to="/">
      <FormInput source="firstName" type="string" label="First name" />
      <FormInput source="lastName" type="text" label="Last name" />
      <FormInput source="email" type="text" label="Email" />
      <FormInput source="phone" type="tel" label="Phone" />
      <FormInput source="age" type="number" label="Age" />
      <FormInput source="type" type="text" label="Type" />
    </Form>
  );
};

export default UserCreate;
