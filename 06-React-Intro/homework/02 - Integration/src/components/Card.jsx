export default function Card({id, name, status, species, gender, origin, image, onClose}) {
   return (
      <div>
         {/* la funcion no se ejecuta porque se ejecuta cuando sucede el evento */}
         <button onClick={onClose}>X</button>   
         <h2>{name}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{status}</h2>
         <h2>{origin}</h2>
         <img src={image} alt='' />
      </div>
   );
}
