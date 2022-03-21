import List from "../components/list";
import Field from "../components/field";
import FormInput from "../components/formInput";

const GroupList = () => {
  const filters = [
    <FormInput source="id" type="text" label="#" />,
    <FormInput source="name" type="text" label="Name" />,
  ];

  return (
    <List resource="groups" to="/groups" filters={filters}>
      <Field source="id" type="string" label="#" />
      <Field source="name" type="string" label="Name" />
    </List>
  );
};

export default GroupList;
