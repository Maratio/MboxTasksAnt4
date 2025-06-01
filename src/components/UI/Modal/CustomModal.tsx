import React from "react";
import { Modal } from "antd";
import { ModalProps } from "antd/lib/modal";
import styles from "./CustomModal.module.css";

interface CustomModalProps extends ModalProps {
  children: React.ReactNode;
}

const CustomModal: React.FC<CustomModalProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Modal
      {...props}
      className={`${styles.modal} ${className || ""}`}
      footer={null}
      maskClosable={false}
    >
      {children}
    </Modal>
  );
};

export default CustomModal;
