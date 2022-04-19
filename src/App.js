import { Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Login />
      </Route>
      <Route path="/register" exact>
        <Register />
      </Route>
    </Switch>
  );
}

export default App;
