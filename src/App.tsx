import React from "react";
import { Provider } from "react-redux";
import { Layout } from "antd";
import { store } from "./store/store";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";
import "antd/dist/reset.css";

const { Content } = Layout;

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Layout style={{ minHeight: "100vh", background: "#f0f2f5" }}>
        <Content style={{ padding: "50px", maxWidth: 1200, margin: "0 auto" }}>
          <TaskForm />
          <TaskList />
        </Content>
      </Layout>
    </Provider>
  );
};

export default App;
