import List from "../components/list";
import Field from "../components/field";

const GroupList = () => {
  return (
    <List resource="groups" to="/groups">
      <Field source="id" type="string" label="#" />
      <Field source="name" type="string" label="Name" />
    </List>
  );
};

export default GroupList;
