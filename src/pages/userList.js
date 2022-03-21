import List from "../components/list";
import Field from "../components/field";

const UserList = () => {
  console.log("UserList");
  return (
    <List resource="users" to="/">
      <Field source="id" type="string" label="#" showLabel={true} />
      <Field source="firstName" type="string" label="First name" />
      <Field source="lastName" type="text" label="Last name" />
      <Field source="email" type="text" label="Email" />
      <Field source="phone" type="text" label="Phone" />
    </List>
  );
};

export default UserList;
