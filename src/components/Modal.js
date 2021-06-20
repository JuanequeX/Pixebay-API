import React from 'react';
import { Modal as ModalReactstrap, ModalHeader, ModalBody} from 'reactstrap';
import './modal.css';
import PropTypes from 'prop-types';


const Modal = ({modal, toggle, largeImageURL}) => (
    <div>
      <ModalReactstrap isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Pixabay x Juaneque</ModalHeader>
        <ModalBody>
          <img src={largeImageURL} className='w-100' />
        </ModalBody>
      </ModalReactstrap>
    </div>
   )

  Modal.propTypes = {
    modal: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
    largeImageURL: PropTypes.string.isRequired
  }

export default Modal;
