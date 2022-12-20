import { Form } from 'react-bootstrap'


const Signup = () => {
    return (
        <Form>
            <Form.Group>
                <Form.Label>Nombre</Form.Label>
                <Form.Control type='text' name='name'  />
            </Form.Group>

            <Form.Group>
                <Form.Label>Apellidos</Form.Label>
                <Form.Control type='text' name='lastname' />
            </Form.Group>

            <Form.Group>
                <Form.Label>Profesión</Form.Label>
                <Form.Control type='text' name='job' />
            </Form.Group>

            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' name='email' />
            </Form.Group>

            <Form.Group>
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type='password' name='password' />
            </Form.Group>
            
            <button type='submit'>Empezar</button>
        </Form>
    )
}

export default Signup