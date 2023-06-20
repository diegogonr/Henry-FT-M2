
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";

const Profile =()=>{
    const navigate = useNavigate();               // para navegar por rutas              
    const params = useParams();                   // obtener los parámetros de la ruta actual. ":person"
    console.log(params)
    return (
        <>
            <h1>Componente profile</h1>

            <button>
                {/* sin barra aumenta al link  */}
                <Link to = 'person'> PERSON</Link>  
            </button>
            <button onClick={()=> navigate('/')}>
                BACK
            </button>
            
            

            {/* hace que un componente se muestre dentro de otro sin cambiar de ruta
                NOS PERMITE RENDERIZAR AL HIJO */}
            <Outlet/>   

        </>
    )
}

export default Profile;