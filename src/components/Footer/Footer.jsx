import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Footer.css'


const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col md={4}>
                        <Link to='/' className='brand'>
                                Recommity
                        </Link>
                    </Col>
                    <Col md={8}>
                        <section>
                            <Link to='/ayuda'>
                                Ayuda
                            </Link>
                            <Link to='/politica-de-privacidad'>
                                Política de Privacidad
                            </Link>
                            <Link to='/terminos-y-condiciones'>
                                Términos y condiciones
                            </Link>
                        </section>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer