import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import TaskForm from "../components/TaskForm/TaskForm";
import { Priority } from "../types/interfaces";

const mockStore = configureStore([]);

describe("TaskForm", () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({
      tasks: {
        tasks: [],
        filter: "all",
        statusFilter: "all",
        sortOrder: "desc",
        lastOrderNumber: 0,
      },
    });
  });

  it("рендерит форму создания задачи", () => {
    render(
      <Provider store={store}>
        <TaskForm />
      </Provider>
    );

    expect(
      screen.getByPlaceholderText("Введите название задачи")
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Введите описание задачи")
    ).toBeInTheDocument();
    expect(screen.getByText("Добавить задачу")).toBeInTheDocument();
  });

  it("валидирует обязательные поля", async () => {
    render(
      <Provider store={store}>
        <TaskForm />
      </Provider>
    );

    const submitButton = screen.getByText("Добавить задачу");
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(
        screen.getByText("Пожалуйста, введите название задачи!")
      ).toBeInTheDocument();
      expect(
        screen.getByText("Пожалуйста, введите описание задачи!")
      ).toBeInTheDocument();
    });
  });

  it("отправляет форму с корректными данными", async () => {
    render(
      <Provider store={store}>
        <TaskForm />
      </Provider>
    );

    const titleInput = screen.getByPlaceholderText("Введите название задачи");
    const descriptionInput = screen.getByPlaceholderText(
      "Введите описание задачи"
    );
    const prioritySelect = screen.getByRole("combobox");

    fireEvent.change(titleInput, { target: { value: "Тестовая задача" } });
    fireEvent.change(descriptionInput, {
      target: { value: "Описание тестовой задачи" },
    });
    fireEvent.change(prioritySelect, { target: { value: Priority.MEDIUM } });

    const submitButton = screen.getByText("Добавить задачу");
    fireEvent.click(submitButton);

    await waitFor(() => {
      const actions = store.getActions();
      expect(actions[0].type).toBe("tasks/addTask");
      expect(actions[0].payload).toMatchObject({
        title: "Тестовая задача",
        description: "Описание тестовой задачи",
        priority: Priority.MEDIUM,
      });
    });
  });
  it("очищает форму после успешной отправки", async () => {
    render(
      <Provider store={store}>
        <TaskForm />
      </Provider>
    );

    const titleInput = screen.getByPlaceholderText("Введите название задачи");
    const descriptionInput = screen.getByPlaceholderText(
      "Введите описание задачи"
    );
    const prioritySelect = screen.getByRole("combobox");

    // Заполняем форму
    fireEvent.change(titleInput, { target: { value: "Тестовая задача" } });
    fireEvent.change(descriptionInput, {
      target: { value: "Описание тестовой задачи" },
    });
    fireEvent.change(prioritySelect, { target: { value: Priority.MEDIUM } });

    await waitFor(() => {
      expect(titleInput).toHaveValue("Тестовая задача");
      expect(descriptionInput).toHaveValue("Описание тестовой задачи");
    });

    // Отправляем форму
    const submitButton = screen.getByText("Добавить задачу");
    fireEvent.click(submitButton);

    // Ждем действие в сторе
    await waitFor(() => {
      const actions = store.getActions();
      expect(actions).toHaveLength(1);
      expect(actions[0].type).toBe("tasks/addTask");
    });

    // Проверяем, что форма очистилась
    await waitFor(
      () => {
        const updatedTitleInput = screen.getByPlaceholderText(
          "Введите название задачи"
        );
        const updatedDescriptionInput = screen.getByPlaceholderText(
          "Введите описание задачи"
        );
        expect(updatedTitleInput).toHaveValue("");
        expect(updatedDescriptionInput).toHaveValue("");
      },
      { timeout: 2000 }
    );
  });
});
