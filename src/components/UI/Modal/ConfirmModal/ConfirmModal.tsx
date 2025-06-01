import React from "react";
import { Modal } from "antd";
import { CustomButton } from "../..";
import styles from "./ConfirmModal.module.css";

interface ConfirmModalProps {
  title: string;
  content: string;
  open: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  confirmText?: string;
  cancelText?: string;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  title,
  content,
  open,
  onConfirm,
  onCancel,
  confirmText = "Подтвердить",
  cancelText = "Отмена",
}) => {
  return (
    <Modal
      title={title}
      open={open}
      onCancel={onCancel}
      footer={null}
      maskClosable={false}
    >
      <div className={styles.content}>
        <p>{content}</p>
        <div className={styles.buttons}>
          <CustomButton
            variant="danger"
            onClick={onConfirm}
            className={styles.button}
          >
            {confirmText}
          </CustomButton>
          <CustomButton onClick={onCancel} className={styles.button}>
            {cancelText}
          </CustomButton>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmModal;
