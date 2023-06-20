
//?La informacion se pasa por props
const Alumnos =({alumnos, total}) =>{
    // const {Alumnos, total} = props;   //destructuring de las propiedades 
    return(
        <>
            <h3>Alumnos hay: {total}</h3>
            {
                alumnos.map(alumno =>{
                    return (
                        <div>
                            <p> {alumno.name} </p>
                            <span>{alumno.edad}</span>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Alumnos;