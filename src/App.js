import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Row from "./components/Row";
import requests from "./request";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
        <Route path="/">
          <Row title="Popular in 2021" fetchUrl={requests.fetchTop10} />
        </Route>
        <Route path="/action">
          <Row title="Action Games" fetchUrl={requests.fetchActionGames} />
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
