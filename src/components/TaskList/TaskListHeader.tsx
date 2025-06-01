import React, { memo } from "react";
import { Typography } from "antd";
import TaskFilters from "../TaskFilters/TaskFilters";
import styles from "./TaskList.module.css";

const { Title } = Typography;

const TaskListHeader: React.FC = () => {
  return (
    <>
      <Title level={4} className={styles.listTitle}>
        Список задач
      </Title>
      <TaskFilters />
    </>
  );
};

export default memo(TaskListHeader);
