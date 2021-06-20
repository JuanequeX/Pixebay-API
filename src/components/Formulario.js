import React, {useState} from 'react';
import Error from './Error';
import PropTypes from 'prop-types';
import { Form } from 'reactstrap';

const Formulario = ({guardarBusqueda}) => {
  //State que hara la validacion de la busqueda!
  const [termino, guardarTermino] = useState('');
  const [error, guardarError] = useState(false);

  const buscarImagenes = e => {
    e.preventDefault();
    //Validacion!!
    if (termino.trim() === ''){
      guardarError(true);
      return;
    }
    guardarError(false);
    //Envio de la busqueda hacia el componente principal
    guardarBusqueda(termino);
  }

  return (
    <form
      onSubmit={buscarImagenes}
    >
      <div className='row'>
        <div className='form-group col-md-8'>
          <input
            type='text'
            className='form-control form-control-lg'
            placeholder='Busca una imagen, Ej: Palmeras o Atardecer'
            onChange={e => guardarTermino(e.target.value)}
          />
        </div>
        <div className='form-group col-md-4'>
          <input
            type='submit'
            className='btn btn-lg btn-danger btn-block'
            value='Buscar'
          />
        </div>
      </div>
      {error ? <Error mensaje="Agrega un termino de busqueda" /> : null}
    </form>
  );
}

Formulario.propTypes = {
  guardarBusqueda: PropTypes.func.isRequired
}
export default Formulario;
