import { useCallback, useEffect, useMemo } from "react";
import { Form } from "antd";
import { Task } from "../types/interfaces";
import { editTask } from "../store/taskSlice";
import { useAppDispatch } from "./redux";
import { TaskFormValues } from "../types/interfaces";

export const useTaskEditForm = (
  task: Task | null,
  onClose: () => void,
  open: boolean
) => {
  const [form] = Form.useForm<TaskFormValues>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (task && open) {
      form.setFieldsValue(task);
    }
  }, [task, open, form]);

  const handleSubmit = useCallback(
    (values: TaskFormValues) => {
      if (task) {
        dispatch(editTask({ ...task, ...values }));
        onClose();
      }
    },
    [dispatch, task, onClose]
  );

  return {
    form,
    handleSubmit,
  };
};
