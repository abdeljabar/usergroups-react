import List from "../components/list";
import Field from "../components/field";
import FormInput from "../components/formInput";

const UserList = () => {
  console.log("UserList");

  const filters = [
    <FormInput source="id" type="text" label="#" />,
    <FormInput source="firstName" type="text" label="First name" />,
    <FormInput source="lastName" type="text" label="Last name" />,
    <FormInput source="email" type="text" label="Email" />,
    <FormInput source="phone" type="text" label="Phone" />,
  ];

  return (
    <List resource="users" to="/" filters={filters}>
      <Field source="id" type="string" label="#" />
      <Field source="firstName" type="string" label="First name" />
      <Field source="lastName" type="text" label="Last name" />
      <Field source="email" type="text" label="Email" />
      <Field source="phone" type="text" label="Phone" />
    </List>
  );
};

export default UserList;
