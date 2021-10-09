import { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import axios from '../../axios';
import tostMessage from '../../toast/Toast';
function AddProduct() {
    const [product, setProduct] = useState({
        name: '',
        image: '',
        qty: '',
        price: '',
        description: ''
    });
    const [errors, setErrors] = useState({});
    const [formLoading, setLoading] = useState(false);

    function onImageUpload(e) {
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length) return;
        let file = files[0];
        let reader = new FileReader();
        reader.onload = (e) => {
            // form.image_one = e.target.result;
            setProduct({ ...product, image: e.target.result })
        };
        reader.readAsDataURL(file);
    }

    function AddProduct(e) {
        e.preventDefault();
        setLoading(true)
        axios.post('product', product)
            .then(response => {
                console.log(response);
                tostMessage({ icon: 'success', 'message': 'Product Created' });
                setProduct({
                    name: '',
                    image: '',
                    qty: '',
                    price: '',
                    description: ''
                });
                setErrors({});
            })
            .catch(error => {
                tostMessage({ icon: 'error', 'message': 'Error' });
                if (error.response.status === 422) {
                    setErrors(error.response.data.errors);
                }
            }).finally(() => setLoading(false));

    }
    return (
        <Container className="mt-5">
            <Row>

            </Row>
            <Row className="mt-2">
                <h3 className="text-center">Add  Products</h3>
                <Col md={6} className="mx-auto">
                    <Form onSubmit={AddProduct}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Product Name * {errors.hasOwnProperty('name') && <span className="text-danger">{errors.name[0]}</span>}</Form.Label>
                            <Form.Control value={product.name} onChange={(e) => setProduct({ ...product, name: e.target.value })} type="text" placeholder="T shirt" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Product Image {errors.hasOwnProperty('image') && <span className="text-danger">{errors.image[0]}</span>}  </Form.Label> <br />
                            {product.image && <img src={product.image} alt="Imag" height="80" />}
                            <Form.Control type="file" placeholder="Image" accept=".png,.jpeg,.jpg,.webp" onChange={onImageUpload} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Price {errors.hasOwnProperty('price') && <span className="text-danger">{errors.price[0]}</span>}</Form.Label>
                            <Form.Control value={product.price} onChange={(e) => setProduct({ ...product, price: e.target.value })}
                                type="number" step="any" placeholder="Price" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Qty {errors.hasOwnProperty('qty') && <span className="text-danger">{errors.qty[0]}</span>}</Form.Label>
                            <Form.Control value={product.qty} onChange={(e) => setProduct({ ...product, qty: e.target.value })} type="number" placeholder="Qty" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Product Description</Form.Label>
                            <Form.Control value={product.description} onChange={(e) => setProduct({ ...product, description: e.target.value })} as="textarea" rows={3} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Button type="submit" variant="primary">{formLoading ? 'Saving...' : 'Save'}</Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default AddProduct;