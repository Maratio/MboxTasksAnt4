import { ThemeConfig } from "antd";

export const theme: ThemeConfig = {
  token: {
    // Базовые цвета
    colorPrimary: "#1890ff",
    colorInfo: "#1890ff",
    colorSuccess: "#52c41a",
    colorWarning: "#faad14",
    colorError: "#ff4d4f",
    colorTextBase: "rgba(0, 0, 0, 0.88)",
    colorBgContainer: "#ffffff",
    
    // Типография
    fontSize: 14,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    
    // Размеры и отступы
    borderRadius: 8,
    controlHeight: 40,
    
    // Состояния и взаимодействие
    colorBgLayout: "#f0f2f5",
    colorBorder: "#d9d9d9",
    colorTextDisabled: "rgba(0, 0, 0, 0.25)",
    colorBgContainerDisabled: "rgba(0, 0, 0, 0.04)",
    colorTextSecondary: "rgba(0, 0, 0, 0.45)",
    
    // Тени
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.02)",
    boxShadowSecondary: "0 4px 12px rgba(0, 0, 0, 0.08)",
  },
  components: {
    Button: {
      paddingContentHorizontal: 24,
      // Стили для кнопки "Завершить"
      primaryColor: "#95de64",
      defaultBg: "transparent",
      defaultColor: "rgba(0, 0, 0, 0.88)",
      defaultBorderColor: "#d9d9d9",
      // Стили для кнопок отмены
      defaultHoverBg: "transparent",
      defaultHoverColor: "rgba(0, 0, 0, 0.88)",
      defaultHoverBorderColor: "#d9d9d9",
    },
    Card: {
      padding: 24,
      borderRadius: 12,
      boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
    },
    Input: {
      borderRadius: 8,
      activeShadow: "0 0 0 2px rgba(24, 144, 255, 0.2)",
    },
    Select: {
      borderRadius: 8,
      controlHeight: 40,
    },
    Modal: {
      borderRadius: 12,
      padding: 24,
    },
  },
};
