import { Card, Col, Container, Row } from 'react-bootstrap'
import Navbar from '../components/Navbar/Navbar'


const Profile = () => {
    return (
        <article>
            <img src='' alt='' className='bg' />
            <Container>
                <Row className='justify-content-center'>
                    <Col lg={8}>
                        <Card className='profile'>
                            <Navbar />
                            <hr />
                            <Card.Img src='../../img/bg.jpg' />
                            <h2>Guillermo Pérez</h2>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </article>
    )
}

export default Profile