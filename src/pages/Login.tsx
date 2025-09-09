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
    <div className="flex justify-center items-center">
      <div className="shadow-lg rounded-lg p-8 w-full max-w-md">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="p-px">
              <input
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2"
                placeholder="Email"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="p-px">
              <input
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2"
                placeholder="Password"
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
      </div>
    </div>
  );
};

export default Login;
