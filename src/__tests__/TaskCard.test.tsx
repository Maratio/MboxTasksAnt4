import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import TaskCard from "../components/TaskCard/TaskCard";
import { Priority, TaskStatus } from "../types/interfaces";

const mockStore = configureStore([]);

describe("TaskCard", () => {
  const mockTask = {
    id: "1",
    title: "Тестовая задача",
    description: "Описание тестовой задачи",
    priority: Priority.MEDIUM,
    status: TaskStatus.PENDING,
    createdAt: new Date("2025-05-31").toISOString(),
    orderNumber: 1000,
  };
  const mockProps = {
    task: mockTask,
    onEdit: jest.fn(),
    onDelete: jest.fn(),
    getPriorityColor: jest.fn().mockReturnValue("medium"),
    getPriorityText: jest.fn().mockReturnValue("Средний"),
    onToggleStatus: jest.fn(),
  };

  let store: any;

  beforeEach(() => {
    store = mockStore({
      tasks: {
        tasks: [mockTask],
        filter: "all",
        statusFilter: "all",
        sortOrder: "desc",
        lastOrderNumber: 0,
      },
    });
  });

  it("рендерит карточку задачи с корректными данными", () => {
    render(
      <Provider store={store}>
        <TaskCard {...mockProps} />
      </Provider>
    );
    expect(
      screen.getByText((content, element) => {
        return element?.textContent === `Задача №1 - ${mockTask.title}`;
      })
    ).toBeInTheDocument();
    expect(screen.getByText(mockTask.description)).toBeInTheDocument();
    expect(screen.getByText("Не выполнена")).toBeInTheDocument();
  });

  it('вызывает функцию редактирования при клике на кнопку "Изменить"', () => {
    render(
      <Provider store={store}>
        <TaskCard {...mockProps} />
      </Provider>
    );

    fireEvent.click(screen.getByText("Изменить"));
    expect(mockProps.onEdit).toHaveBeenCalledWith(mockTask);
  });

  it('вызывает функцию удаления при клике на кнопку "Удалить"', () => {
    render(
      <Provider store={store}>
        <TaskCard {...mockProps} />
      </Provider>
    );

    fireEvent.click(screen.getByText("Удалить"));
    expect(mockProps.onDelete).toHaveBeenCalledWith(mockTask.id);
  });
  it("отключает кнопки редактирования и удаления для выполненных задач", async () => {
    const completedTask = {
      ...mockTask,
      status: TaskStatus.COMPLETED,
    };

    const completedStore = mockStore({
      tasks: {
        tasks: [completedTask],
        filter: "all",
        statusFilter: "all",
        sortOrder: "desc",
        lastOrderNumber: 0,
      },
    });

    render(
      <Provider store={completedStore}>
        <TaskCard {...mockProps} task={completedTask} />
      </Provider>
    );    // Находим кнопки по тексту, так как они могут содержать иконки
    const buttons = screen.getAllByRole('button');
    const editButton = buttons.find(button => button.textContent?.includes('Изменить'));
    const deleteButton = buttons.find(button => button.textContent?.includes('Удалить'));

    expect(editButton).toBeDefined();
    expect(deleteButton).toBeDefined();
    expect(editButton).toHaveAttribute('disabled');
    expect(deleteButton).toHaveAttribute('disabled');
  });
  it('изменяет статус задачи при клике на кнопку "Завершить"', () => {
    render(
      <Provider store={store}>
        <TaskCard {...mockProps} />
      </Provider>
    );

    fireEvent.click(screen.getByText("Завершить"));
    expect(mockProps.onToggleStatus).toHaveBeenCalledWith(mockTask.id);
  });
});
