import { QueryClientProvider, QueryClient } from "react-query";
import "./App.css";
import Field from "./components/field";
import Form from "./components/form";
import FormInput from "./components/formInput";
import List from "./components/list";
import Show from "./components/show";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <List resource="groups">
          <Field source="name" type="string" label="Name" />
          <Field source="description" type="text" label="Description" />
        </List>

        <Show iri="/groups/85">
          <Field source="name" type="string" label="Name" showLabel={true} />
          <Field
            source="description"
            type="text"
            label="Description"
            showLabel={true}
          />
        </Show>

        <Form resource="groups">
          <FormInput source="name" type="string" label="Name" />
          <FormInput source="description" type="text" label="Description" />
        </Form>
      </div>
    </QueryClientProvider>
  );
}

export default App;
