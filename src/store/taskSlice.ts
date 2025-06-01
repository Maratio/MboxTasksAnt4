import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { Priority, Task, TaskStatus } from '../types/interfaces';

interface TaskState {
  tasks: Task[];
  filter: Priority | 'all';
  statusFilter: TaskStatus | 'all';
  sortOrder: 'asc' | 'desc';
  lastOrderNumber: number;
}

const initialState: TaskState = {
  tasks: [],
  filter: 'all',
  statusFilter: 'all',
  sortOrder: 'desc',
  lastOrderNumber: 0,
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: {
      reducer: (state, action: PayloadAction<Task>) => {
        state.tasks.push(action.payload);
        state.lastOrderNumber = Math.max(state.lastOrderNumber, action.payload.orderNumber);
      },
      prepare: (title: string, description: string, priority: Priority) => ({
        payload: {
          id: uuidv4(),
          title,
          description,
          priority,
          status: TaskStatus.PENDING,
          createdAt: new Date().toISOString(),
          orderNumber: Date.now(),
        },
      }),
    },
    editTask: (state, action: PayloadAction<Task>) => {
      const index = state.tasks.findIndex(task => task.id === action.payload.id);
      if (index !== -1) {
        const orderNumber = state.tasks[index].orderNumber;
        state.tasks[index] = { ...action.payload, orderNumber };
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    setFilter: (state, action: PayloadAction<Priority | 'all'>) => {
      state.filter = action.payload;
    },
    setSortOrder: (state, action: PayloadAction<'asc' | 'desc'>) => {
      state.sortOrder = action.payload;
    },
    toggleTaskStatus: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) {
        task.status = task.status === TaskStatus.COMPLETED ? TaskStatus.PENDING : TaskStatus.COMPLETED;
      }
    },
    setStatusFilter: (state, action: PayloadAction<TaskStatus | 'all'>) => {
      state.statusFilter = action.payload;
    },
  },
});

export const { addTask, editTask, deleteTask, setFilter, setSortOrder, toggleTaskStatus, setStatusFilter } = taskSlice.actions;
export default taskSlice.reducer;