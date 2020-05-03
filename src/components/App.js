import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";
import Sider from "./Sider";
import LoginForm from "./User/login";
import RegisterFrom from "./User/register";
import CompanyInfoManage from "./Company/companyInfoManage";
import JobPositionManage from "./Company/jobPositionManage";
import QuestionManage from "./Question/questionManage";
import HomePage from "./homePage";
import { RMP_BASE_URL } from "./apis/baseUrl";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import "../assets/layout.css";

const { Content } = Layout;

const mapStateToProps = (state) => ({
  login: state.login,
  companyId: state.companyId,
  msgId: state.msgId,
});

const App = (props) => {
  const { login, msgId } = props;

  if (msgId !== 0) {
    var source = new EventSource(
      RMP_BASE_URL + "Papermsg/" + msgId + "/syncronize"
    );
    source.onopen = function (event) {
      console.log("get connecting...");
      console.log(event);
    };
    source.onmessage = function (event) {
      console.log(event.data);
    };
    source.onerror = (event) => {
      console.log(event);
    };
  } else {
    // console.log("user logout");
  }

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
                  <Route exact path="/" component={HomePage} />
                  <Route path="/login" component={LoginForm} />
                  <Route path="/register" component={RegisterFrom} />
                  <Route
                    exact
                    path="/company/info"
                    component={CompanyInfoManage}
                  />
                  <Route
                    exact
                    path="/company/job"
                    component={JobPositionManage}
                  />
                  <Route exact path="/question" component={QuestionManage} />
                </Switch>
              </Content>
            </Layout>
          </Layout>
          <Footer />
        </Layout>
      </Router>
    </div>
  );
};

export default connect(mapStateToProps, null)(App);
