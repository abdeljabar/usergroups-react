import LoginForm from "../components/LoginForm";
import FormInput from "../components/formInput";

const Login = () => {
  return (
    <LoginForm resource="authentication_token" to="/">
      <FormInput source="username" type="text" label="Username" />
      <FormInput source="password" type="password" label="Password" />
    </LoginForm>
  );
};

export default Login;
