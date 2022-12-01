import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";
import users from "../users.json";
import { useUserContext } from "../providers/UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const [user, setUser] = useUserContext();
  const navigate = useNavigate();

  const handleSubmit = () => {
    const existsWithEmail = users.some(
      (x) => x.email === email && x.password === pwd
    );

    if (existsWithEmail) {
      setUser!({ email: email });
      navigate("/");
    } else {
      setErrMessage("Login Failed");
    }
  };

  return (
    <section className="sami">
      <h1>Login</h1>
      {errMessage && <h1>{errMessage}</h1>}
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <label className="label" htmlFor="email">
          Email:
        </label>
        <input
          type="text"
          id="email"
          autoComplete="off"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />

        <label className="label" htmlFor="password">
          Password:
        </label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPwd(e.target.value)}
          value={pwd}
          required
        />
        <button className="button">Login</button>
      </form>
      <p>
        Register here
        <br />
        <span className="line">
          <Link to="/register">Register</Link>
        </span>
      </p>
    </section>
  );
};

export default Login;
