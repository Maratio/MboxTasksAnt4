import React, { useMemo } from "react";
import { Form, Input } from "antd";
import { Priority } from "../../types/interfaces";
import { CustomButton, CustomSelect } from "../UI";
import { TaskFormBaseProps } from "../../types/interfaces";
import styles from "./TaskForm.module.css";

const { TextArea } = Input;

const TaskFormBase: React.FC<TaskFormBaseProps> = ({
  form,
  onFinish,
  submitText,
  onCancel,
  showCancelButton = false,
}) => {
  const priorityOptions = useMemo(
    () => [
      { value: Priority.LOW, label: "Низкий" },
      { value: Priority.MEDIUM, label: "Средний" },
      { value: Priority.HIGH, label: "Высокий" },
    ],
    []
  );

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      initialValues={{ priority: Priority.MEDIUM }}
    >      <Form.Item
        name="title"
        label="Название"
        rules={[
          { required: true, message: "Пожалуйста, введите название задачи!" },
          { max: 50, message: "Название не может быть длиннее 100 символов!" }
        ]}
      >
        <Input placeholder="Введите название задачи" maxLength={50} showCount />
      </Form.Item>      <Form.Item
        name="description"
        label="Описание"
        rules={[
          { required: true, message: "Пожалуйста, введите описание задачи!" },
          { max: 500, message: "Описание не может быть длиннее 500 символов!" }
        ]}
        className={styles.errorAfterCount}
      >
        <TextArea rows={4} placeholder="Введите описание задачи" maxLength={500} showCount />
      </Form.Item>

      <Form.Item
        name="priority"
        label="Приоритет"
        rules={[{ required: true, message: "Пожалуйста, выберите приоритет!" }]}
      >
        <CustomSelect options={priorityOptions} />
      </Form.Item>

      <div className={styles.formActions}>
        {showCancelButton && (
          <CustomButton onClick={onCancel} style={{ marginRight: 12 }}>
            Отмена
          </CustomButton>
        )}
        <CustomButton type="primary" htmlType="submit" variant="primary">
          {submitText}
        </CustomButton>
      </div>
    </Form>
  );
};

export default React.memo(TaskFormBase);
