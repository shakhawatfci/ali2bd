import { useContext } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useRouteMatch,
  NavLink
} from "react-router-dom";
import { CustomerAuthContext } from '../context/CustomerAuthContext';
import Dashboard from '../pages/customer/Dashboard';
import Login from '../pages/customer/Login';
import Home from '../pages/Home';


function DefaultLayout() {
  let { path, url } = useRouteMatch();
  const auth = useContext(CustomerAuthContext);
  return (
    <div>
      <div className="container-fluid p-0">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img src="http://ecommerce.limmexbd.com/images/logo/615e99091e34f.png" alt="Logo" style={{ height: 30 }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto admin-nav">
              <NavLink className="text-white" activeClassName="admin-nav" to={path}>Home</NavLink>
              <NavLink className="text-white" activeClassName="admin-nav" to={`${path}/cart`} >Cart(9)</NavLink>

            </Nav>
            <Nav>
              <NavDropdown title={auth && auth.customer ? auth.customer.name : 'Account'}
                className="text-center" id="collasible-nav-dropdown" style={{ marginRight: 50 }}>
                {!auth.customer && <Link to={`${path}/login`}>Login</Link>}
                {!auth.customer && <NavDropdown.Divider />}
                {!auth.customer && <Link to={`${path}/register`}>Register</Link>}
                {!auth.customer && <NavDropdown.Divider />}
                {(auth && auth.customer) && <Link to={`${path}/orders`} >My Orders</Link>}
                {(auth && auth.customer) && <NavDropdown.Divider />}
                {(auth && auth.customer) && <Link to={`${path}/profile`}>Profile</Link>}
                {(auth && auth.customer) && <NavDropdown.Divider />}
                {(auth && auth.customer) && <Link to={`${path}/logout`}>Logout</Link>}
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

        {!auth.customer ?
          (<Route path={`${path}/login`}>
            <Login />
          </Route>) :
          (<Redirect
            to={`${path}/dashboard`}
          />)}
        {auth.customer ?
          (<Route path={`${path}/dashboard`}>
            <Dashboard />
          </Route>) :
          (<Redirect
            to={`${path}/login`}
          />)}

      </Switch>

    </div >
  );
}

export default DefaultLayout;
