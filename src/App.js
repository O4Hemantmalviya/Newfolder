import "./App.css";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Recharge from "./Components/Recharge";
import Register from "./Components/Register";
import { BrowserRouter, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/Login" component={Login} />
        <Route path="/" component={Register} />
        <Route path="/Home" component={Home} />
        <Route path="/Recharge" component={Recharge} />
      </BrowserRouter>
    </div>
  );
}

export default App;
