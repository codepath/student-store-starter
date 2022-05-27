import "./App.css";
import Mainpage from "./Components/Mainpage/Mainpage";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <Mainpage />
    </Router>
  );
}

export default App;
