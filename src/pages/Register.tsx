import { useState } from "react";
import { Link } from "react-router-dom";

// const { data, error } = await supabase.auth.signUp({
//   email: "example@email.com",
//   password: "example-password",
//   code: "ABCDEFG",
// });

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login:", {
      firstName,
      lastName,
      username,
      password,
    });
  };

  // const { data, error } = await supabase.auth.signUp({
  //   email: "example@email.com",
  //   password: "example-password",
  // });

  return (
    <div>
      <div className="text-center">
        <h2 className="text-3xl font-bold p-3">New User Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="p-px">
            <label>First Name:</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="p-px">
            <label>Last Name:</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="p-px">
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="p-px">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="p-3">
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
      <Link to={"/"}>Already have an account? Login Here!</Link>
    </div>
  );
};

export default Register;
