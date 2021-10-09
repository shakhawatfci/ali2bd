import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import AdminLayout from "./layouts/AdminLayout";




function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <DefaultLayout />
          </Route>
          <Route path="/admin">
            <AdminLayout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
