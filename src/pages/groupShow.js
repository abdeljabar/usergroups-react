import { useParams } from "react-router-dom";
import Show from "../components/show";
import Field from "../components/field";

const GroupShow = () => {
  let { id } = useParams();
  return (
    <Show id={id}>
      <Field source="id" type="string" label="#" showLabel={true} />
      <Field source="name" type="string" label="Name" showLabel={true} />
      <Field
        source="description"
        type="text"
        label="Description"
        showLabel={true}
      />
    </Show>
  );
};

export default GroupShow;
