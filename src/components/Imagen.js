import React, {useState} from 'react';
import {Button} from 'reactstrap';
import Modal from './Modal';
import PropTypes from 'prop-types';


const Imagen = ({imagen}) => {
  //Extraccion de las variables
  const {largeImageURL, likes, previewURL, tags, views } = imagen;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4' >
      <div className='card'>
        <img src={previewURL} alt={tags} className='card-img-top'/>
        <div className='card-body'>
          <p className='card-text'>{likes} Me Gusta</p>
          <p className='card-text'>{views} Vistas</p>
        </div>
        <div className='card-footer '>
          <Button color="danger" onClick={toggle}>Ver imagen</Button>
        </div>
      </div>
      <Modal
        modal={modal}
        toggle={toggle}
        largeImageURL ={largeImageURL}
      />
    </div>
  );
}

Imagen.propTypes = {
  imagen: PropTypes.object.isRequired
}
export default Imagen;
