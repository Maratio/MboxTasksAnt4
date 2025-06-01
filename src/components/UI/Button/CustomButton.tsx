import React from "react";
import { Button as AntButton } from "antd";
import { ButtonProps } from "antd/lib/button";
import styles from "./CustomButton.module.css";

interface CustomButtonProps extends Omit<ButtonProps, 'variant'> {
  variant?: "primary" | "danger" | "default";
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  variant = "default",
  className,
  ...props
}) => {
  const buttonClass = `${styles.button} ${styles[variant]} ${className || ""} ant-btn-default ant-btn-color-default ant-btn-variant-outlined`;

  return (
    <AntButton {...props} className={buttonClass}>
      {children}
    </AntButton>
  );
};

export default CustomButton;
