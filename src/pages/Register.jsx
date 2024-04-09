import React, { useState } from "react";
import { register } from "../config/firebase";

const Register = () => {
  const [user, setUser] = useState({
    email: "",
    pass: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8 bg-black text-white">
      <h3 className="text-3xl font-thin">REGISTER</h3>
      <form
        className="flex flex-col gap-3 font-thin text-black"
        onSubmit={handleSubmit}
      >
        <input
          className="border-black text-center h-10 rounded-sm"
          type="email"
          name="email"
          placeholder="Enter your username"
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
        {/* <input
          className="border-black text-center h-10 rounded-sm"
          type="password"
          name="repeatPass"
          placeholder="Repeat your password"
          value={user.repeatPass}
          onChange={handleChange}
        /> */}
        <button className="text-black bg-slate-300 rounded-sm">Send</button>
      </form>
    </div>
  );
};

export default Register;
