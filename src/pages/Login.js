import LoginForm from "../components/LoginForm";
import FormInput from "../components/formInput";

const Login = () => {
  return (
    <>
      <LoginForm resource="authentication_token" to="/">
        <FormInput
          source="username"
          type="text"
          label="Username"
          hideLabel={true}
        />
        <FormInput
          source="password"
          type="password"
          label="Password"
          hideLabel={true}
        />
      </LoginForm>
    </>
  );
};

export default Login;
