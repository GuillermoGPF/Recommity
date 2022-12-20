import { Container } from 'react-bootstrap'


const NotFound = () => {
    return (
        <Container className='error'>
            <h2>Error 404</h2>
            <p>No se encuentra la página</p>
        </Container>
    )
}

export default NotFound