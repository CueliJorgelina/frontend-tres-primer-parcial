import '../../index.css'

export const Card = ({data}) => {
  return (
    <div className="card">
      <h2 className='saludo'>Hola { data.nombre }!</h2>
      <h2>Sabemos que tu color favorito es: { data.colorFavorito }!</h2>
    </div>
  );
}

export default Card;
