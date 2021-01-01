import "./App.css";
import Cards from "./components/cards";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SubCard from "./components/subCard";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Cards} />
          <Route path="/python" exact component={SubCard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
