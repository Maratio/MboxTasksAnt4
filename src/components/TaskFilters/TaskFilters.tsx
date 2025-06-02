import React from "react";
import { FilterFilled } from "@ant-design/icons";
import { useTaskFilters } from "../../hooks/useTaskFilters";
import { CustomSelect, CustomButton } from "../UI";
import styles from "./TaskFilters.module.css";

const TaskFilters: React.FC = () => {
  const {
    filter,
    sortOrder,
    statusFilter,
    handleFilterChange,
    handleSortChange,
    handleStatusFilterChange,
    handleResetFilters,
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
      </div>{" "}
      <CustomButton
        className={`${styles.resetButton} ${
          filter !== "all" || statusFilter !== "all" || sortOrder !== "desc"
            ? styles.active
            : ""
        }`}
        onClick={handleResetFilters}
        title="Сбросить фильтры"
        icon={<FilterFilled />}
      />
    </div>
  );
};

export default React.memo(TaskFilters);
