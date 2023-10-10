import React, { useRef, useState } from "react";

const mapa =
   'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105073.44367080684!2d-58.50333841259388!3d-34.61566245778971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20CABA!5e0!3m2!1ses-419!2sar!4v1665159144041!5m2!1ses-419!2sar';

const CopyData = () => {

   const [number, SetNumber] = useState('123-456-7891')
   const numberRef= useRef();
   
   const handleCopy=()=>{
      let copyText = numberRef.current.lastChild.data;
      const textArea = document.createElement("textarea");
      textArea.textContent = copyText;
      document.body.append(textArea);
      textArea.select();
      document.execCommand("copy");
      textArea.remove();

   }

   return (
      <div className='copyBg'>
         <div>{/*Aquí puedes renderizar lo pedido en las instrucciones*/}
            <button onClick={handleCopy}>Copy</button>
            <div ref={numberRef}>
                 Teléfono: {number}
            </div>
         </div>
         <iframe src={mapa} className='mapa' title="mapa" />
      </div>
   );
};

export default CopyData;
