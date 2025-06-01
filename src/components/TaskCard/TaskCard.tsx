import {
  CheckOutlined,
  ClockCircleOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Card, Tag, Typography } from "antd";
import moment from "moment";
import React, { memo } from "react";
import { TaskCardProps } from "../../types/interfaces";
import { TaskStatus } from "../../types/interfaces";
import { CustomButton } from "../UI";
import styles from "./TaskCard.module.css";

const { Title, Paragraph } = Typography;

const TaskCard: React.FC<TaskCardProps> = ({
  task,
  onEdit,
  onDelete,
  getPriorityColor,
  getPriorityText,
  onToggleStatus,
}) => {
  const priorityColorClass = getPriorityColor(task.priority);
  const priorityText = getPriorityText(task.priority);
  const taskNumber = Math.floor(task.orderNumber / 1000);
  const formattedDate = moment(task.createdAt).format("DD.MM.YYYY HH:mm");

  return (
    <Card
      className={`${styles.taskCard} ${
        task.status === TaskStatus.COMPLETED ? styles.completed : ""
      }`}
    >
      <Title level={5} className={styles.taskTitle}>
        Задача №{taskNumber} - {task.title}
      </Title>
      <Paragraph className={styles.taskDescription}>
        {task.description}
      </Paragraph>{" "}
      <div className={styles.taskMeta}>
        <Tag className={`${styles.priority} ${styles[priorityColorClass]}`}>
          {priorityText}
        </Tag>
        <Tag
          className={`${styles.status} ${
            task.status === TaskStatus.COMPLETED
              ? styles.statusCompleted
              : styles.statusActive
          }`}
        >
          {task.status === TaskStatus.COMPLETED ? "Выполнена" : "Не выполнена"}
        </Tag>
        <span className={styles.timestamp}>
          <ClockCircleOutlined />
          Создано: {formattedDate}
        </span>
      </div>{" "}
      <div className={styles.taskActions}>
        <CustomButton
          variant="primary"
          className={styles.completeButton}
          data-status={
            task.status === TaskStatus.COMPLETED ? "completed" : "active"
          }          icon={<CheckOutlined />}
          onClick={() => onToggleStatus(task.id)}
        >
          {task.status === TaskStatus.COMPLETED ? "Переоткрыть" : "Завершить"}
        </CustomButton>{" "}
        <CustomButton
          variant="primary"
          icon={<EditOutlined />}
          onClick={() => onEdit(task)}
          disabled={task.status === TaskStatus.COMPLETED}
        >
          Изменить
        </CustomButton>
        <CustomButton
          variant="danger"
          icon={<DeleteOutlined />}
          onClick={() => onDelete(task.id)}
          disabled={task.status === TaskStatus.COMPLETED}
        >
          Удалить
        </CustomButton>
      </div>
    </Card>
  );
};

export default memo(TaskCard);
