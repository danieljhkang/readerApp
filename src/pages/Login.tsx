import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //   const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login:", { username, password });
  };

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold p-3">Login</h2>
      <form onSubmit={handleSubmit}>
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
          <button type="submit">Login</button>
        </div>
      </form>
      <br />
      <Link to={"/signup"}>New User? Register Here!</Link>
    </div>
  );
};

export default Login;
