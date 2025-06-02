import React from "react";
import { FilterFilled,FilterOutlined  } from "@ant-design/icons";
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
    isFiltersActive
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
        onClick={handleResetFilters}
        title="Сбросить фильтры"
        icon={isFiltersActive ? <FilterFilled  /> : <FilterOutlined />}

      />
    </div>
  );
};

export default React.memo(TaskFilters);
