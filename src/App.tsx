import React from "react";
import { Provider } from "react-redux";
import { ConfigProvider, Layout } from "antd";
import { store } from "./store/store";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";
import { theme } from "./theme/themeConfig";
import "antd/dist/reset.css";

const { Content } = Layout;

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ConfigProvider theme={theme}>
        <Layout style={{ minHeight: "100vh" }}>
          <Content style={{ padding: 24, maxWidth: 1200, margin: "0 auto" }}>
            <TaskForm />
            <TaskList />
          </Content>
        </Layout>
      </ConfigProvider>
    </Provider>
  );
};

export default App;
