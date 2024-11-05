
import './Navbar.css'
import { NewPostModal } from '../../newPostModal/NewPostModal.jsx'


export const NavBar = ({userName, setIsLoggeding})=> {

    const handleLogOut = () => {
        setIsLoggeding(false)
    }

    return (<>
        <nav>
        <p>Bienvenido {userName}</p>
        <NewPostModal />
        <button onClick={handleLogOut}>Cerrar sesion</button>
        </nav>
        </>
    )
}


// min 56