import "./App.css";
import Row from "./components/Row";
import requests from "./request";

function App() {
  return (
    <div className="App">
      <Row title="Popular Games" fetchUrl={requests.fetchTop10} />
      <Row title="Shooter Games" fetchUrl={requests.fetchShooterGames} />
      <Row title="Action Games" fetchUrl={requests.fetchActionGames} />
      <Row title="Indie Games" fetchUrl={requests.fetchIndieGames} />
      <Row title="This Month" fetchUrl={requests.fetchThisMonth}/>
    </div>
  );
}

export default App;
