import { Card, Modal } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import AOS from 'aos'
import Brand from '../components/Brand/Brand'
import Footer from '../components/Footer/Footer'
import Login from '../components/Login/Login'
import Signup from '../components/Signup/Signup'
import { Link } from 'react-router-dom'


const Home = () => {
    useEffect(() => {
        AOS.init({ duration : 2000 })
        AOS.refresh()
    }, [])
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
  
    const handleClose1 = () => setShow1(false)
    const handleShow1 = () => setShow1(true)
    
    const handleClose2 = () => setShow2(false)
    const handleShow2 = () => setShow2(true)
    return (
        <>
            <nav>
                <img src='../../img/vector1.png'
                     alt='Guerrero bárbaro'
                     className='warrior1'
                     data-aos='fade-left'
                     data-aos-duration='700' />
                <Card data-aos='zoom-out' data-aos-delay='300'>
                    <Brand />
                    <figure>
                        <button onClick={handleShow1}>
                            Entra en tu perfil de guerrero
                        </button>
                        <button className='second' onClick={handleShow2}>
                            Inicia una nueva aventura
                        </button>
                        <Link to={'/perfil'} className='link'>
                            Ver el perfil
                        </Link>
                    </figure>
                </Card>
                <img src='../../img/vector2.png'
                     alt='Samurai'
                     className='warrior2'
                     data-aos='fade-right'
                     data-aos-duration='700' />
            </nav>
            <Footer />
    
            <Modal show={show1} onHide={handleClose1} centered className='modalLogin'>
                <Modal.Body>
                    <h2>Seguimos luchando</h2>
                    <p>Entra y que siga la lucha</p>
                    <Login />
                </Modal.Body>
            </Modal>
            
            <Modal show={show2} onHide={handleClose2} centered className='modalSignup'>
                <Modal.Body>
                    <h2>Empieza la aventura</h2>
                    <p>Crea una cuenta y que comience la aventura</p>
                    <Signup /> 
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Home