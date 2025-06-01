import React, { useEffect } from "react";
import { useTaskEditForm } from "../../hooks/useTaskEditForm";
import { TaskEditFormProps } from "../../types/interfaces";
import { CustomModal } from "../UI";
import TaskFormBase from "./TaskFormBase";

const TaskEditForm: React.FC<TaskEditFormProps> = ({ task, open, onClose }) => {
  const { form, handleSubmit } = useTaskEditForm(task, onClose, open);

  
  return (
    <CustomModal title="Редактирование задачи" open={open} onCancel={onClose}>
      <TaskFormBase
        form={form}
        onFinish={handleSubmit}
        submitText="Сохранить"
        onCancel={onClose}
        showCancelButton
      />
    </CustomModal>
  );
};

export default React.memo(TaskEditForm);
