import { SelectProps } from "antd/lib/select";

export type FilterValue = Priority | 'all';
export type StatusFilterValue = TaskStatus | 'all';
export type SortValue = 'asc' | 'desc';

export interface TaskFormValues {
  title: string;
  description: string;
  priority: Priority;
  status: TaskStatus;
}

export interface TaskFormBaseProps {
  form: any;
  onFinish: (values: TaskFormValues) => void;
  submitText: string;
  onCancel?: () => void;
  showCancelButton?: boolean;
}

export interface TaskEditFormProps {
  task: Task | null;
  open: boolean;
  onClose: () => void;
}

export interface SelectOption {
  value: string | number;
  label: string;
}

export interface CustomSelectProps extends Omit<SelectProps, "options"> {
  options: SelectOption[];
}

export interface DeleteConfirmation {
  isOpen: boolean;
  taskId: string | null;
}

export interface TaskCardProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
  getPriorityColor: (priority: Task["priority"]) => string;
  getPriorityText: (priority: Task["priority"]) => string;
  onToggleStatus: (id: string) => void;
}

// Modal interfaces
export interface ConfirmModalProps {
  title: string;
  content: string;
  open: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  confirmText?: string;
  cancelText?: string;
}

export enum Priority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
}

export enum TaskStatus {
  COMPLETED = 'COMPLETED',
  PENDING = 'PENDING'
}

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  status: TaskStatus;
  createdAt: string;
  orderNumber: number;
}

export interface TaskState {
  tasks: Task[];
  filter: Priority | 'all';
  sortOrder: 'asc' | 'desc';
}