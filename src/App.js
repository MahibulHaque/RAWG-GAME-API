import "./App.css";
import Row from "./components/Row";
import requests from "./request";

function App() {
  return <div className="App">
    <Row title="Popular Games" fetchUrl={requests.fetchTop10}/>
  </div>;
}

export default App;
