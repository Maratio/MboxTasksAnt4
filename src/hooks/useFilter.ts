import { useMemo } from "react";
import { Task, Priority } from "../types/interfaces";
import { useAppSelector } from "./redux";

export const useFilter = () => {
  const { tasks, filter, sortOrder, statusFilter } = useAppSelector(
    (state) => state.tasks
  );

  const filteredAndSortedTasks = useMemo(() => {
    let result = [...tasks];

    if (filter !== "all") {
      result = result.filter((task) => task.priority === filter);
    }

    if (statusFilter !== "all") {
      result = result.filter((task) => task.status === statusFilter);
    }

    result.sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    });

    return result;
  }, [tasks, filter, sortOrder, statusFilter]);
  const getTasksByPriority = (priority: Priority) => {
    return tasks.filter((task) => task.priority === priority);
  };

  const getTasksCount = () => ({
    total: tasks.length,
    high: getTasksByPriority(Priority.HIGH).length,
    medium: getTasksByPriority(Priority.MEDIUM).length,
    low: getTasksByPriority(Priority.LOW).length,
  });

  return {
    tasks: filteredAndSortedTasks,
    tasksStats: getTasksCount(),
    statusFilter,
    filter,
    sortOrder,
  };
};
