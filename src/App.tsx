import "./App.css";
import List from "./views/List";
import Detail from "./views/Detail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={List} />
        <Route path="/user/:userId" component={Detail} />
      </Switch>
    </Router>
  );
}

export default App;
