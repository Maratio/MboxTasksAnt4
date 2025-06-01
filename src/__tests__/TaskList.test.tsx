import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import TaskList from '../components/TaskList/TaskList';
import { Priority, TaskStatus } from '../types/interfaces';

const mockStore = configureStore([]);

describe('TaskList', () => {
  const mockTasks = [
    {
      id: '1',
      title: 'Задача 1',
      description: 'Описание задачи 1',
      priority: Priority.HIGH,
      status: TaskStatus.PENDING,
      createdAt: new Date('2025-05-31').toISOString(),
      orderNumber: 1000
    },
    {
      id: '2',
      title: 'Задача 2',
      description: 'Описание задачи 2',
      priority: Priority.MEDIUM,
      status: TaskStatus.COMPLETED,
      createdAt: new Date('2025-05-31').toISOString(),
      orderNumber: 2000
    }
  ];

  let store: any;

  beforeEach(() => {    store = mockStore({
      tasks: {
        tasks: mockTasks,
        filter: 'all',
        statusFilter: 'all',
        sortOrder: 'desc',
        lastOrderNumber: 0
      }
    });
  });

  it('рендерит список задач', () => {
    render(
      <Provider store={store}>
        <TaskList />
      </Provider>
    );    expect(screen.getByText((content, element) => {
      return element?.textContent === 'Задача №1 - Задача 1';
    })).toBeInTheDocument();
    expect(screen.getByText((content, element) => {
      return element?.textContent === 'Задача №2 - Задача 2';
    })).toBeInTheDocument();
  });

  it('отображает сообщение, когда нет задач', () => {    store = mockStore({
      tasks: {
        tasks: [],
        filter: 'all',
        statusFilter: 'all',
        sortOrder: 'desc',
        lastOrderNumber: 0
      }
    });

    render(
      <Provider store={store}>
        <TaskList />
      </Provider>
    );

    expect(screen.getByText(/Нет задач/i)).toBeInTheDocument();
  });

  it('фильтрует задачи по статусу', () => {    store = mockStore({
      tasks: {
        tasks: mockTasks,
        filter: 'all',
        statusFilter: TaskStatus.COMPLETED,
        sortOrder: 'desc',
        lastOrderNumber: 0
      }
    });

    render(
      <Provider store={store}>
        <TaskList />
      </Provider>
    );    expect(screen.queryByText((content, element) => {
      return element?.textContent === 'Задача №1 - Задача 1';
    })).not.toBeInTheDocument();
    expect(screen.getByText((content, element) => {
      return element?.textContent === 'Задача №2 - Задача 2';
    })).toBeInTheDocument();
  });

  it('сортирует задачи в правильном порядке', () => {    store = mockStore({
      tasks: {
        tasks: mockTasks,
        filter: 'all',
        statusFilter: 'all',
        sortOrder: 'asc',
        lastOrderNumber: 0
      }
    });

    render(
      <Provider store={store}>
        <TaskList />
      </Provider>
    );    const taskElements = screen.getAllByText(/Задача №\d+ -/);
    expect(taskElements[0]).toHaveTextContent('Задача №1 - Задача 1');
    expect(taskElements[1]).toHaveTextContent('Задача №2 - Задача 2');
  });
});
