import { Container, Form, Row, Button } from 'react-bootstrap';
import { useState } from 'react';
import axios from '../../axios';
import tostMessage from '../../toast/Toast';
function Login() {
    const [form, setForm] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});
    const [formLoading, setLoading] = useState(false);

    function handleLogin(e) {
        e.preventDefault();
        setLoading(true)
        axios.post('login', form)
            .then(response => {
                localStorage.setItem("customer_token", JSON.stringify(response.data.token));
                localStorage.setItem("customer", JSON.stringify(response.data.user));
                setErrors({})
                tostMessage({ icon: 'success', 'message': 'You are Logged in' });
            }).catch(error => {

                if (error.response.status === 422) {
                    setErrors(error.response.data.errors);
                }
                else {
                    tostMessage({ icon: 'error', 'message': error.data.message });
                }
            }).finally(() => setLoading(false));
    }
    return (
        <Container className="mt-5">
            <Row className="mt-2">
                <h4 className="text-center color-red">Login</h4>

                <div className="col-md-6 mx-auto">
                    <Form onSubmit={handleLogin}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address {errors.hasOwnProperty('email') && <span className="text-danger">{errors.email[0]}</span>}</Form.Label>
                            <Form.Control type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password {errors.hasOwnProperty('password') && <span className="text-danger">{errors.password[0]}</span>}</Form.Label>
                            <Form.Control type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            {formLoading ? 'Logging in...' : 'Login'}
                        </Button>
                    </Form>
                </div>
            </Row>
        </Container>
    )
}

export default Login;