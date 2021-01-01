import "./App.css";
import Cards from "./components/cards";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SubCard from "./components/subCard";
import NotFound from "./components/404";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Cards} />
          <Route path="/python" exact component={SubCard} />
          <Route path="/" render={() => <NotFound/>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
