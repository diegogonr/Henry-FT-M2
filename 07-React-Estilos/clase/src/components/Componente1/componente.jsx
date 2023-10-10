// import './Componente.css'
import style from './Componente.module.css'

const containerColor = {
    backgroundColor: "black",
    color: "white"
}

export const Componente = () =>{
    return(
        <>
            {/* modularizado */}
            <div className={style.contenedor}> 
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
            
            </div>

            <div style={containerColor}>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>

            </div>
        </>
    )
}