import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import users from "../users.json";
import "./register.css";

const Register = () => {
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [pwd, setPwd] = useState("");

  const handleSubmit = () => {
    users.push({ email, name: userName, password: pwd });
    navigate("/login");
  };

  return (
    <section className="sami">
      <h1>Register</h1>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <label className="label" htmlFor="username">
          Username:
        </label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          onChange={(e) => setUsername(e.target.value)}
          value={userName}
          required
        />

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
        <button className="button">Register</button>
      </form>
      <p>
        Have account
        <br />
        <span className="line">
          <Link to="/login">Login</Link>
        </span>
      </p>
    </section>
  );
};

export default Register;
