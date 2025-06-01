import { useCallback, useMemo } from "react";
import { Form } from "antd";

import { addTask } from "../store/taskSlice";
import { useAppDispatch } from "./redux";
import { TaskFormValues } from "../types/interfaces";

export const useTaskForm = () => {
  const [form] = Form.useForm<TaskFormValues>();
  const dispatch = useAppDispatch();

  const handleSubmit = useCallback(
    (values: TaskFormValues) => {
      dispatch(addTask(values.title, values.description, values.priority));
      form.resetFields();
    },
    [dispatch, form]
  );

  return {
      form,
      handleSubmit,
    }
};
