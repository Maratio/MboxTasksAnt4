import React from "react";
import { useTaskFilters } from "../../hooks/useTaskFilters";
import { CustomSelect } from "../UI";
import styles from "./TaskFilters.module.css";

const TaskFilters: React.FC = () => {
  const {
    filter,
    sortOrder,
    statusFilter,
    handleFilterChange,
    handleSortChange,
    handleStatusFilterChange,
    priorityOptions,
    sortOptions,
    statusOptions,
  } = useTaskFilters();

  return (
    <div className={styles.filterContainer}>
      <div className={styles.filter}>
        <CustomSelect
          value={filter}
          onChange={handleFilterChange}
          options={priorityOptions}
          placeholder="Фильтр по приоритету"
        />
      </div>

      <div className={styles.filter}>
        <CustomSelect
          value={statusFilter}
          onChange={handleStatusFilterChange}
          options={statusOptions}
          placeholder="Фильтр по статусу"
        />
      </div>

      <div className={styles.filter}>
        <CustomSelect
          value={sortOrder}
          onChange={handleSortChange}
          options={sortOptions}
          placeholder="Сортировка"
        />
      </div>
    </div>
  );
};

export default React.memo(TaskFilters);
