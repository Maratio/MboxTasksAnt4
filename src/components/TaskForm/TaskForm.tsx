import React from "react";
import { useTaskForm } from "../../hooks/useTaskForm";
import styles from "./TaskForm.module.css";
import TaskFormBase from "./TaskFormBase";

const TaskForm: React.FC = () => {
  const { form, handleSubmit } = useTaskForm();

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Новая задача</h2>
      <TaskFormBase
        form={form}
        onFinish={handleSubmit}
        submitText="Добавить задачу"
      />
    </div>
  );
};

export default TaskForm;
