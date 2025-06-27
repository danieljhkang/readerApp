// import { Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
import { Link } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="text-center p-4">
      <p>Welcome to the Bible Reading Challenge Website</p>
      <Link to={"/signup"}>New User? Register Here!</Link>
      <br />
      <Link to={"/signin"}>Returning User? Log In Here!</Link>
    </div>
  );
}

export default App;
