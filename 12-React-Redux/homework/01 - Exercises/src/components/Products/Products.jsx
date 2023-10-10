import { connect } from 'react-redux';
import React from 'react';
import './products.css';
import Card from '../Card/Card'
import { getStoreName } from '../../redux/actions/actions';
import { useState, useEffect } from "react";   //HOOK DE ESTADOS, ciclo de vida

export function Products(props) {

   React.useEffect(()=>{
     console.log("se monta el componente")
     props.getStoreName()
     console.log(props)

  },[])                         //primer parametro: Callback, segundo: array de dependencias



   return (
      <>
         <div className='productsBg'>
            <h1 className='productsTl'>
                {props?.storeName} 
            </h1>

            <div className='productsList'>
               {
               /* ¡Renderiza aquí todas tus cards! */
               
                props.list?.map (({id, name, price}) => {
                   return (
                      <Card 
                        key = {id} // uso interno de react
                        id = {id}
                        name={name}
                        price={price}
                        
                     />
                  )
                })
               
               }


            </div>
         </div>
      </>
   );
}

export function mapStateToProps(state) {
   return{
      list: state.list,
      storeName: state.storeName
   }
}

export function mapDispatchToProps(dispatch) {
   return{
      getStoreName: ()=>{dispatch(getStoreName())}
   }
}

export default connect(
   mapStateToProps, 
   mapDispatchToProps
)(Products);
