import { Form } from 'react-bootstrap'


const Login = () => {
    return (
        <Form>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' name='email' />
            </Form.Group>

            <Form.Group>
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type='password' name='password' />
            </Form.Group>
            
            <button type='submit'>Entrar</button>
        </Form>
    )
}

export default Login