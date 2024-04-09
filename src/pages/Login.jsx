import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { login } from "../config/firebase";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    pass: "",
  });

  const navigate = useNavigate();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: '/' } };
  console.log(from);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(user);
      navigate(-1);
      console.log("back");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8 bg-black text-white">
      <h3 className="text-3xl font-thin">LOGIN</h3>

      <form
        className="flex flex-col gap-4 font-thin text-black"
        onSubmit={handleSubmit}
      >
        <input
          className="border-black text-center h-10 rounded-sm"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={user.email}
          onChange={handleChange}
        />
        <input
          className="border-black text-center h-10 rounded-sm"
          type="password"
          name="pass"
          placeholder="Enter your password"
          value={user.pass}
          onChange={handleChange}
        />
        <button className="text-black bg-slate-300 rounded-sm">Send</button>
      </form>

      <Link
        to="/register"
        className="text-indigo-300 text-base underline font-thin"
      >
        Create an account here...
      </Link>
    </div>
  );
};

export default Login;
