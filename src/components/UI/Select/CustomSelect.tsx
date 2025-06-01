import React from 'react';
import { Select } from 'antd';
import { CustomSelectProps } from '../../../types/interfaces';
import styles from './CustomSelect.module.css';

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  className,
  ...props
}) => {
  return (
    <Select
      {...props}
      className={`${styles.select} ${className || ''}`}
      options={options}
    />
  );
};

export default React.memo(CustomSelect); 