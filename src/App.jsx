import { Card } from "./componentes/Card/Card"
import { useState } from "react";
import './index.css'


function App() {

  const [ nombre, setNombre ] = useState('');
  const [ colorFavorito, setColorFavorito ] = useState('');
  const [ error, setError] = useState(false)
  const [ data, setData ] = useState();

  const onChangeNombre = (e) => setNombre(e.target.value);
  const onChangeColorFavorito = (e) => setColorFavorito(e.target.value);

  const onSubmitForm = (e) => {

    e.preventDefault();

    const resultadoValidacionNombre = validarNombre(nombre);
    const resultadoValidacionColor = validarColor(colorFavorito);

    if( resultadoValidacionNombre && resultadoValidacionColor ){
      setData({
        nombre,
        colorFavorito
      })
    }else{
      setData()
      setError(false)
    }
  }

  const validarNombre = ( nombre ) => {
    const withoutSpace = nombre.trim();
    return withoutSpace.length > 2;
  }

  const validarColor = ( color ) => {
    const withoutSpace = color.trim();
    return withoutSpace.length > 3;
  }

  return (
    <div className="App">
      <h1 className="titulo">Elige un color</h1>
      <form onSubmit={onSubmitForm}
      className='form'>
        <input
          className="input"
          type="text"
          placeholder="Ingrese su nombre"
          id="nombre"
          name="nombre"
          value={nombre}
          onChange={onChangeNombre}/>
        <input 
          className="input"
          type="text"
          placeholder="Ingrese su color favorito"
          id="color-favorito"
          name="color-favorito"
          value={colorFavorito}
          onChange={onChangeColorFavorito}/>
        <button type="submit" className="button">Enviar</button>


      </form>
      {
        !error && data ? <Card data={data}/> : <p style={{color: 'red'}} className='error'>Por favor chequea que la informacion sea correcta!</p>
      }
    </div>
  );
}

export default App;
