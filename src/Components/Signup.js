import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../Context/UserAuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      alert("Account Created Successfully");
      navigate("/login");
    } catch (err) {
      setError(err.message);
      console.log(error);
    }
  };

  return (
    <div>
      <form className="mt-36" onSubmit={handleSubmit}>
        <h2 className="text-3xl font-mono font-bold">
          Welcome To SignUp Page
        </h2>
        <div className="mt-3 flex flex-col">
          <label>Enter Your Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Type here"
            className="mt-3 mx-auto input input-bordered input-primary w-full max-w-xs"
          />
        </div>
        <div className="mt-3 flex flex-col">
          <label>Enter Your Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Type here"
            className="mt-3 mx-auto input input-bordered input-primary w-full max-w-xs"
          />
        </div>
        <button className="mt-4 btn btn-primary">SignUp</button>
      </form>
      <h2>
        Already have an account ?{" "}
        <Link className="underline" to="/login">
          Login
        </Link>
      </h2>
    </div>
  );
};

export default Signup;
