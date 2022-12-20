import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faGear, faIdCard } from '@fortawesome/free-solid-svg-icons'
import Brand from '../Brand/Brand'
import './Navbar.css'


const Navbar = () => {
    return (
        <Nav>
            <Brand />
            <Link to='/editar'>
                <FontAwesomeIcon icon={faEdit} />
                <p>Editar</p>
            </Link>
            <Link to='/tarjetero'>
                <FontAwesomeIcon icon={faIdCard} />
                <p>Tarjetero</p>
            </Link>
            <Link to='/ajustes'>
                <FontAwesomeIcon icon={faGear} />
                <p>Ajustes</p>
            </Link>
        </Nav>
    )
}

export default Navbar