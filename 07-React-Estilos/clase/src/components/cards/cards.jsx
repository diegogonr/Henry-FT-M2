import style from './Cards.module.css'
import style2 from 'styled-components'

const CompoenteEstilizado = style2.div `
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        background-color: red;
        padding: 1rem;
        border: 1px solid rgb(255, 0, 0);
        color: white;
        gap: 2rem;

`


const Cards = () =>{

    return(
        <>
        <div className={style.contenedor}>
            <div className={style.card}>Esto es una card</div>
            <div className={style.card}>Esto es una card</div>
            <div className={style.card}>Esto es una card</div>
            <div className={style.card}>Esto es una card</div>
            <div className={style.card}>Esto es una card</div>
            <div className={style.card}>Esto es una card</div>

        </div>

            <CompoenteEstilizado>
                <div className={style.card}>Esto es una card</div>
                <div className={style.card}>Esto es una card</div>
                <div className={style.card}>Esto es una card</div>
                <div className={style.card}>Esto es una card</div>
                <div className={style.card}>Esto es una card</div>
                <div className={style.card}>Esto es una card</div>

            </CompoenteEstilizado>
        </>
    )
}

export default Cards;