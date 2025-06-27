// import { Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
import { Link } from "react-router-dom";
import Login from "../src/pages/Login";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="text-center p-4">
      <p>Welcome to the Bible Reading Challenge Website</p>
      <br />
      <Login />
    </div>
  );
}

export default App;
