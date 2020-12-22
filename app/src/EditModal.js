import React from 'react';
import Modal from '@material-ui/core/Modal';

function EditModal({ openEditModal, setOpenEditModal, id }) {
  return (
    <Modal
      open={openEditModal}
      onClose={(e) => setOpenEditModal(false)}
      aria-labelledby='simple-modal-title'
      aria-describedby='simple-modal-description'
    >
      <div style={{ border: '1px solid green', background: 'gainsboro' }}>
        <h1>i am a modal</h1>
        <p>{id}</p>
      </div>
    </Modal>
  );
}

export default EditModal;
