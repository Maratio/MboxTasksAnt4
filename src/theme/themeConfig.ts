import { ThemeConfig } from "antd";

export const theme: ThemeConfig = {  token: {
    // Базовые цвета
    colorPrimary: "#95de64",
    colorInfo: "#95de64",
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
  },  components: {    Button: {
      // Размеры и отступы
      paddingContentHorizontal: 24,
      controlHeight: 40,
      fontSize: 14,
      
      // Базовые стили
      colorBgBase: "transparent",
      colorText: "rgba(0, 0, 0, 0.88)",
      
      // Primary стили
      colorPrimary: "#95de64",
      colorInfo: "#95de64",
      
      // Danger стили
      colorError: "#ff4d4f",
      colorErrorBg: "rgba(255, 77, 79, 0.65)",
      colorErrorBorder: "rgba(255, 77, 79, 0.65)",
      
      // Границы
      borderRadius: 8,
      
      // Отключенное состояние
      colorTextDisabled: "rgba(0, 0, 0, 0.25)",
      colorBgContainerDisabled: "rgba(0, 0, 0, 0.04)",
      
      // Иконки
      marginXXS: 8,
    },
    Card: {
      padding: 16,
      paddingLG: 16,
      borderRadius: 8,
      boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.03)",
      borderRadiusLG: 8,
      colorBorder: "#d9d9d9",
      colorBgContainer: "#ffffff",
      colorBorderSecondary: "#d9d9d9",
    },    Input: {
      borderRadius: 8,
      activeShadow: "0 0 0 2px rgba(149, 222, 100, 0.2)",
    },Select: {
      borderRadius: 8,
      controlHeight: 40,
      colorPrimary: "#95de64",
      colorBorder: "#d9d9d9",
      colorPrimaryHover: "#95de64",
      controlOutline: "rgba(149, 222, 100, 0.2)",
      controlOutlineWidth: 2,
      motion: true,
      motionDurationMid: "0.3s",
    },
    Modal: {
      borderRadius: 12,
      padding: 24,
      colorBorder: "#f0f0f0",
      borderRadiusLG: 12,
      headerBg: "transparent",
      titleFontSize: 16,
      fontSizeHeading5: 16,
    },    Form: {
      colorPrimary: "#95de64",
      borderRadius: 12,
      colorBgContainer: "#ffffff",
      marginXXL: 32,
    },
    List: {
      borderRadius: 12,
      colorBgContainer: "#ffffff",
      padding: 24,
      marginXXL: 48,
      boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
      colorBorderSecondary: "#f0f0f0",
    },
  },
};
