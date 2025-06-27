import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login:", {
      firstName,
      lastName,
      username,
      password,
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6">New User Signup</h2>
        <form className="space-y-4">
          <input
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2"
            placeholder="First Name"
            type="text"
            required
          />
          <input
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2"
            placeholder="Last Name"
            type="text"
            required
          />
          <input
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2"
            placeholder="Email"
            type="email"
            required
          />
          <input
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2"
            placeholder="Password"
            type="password"
            required
          />
          <button
            type="submit"
            className="w-full p-3 rounded-lg hover:bg-gray-200 transition"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center mt-4">
          Already have an account?
          <Link to="/signin" className="hover:underline ml-1">
            Log in Here!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
