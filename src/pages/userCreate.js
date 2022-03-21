const UserCreate = () => {
  return (
    <Form resource="users">
      <FormInput source="firstName" type="string" label="First name" />
      <FormInput source="lastName" type="text" label="Last name" />
    </Form>
  );
};

export default UserCreate;
