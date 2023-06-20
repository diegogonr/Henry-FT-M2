import {Link, NavLink} from 'react-router-dom'; // la diferencia es que a navlink s ele puede dar estilos

const Home =() =>{
    return (
        <>
        
            <h1>Este es el comp home</h1>
            <button>
                <Link to='/about'> ABOUT </Link>
            </button>
            <button>
                <NavLink to='/profile'>Profile</NavLink>
            </button>
        </>
    )
}

export default Home;