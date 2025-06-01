import { configureStore, Store } from '@reduxjs/toolkit';
import { act, renderHook } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { useTaskFilters } from '../hooks/useTaskFilters';
import taskReducer from '../store/taskSlice';
import { Priority, Task, TaskStatus } from '../types/interfaces';

type RootState = {
  tasks: {
    tasks: Task[];
    filter: Priority | 'all';
    statusFilter: TaskStatus | 'all';
    sortOrder: 'asc' | 'desc';
    lastOrderNumber: number;
  };
};

const createWrapper = (store: Store<RootState>) => {
  return ({ children }: { children: React.ReactNode }) => (
    <Provider store={store}>{children}</Provider>
  );
}

describe('useTaskFilters', () => {
  let store: Store<RootState>;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        tasks: taskReducer,
      },
      preloadedState: {
        tasks: {
          tasks: [],
          filter: 'all' as const,
          statusFilter: 'all' as const,
          sortOrder: 'desc' as const,
          lastOrderNumber: 0,
        },
      },
    }) as Store<RootState>
  });

  it('возвращает начальное состояние фильтров', () => {
    const { result } = renderHook(() => useTaskFilters(), {
      wrapper: createWrapper(store),
    });

    expect(result.current.filter).toBe('all');
    expect(result.current.statusFilter).toBe('all');
    expect(result.current.sortOrder).toBe('desc');
  });

  it('обновляет фильтр по приоритету', () => {
    const { result } = renderHook(() => useTaskFilters(), {
      wrapper: createWrapper(store),
    });

    act(() => {
      result.current.handleFilterChange(Priority.HIGH);
    });

    expect(result.current.filter).toBe(Priority.HIGH);
  });

  it('обновляет фильтр по статусу', () => {
    const { result } = renderHook(() => useTaskFilters(), {
      wrapper: createWrapper(store),
    });

    act(() => {
      result.current.handleStatusFilterChange(TaskStatus.COMPLETED);
    });

    expect(result.current.statusFilter).toBe(TaskStatus.COMPLETED);
  });

  it('обновляет порядок сортировки', () => {
    const { result } = renderHook(() => useTaskFilters(), {
      wrapper: createWrapper(store),
    });

    act(() => {
      result.current.handleSortChange('asc');
    });

    expect(result.current.sortOrder).toBe('asc');
  });
});
