import React from 'react';
import Modal from '@material-ui/core/Modal';
import style from './Modal.module.scss';
import EditMessage from './EditMessage';
import { useDashboard } from '../context';

function EditModal() {
  const { openEditModal, closeEditModal, messages, id } = useDashboard();
  let messageToEdit = messages.filter((message) => id === message.id);

  return (
    <Modal
      open={openEditModal}
      onClose={(e) => closeEditModal()}
      aria-labelledby='simple-modal-title'
      aria-describedby='simple-modal-description'
    >
      <div className={style.modal}>
        {messageToEdit && <EditMessage message={messageToEdit} />}
      </div>
    </Modal>
  );
}

export default EditModal;
