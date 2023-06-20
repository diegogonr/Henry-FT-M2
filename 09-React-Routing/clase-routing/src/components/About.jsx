
//useLocation => informacion de la ruta en la que se esta navegando
//useNavigate
import { useLocation, useNavigate } from "react-router-dom";   


const About = () =>{
    const location  = useLocation();
    console.log(location)
    return(
        <>
            <h2>Este es el comp About</h2>
        </>
    )

}

export default About;