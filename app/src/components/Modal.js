import React from 'react';
import Modal from '@material-ui/core/Modal';
import style from './Modal.module.scss';
import { useDashboard } from '../context';

function EditModal() {
  const { openEditModal, setOpenEditModal } = useDashboard();
  return (
    <Modal
      open={openEditModal}
      onClose={(e) => setOpenEditModal(false)}
      aria-labelledby='simple-modal-title'
      aria-describedby='simple-modal-description'
    >
      <div className={style.modal}>
        <h1>i am a modal</h1>
        
      </div>
    </Modal>
  );
}

export default EditModal;
