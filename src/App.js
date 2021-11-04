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
            <Route exact path="/Action-games">
              <Row title="Action Games" fetchUrl={requests.fetchActionGames} />
            </Route>
            <Route exact path="/Racing-games">
              <Row title="Racing Games" fetchUrl={requests.fetchRacingGames} />
            </Route>
            <Route exact path="/Adventure-games">
              <Row title="Adventure Games" fetchUrl={requests.fetchAdventureGames} />
            </Route>
            <Route exact path="/Shooter-games">
              <Row title="Shooter Games" fetchUrl={requests.fetchShooterGames} />
            </Route>
            <Route exact path="/Strategy-games">
              <Row title="Strategy Games" fetchUrl={requests.fetchStrategyGames} />
            </Route>
            <Route exact path="/Fighting-games">
              <Row title="Fighting Games" fetchUrl={requests.fetchFightingGames} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
