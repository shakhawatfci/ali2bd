import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import AdminLayout from "./layouts/AdminLayout";
import CustomerAuthContextProvider from "./context/CustomerAuthContext";




function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path="/home">
            <CustomerAuthContextProvider>
              <DefaultLayout />
            </CustomerAuthContextProvider>
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
