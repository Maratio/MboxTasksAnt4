import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "./redux";
import { setFilter, setSortOrder, setStatusFilter } from "../store/taskSlice";
import { FilterValue, StatusFilterValue, SortValue, Priority, TaskStatus } from "../types/interfaces";

const priorityOptions = [
  { value: "all", label: "Все приоритеты" },
  { value: Priority.LOW, label: "Низкий приоритет" },
  { value: Priority.MEDIUM, label: "Средний приоритет" },
  { value: Priority.HIGH, label: "Высокий приоритет" },
];

const sortOptions = [
  { value: "desc", label: "Сначала новые" },
  { value: "asc", label: "Сначала старые" },
];

const statusOptions = [
  { value: "all", label: "Без учета статуса" },
  { value: TaskStatus.PENDING, label: "Не выполненные" },
  { value: TaskStatus.COMPLETED, label: "Выполненные" },
];

export const useTaskFilters = () => {
  const dispatch = useAppDispatch();
  const { filter, sortOrder, statusFilter } = useAppSelector(
    (state) => state.tasks
  );

  const handleFilterChange = useCallback(
    (value: FilterValue) => {
      dispatch(setFilter(value));
    },
    [dispatch]
  );

  const handleSortChange = useCallback(
    (value: SortValue) => {
      dispatch(setSortOrder(value));
    },
    [dispatch]
  );
  
  const handleStatusFilterChange = useCallback(
    (value: StatusFilterValue) => {
      dispatch(setStatusFilter(value));
    },
    [dispatch]
  );  return {
    filter,
    sortOrder,
    statusFilter,
    handleFilterChange,
    handleSortChange,
    handleStatusFilterChange,
    priorityOptions,
    sortOptions,
    statusOptions,
  };
};
