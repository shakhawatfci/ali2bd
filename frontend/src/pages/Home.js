import { Card, Col, Container, Row } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';
function Home() {
    return (
        <Container className="mt-5">
            <Row>

            </Row>
            <Row className="mt-2">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 12, 41].map((ele, index) => {
                    return <Col md={3} xs={6} className="mt-2" key={index}>
                        <Card >
                            <Card.Img variant="top" src="http://ecommerce.limmexbd.com/images/product/feature/5f7efce245291.jpeg" alt="somethig" />
                            <Card.Body>
                                <Card.Title>Banan</Card.Title>
                                <Card.Text>
                                    <span className="text-danger">120$</span>
                                </Card.Text>
                                <Button className="btn btn-primary" variant="primary">Add To Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                })}

            </Row>
        </Container>
    )
}

export default Home;