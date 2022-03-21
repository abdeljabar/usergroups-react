import { useParams } from "react-router-dom";
import Show from "../components/show";
import Field from "../components/field";

const UserShow = () => {
  let { id } = useParams();
  return (
    <Show id={id}>
      <Field source="id" type="string" label="#" showLabel={true} />
      <Field
        source="firstName"
        type="string"
        label="First name"
        showLabel={true}
      />
      <Field source="email" type="text" label="Email" showLabel={true} />
      <Field source="phone" type="text" label="Phone" showLabel={true} />
      <Field source="type" type="text" label="Type" showLabel={true} />
    </Show>
  );
};

export default UserShow;
