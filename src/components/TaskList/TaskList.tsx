import React, { memo } from "react";
import { useFilter } from "../../hooks/useFilter";
import { useTaskActions } from "../../hooks/useTaskActions";
import TaskCard from "../TaskCard/TaskCard";
import TaskEditForm from "../TaskForm/TaskEditForm";
import { ConfirmModal } from "../UI";
import styles from "./TaskList.module.css";
import TaskListHeader from "./TaskListHeader";

const TaskList: React.FC = () => {
  const { tasks } = useFilter();  const {
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
  } = useTaskActions();

  return (
    <div className={styles.taskListContainer}>
      <div>
          
            <TaskListHeader />
            {!tasks.length ? (
          <h2>В списке нет задач</h2>
        ) : (
            <div>
            <div className={styles.taskList}>
              {tasks.map((task) => (                <TaskCard
                  key={task.id}
                  task={task}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                  getPriorityColor={getPriorityColor}
                  getPriorityText={getPriorityText}
                  onToggleStatus={handleToggleStatus}
                />
              ))}
            </div>

            <TaskEditForm
              task={editingTask}
              open={!!editingTask}
              onClose={() => setEditingTask(null)}
            />

            <ConfirmModal
              title="Удаление задачи"
              content="Вы уверены, что хотите удалить эту задачу? Это действие нельзя отменить."
              open={deleteConfirmation.isOpen}
              onConfirm={handleConfirmDelete}
              onCancel={handleCancelDelete}
              confirmText="Удалить"
              cancelText="Отмена"
            />
             </div>
        )}
      </div>
    </div>
  );
};

export default memo(TaskList);
