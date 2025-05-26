import LoginForm from "../components/auth/LoginForm";
import "./LoginPage.css";
import loginImage from "../images/login.png";

const LoginPage = () => {
  return (
    <div className="LoginPage">
      <div className="login-left-side">
        <img src={loginImage} alt="Login" />
      </div>
      <LoginForm />
    </div>
  );
};
export default LoginPage;
