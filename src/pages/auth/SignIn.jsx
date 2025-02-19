import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ArrowRightIcon from "../../assets/svg/keyboardArrowRightIcon.svg";
import visibilityIcon from "../../assets/svg/visibilityIcon.svg";
import OAuth from "../../components/OAuth";
export const ArrowRightIconComponent = () => (
  <img src={ArrowRightIcon} alt="" />
);

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [fromData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = fromData;
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Welcome Back!</p>
        </header>

        <main>
          <form onSubmit={onSubmit}>
            <input
              type="email"
              className="emailInput"
              placeholder="Email"
              id="email"
              value={email}
              onChange={onChange}
            />

            <div className="passwordInputDiv">
              <input
                type={showPassword ? "text" : "password"}
                className="passwordInput"
                placeholder="Password"
                id="password"
                value={password}
                onChange={onChange}
              />

              <img
                src={visibilityIcon}
                className="showPassword"
                alt="show password"
                onClick={() => setShowPassword((prevState) => !prevState)}
              />
            </div>

            <Link to="/forgot-password" className="forgotPasswordLink">
              Forgot Password
            </Link>

            <div className="signInBar">
              <p className="signInText">Sign In</p>
              <button className="signInButton">
                <ArrowRightIconComponent />
              </button>
            </div>
          </form>

          <OAuth />

          <Link to="/sign-up" className="registerLink">
            Sign Up Instead
          </Link>
        </main>
      </div>
    </>
  );
};

export default SignIn;
