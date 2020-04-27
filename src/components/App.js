import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sider from "./Sider";
import { Layout } from "antd";
import "../assets/layout.css";

const { Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header />
        <Layout>
          <Sider />
          <Layout>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 600,
              }}
            >
              Content
            </Content>
          </Layout>
        </Layout>
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
