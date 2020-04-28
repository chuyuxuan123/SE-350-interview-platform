import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sider from "./Sider";
import LoginForm from "./User/login";
import RegisterFrom from "./User/register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import "../assets/layout.css";

const { Content } = Layout;

function App() {
  return (
    <div className="App">
      <Router>
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
                <Switch>
                  <Route path="/login" component={LoginForm} />
                  <Route path="/register" component={RegisterFrom} />
                </Switch>
                {/* <LoginForm /> */}
                {/* <RegisterFrom /> */}
              </Content>
            </Layout>
          </Layout>
          <Footer />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
