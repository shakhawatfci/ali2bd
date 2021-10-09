import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import Login from '../pages/customer/Login';
import Home from '../pages/Home';


function DefaultLayout() {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <div className="container-fluid p-0">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img src="http://ecommerce.limmexbd.com/images/logo/615e99091e34f.png" alt="Logo" style={{ height: 30 }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link to="/">Home</Nav.Link>
              <Nav.Link to="/cart">Cart</Nav.Link>

            </Nav>
            <Nav>
              <NavDropdown title="Account" className="text-center" id="collasible-nav-dropdown" style={{ marginRight: 50 }}>
                <Link to="/login">Login</Link>
                <NavDropdown.Divider />
                <Link to="/register">Register</Link>
                <NavDropdown.Divider />
                <Link to="/orders">My Orders</Link>
                <NavDropdown.Divider />
                <Link to="/profile">Profile</Link>
              </NavDropdown>
            </Nav>

          </Navbar.Collapse>
        </Navbar>
      </div>

      {/* product section  */}

      <Switch>
        <Route exact path={path}>
          <Home />
        </Route>
        <Route path={`${path}/login`}>
          <Login />
        </Route>
      </Switch>

    </div>
  );
}

export default DefaultLayout;
