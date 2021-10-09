import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Route, Switch, useRouteMatch } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import AddProduct from '../pages/admin/AddProduct';
import Dashboard from '../pages/admin/Dashboard';
import Product from '../pages/admin/Product';



function AdminLayout() {
    let { path } = useRouteMatch();
    return (
        <div>
            <div className="container-fluid p-0">
                <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                    <Navbar.Brand href="#home">
                        <img src="http://ecommerce.limmexbd.com/images/logo/615e99091e34f.png" alt="Logo" style={{ height: 30 }} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto admin-nav">
                            <NavLink className="text-white" activeClassName="admin-nav" to={path}>Dashboard</NavLink>
                            <NavLink className="text-white" activeClassName="admin-nav" to={`${path}/product`} >Product</NavLink>
                            <NavLink className="text-white" activeClassName="admin-nav" to={`${path}/orders`}>Order</NavLink>

                        </Nav>
                        <Nav>
                            <NavDropdown title="Admin" id="collasible-nav-dropdown" style={{ marginRight: 50 }}>
                                <NavDropdown.Item href="#action/3.1">Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
            </div>

            {/* product section  */}
            <Switch>
                <Route exact path={path}>
                    <Dashboard />
                </Route>
                <Route path={`${path}/product`}>
                    <Product />
                </Route>
                <Route path={`${path}/add-product`}>
                    <AddProduct />
                </Route>
            </Switch>


        </div>
    );
}

export default AdminLayout;
