
import { Col, Container, Row, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from '../../axios';
import { useState, useEffect } from 'react';
import Pagination from "react-js-pagination";
function Product() {

    const [products, setProducts] = useState([]);
    const [meta, setMeta] = useState('');
    const [link, setLink] = useState('');
    const [keyword, setKeyword] = useState('');
    const [orderBy, setOrderBy] = useState('');

    function getProduct(page = 1) {
        axios.get(`product?page=${page}&keyword=${keyword}&orderBy=${orderBy}`).then(response => {
            setProducts(response.data.data);
            setMeta(response.data.meta);
            setLink(response.data.link);
        })
    }
    useEffect(() => {
        getProduct();
        return () => {
            // cleanup
        }
    }, []);
    return (
        <Container className="mt-5">
            <Row>

            </Row>
            <Row className="mt-2">
                <Col md={12} style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h3 className="text-center">Product List</h3>
                    <Link className="btn btn-success" to="/admin/add-product">Add Product</Link>
                </Col>
                <Col md={12} className="mt-2">
                    <div className="table-responsive">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Qty</th>
                                    <th>Image</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product, index) => {
                                    return <tr key={product.id}>
                                        <td>{index + 1}</td>
                                        <td>{product.name}</td>
                                        <td>{product.price}</td>
                                        <td>{product.qty}</td>
                                        <td><img height="50" src={product.image} alt="product" /></td>
                                        <td>
                                            <Link className="btn btn-primary" to="product/edit/">Edit</Link>
                                            <Link className="btn btn-danger" to="product/edit/">Delete</Link>
                                        </td>
                                    </tr>
                                })}

                            </tbody>
                        </Table>
                    </div>
                    <div>

                        {(meta && meta.last_page > 1) && <Pagination
                            activePage={meta?.current_page ? meta?.current_page : 0}
                            itemsCountPerPage={meta?.per_page ? meta?.per_page : 0}
                            totalItemsCount={meta?.total ? meta?.total : 0}
                            onChange={(pageNumber) => {
                                getProduct(pageNumber)
                            }}
                            pageRangeDisplayed={8}
                            itemClass="page-item"
                            linkClass="page-link"
                            firstPageText="First Page"
                            lastPageText="Last Lage"
                        />}
                    </div>
                </Col>
            </Row>
        </Container >
    )
}

export default Product;