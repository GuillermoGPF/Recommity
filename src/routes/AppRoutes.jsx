import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Profile from '../pages/Profile'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/perfil' element={<Profile />} />
        </Routes>
    )
}

export default AppRoutes