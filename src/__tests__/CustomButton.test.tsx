import { fireEvent, render, screen } from "@testing-library/react";
import CustomButton from "../components/UI/Button/CustomButton";
import styles from "../components/UI/Button/CustomButton.module.css";

describe("CustomButton", () => {
  it("рендерит кнопку с текстом", () => {
    render(<CustomButton>Тестовая кнопка</CustomButton>);
    expect(screen.getByText("Тестовая кнопка")).toBeInTheDocument();
  });

  it("вызывает onClick при клике", () => {
    const handleClick = jest.fn();
    render(<CustomButton onClick={handleClick}>Клик</CustomButton>);

    fireEvent.click(screen.getByText("Клик"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  it("применяет стили в соответствии с вариантом primary", () => {
    render(<CustomButton variant="primary">Кнопка</CustomButton>);
    const button = screen.getByRole("button", { name: "Кнопка" });
    expect(button.className).toContain(styles.button);
    expect(button.className).toContain(styles.primary);
  });

  it("применяет стили в соответствии с вариантом danger", () => {
    render(<CustomButton variant="danger">Кнопка</CustomButton>);
    const button = screen.getByRole("button", { name: "Кнопка" });
    expect(button.className).toContain(styles.button);
    expect(button.className).toContain(styles.danger);
  });

  it("отключает кнопку когда disabled=true", () => {
    render(<CustomButton disabled>Отключена</CustomButton>);
    const button = screen.getByRole("button", { name: "Отключена" });
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("disabled");
  });

  it("рендерит иконку, если она передана", () => {
    const TestIcon = () => <span data-testid="test-icon">icon</span>;
    render(<CustomButton icon={<TestIcon />}>Кнопка с иконкой</CustomButton>);
    expect(screen.getByTestId("test-icon")).toBeInTheDocument();
  });

  it("применяет дополнительные классы через className", () => {
    const customClass = "test-class";
    render(<CustomButton className={customClass}>Кнопка</CustomButton>);
    const button = screen.getByRole("button", { name: "Кнопка" });
    expect(button.className).toContain(customClass);
    expect(button.className).toContain(styles.button);
  });
});
