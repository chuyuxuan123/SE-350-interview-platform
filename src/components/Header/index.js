import React from "react";
import { Layout, Menu } from "antd";
import "../../assets/layout.css";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout, setLogin } from "../../redux/action";

const { Header } = Layout;

const mapStateToProps = (state) => ({
  login: state.login,
});

const mapDispatchToProps = {
  logout,
  setLogin,
};

const Head = (props) => {
  const { login } = props;
  const history = useHistory();

  const handleLogin = () => {
    history.push("/login");
    // props.setLogin(true);
  };

  const handleLogout = () => {
    props.logout();
  };

  return (
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" selectable={false}>
        <Menu.Item key="1">首页</Menu.Item>
        {login === false && (
          <Menu.Item key="2" onClick={handleLogin} style={{ float: "right" }}>
            登录
          </Menu.Item>
        )}
        {login === true && (
          <Menu.Item key="3" onClick={handleLogout} style={{ float: "right" }}>
            注销
          </Menu.Item>
        )}
      </Menu>
    </Header>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Head);
