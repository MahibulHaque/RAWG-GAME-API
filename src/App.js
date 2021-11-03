import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Row from "./components/Row";
import Sidebar from "./components/Sidebar";
import requests from "./request";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="main_body">
          <Sidebar />
          <Switch>
            <Route exact from="/">
              <Row title="Popular in 2021" fetchUrl={requests.fetchTop10} />
            </Route>
            <Route exact path="/action">
              <Row title="Action Games" fetchUrl={requests.fetchActionGames} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
