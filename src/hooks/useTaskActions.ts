import { useState, useCallback, useMemo } from "react";
import { Task, Priority } from "../types/interfaces";
import { deleteTask, toggleTaskStatus } from "../store/taskSlice";
import { useAppDispatch } from "./redux";
import { DeleteConfirmation } from "../types/interfaces";

export const useTaskActions = () => {
  const dispatch = useAppDispatch();
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [deleteConfirmation, setDeleteConfirmation] =
    useState<DeleteConfirmation>({
      isOpen: false,
      taskId: null,
    });

  const handleEdit = useCallback((task: Task) => {
    setEditingTask(task);
  }, []);

  const handleDelete = useCallback((id: string) => {
    setDeleteConfirmation({ isOpen: true, taskId: id });
  }, []);

  const handleConfirmDelete = useCallback(() => {
    if (deleteConfirmation.taskId) {
      dispatch(deleteTask(deleteConfirmation.taskId));
    }
    setDeleteConfirmation({ isOpen: false, taskId: null });
  }, [deleteConfirmation.taskId, dispatch]);

  const handleCancelDelete = useCallback(() => {
    setDeleteConfirmation({ isOpen: false, taskId: null });
  }, []);

  const getPriorityColor = useCallback((priority: Priority) => {
    switch (priority) {
      case Priority.HIGH:
        return "priorityHigh";
      case Priority.MEDIUM:
        return "priorityMedium";
      case Priority.LOW:
        return "priorityLow";
      default:
        return "";
    }
  }, []);

  const getPriorityText = useCallback((priority: Priority): string => {
    switch (priority) {
      case Priority.HIGH:
        return "Высокий";
      case Priority.MEDIUM:
        return "Средний";
      case Priority.LOW:
        return "Низкий";
      default:
        return priority;
    }
  }, []);

  const handleToggleStatus = useCallback(
    (taskId: string) => {
      dispatch(toggleTaskStatus(taskId));
    },
    [dispatch]
  );

  return useMemo(
    () => ({
      editingTask,
      setEditingTask,
      handleEdit,
      handleDelete,
      deleteConfirmation,
      handleConfirmDelete,
      handleCancelDelete,
      getPriorityColor,
      getPriorityText,
      handleToggleStatus,
    }),
    [
      editingTask,
      handleEdit,
      handleDelete,
      deleteConfirmation,
      handleConfirmDelete,
      handleCancelDelete,
      getPriorityColor,
      getPriorityText,
      handleToggleStatus,
    ]
  );
};
