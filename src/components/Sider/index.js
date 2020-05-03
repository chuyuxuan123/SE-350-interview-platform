import { NotificationOutlined, UserOutlined } from "@ant-design/icons";
import { Layout, Menu, Badge } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import "../../assets/layout.css";
import { connect } from "react-redux";

const { SubMenu } = Menu;
const { Sider } = Layout;

const mapStateToProps = (state) => ({
  unread: state.unreadMsg,
});

const Side = (props) => {
  return (
    <Sider width={200} className="site-layout-background">
      <Menu
        mode="inline"
        // defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1", "sub3"]}
        style={{ height: "100%", borderRight: 0 }}
      >
        <SubMenu
          key="sub1"
          title={
            <span>
              <UserOutlined />
              试题管理
            </span>
          }
        >
          <Menu.Item key="1">
            <NavLink to="/question">题库管理</NavLink>
          </Menu.Item>
          <Menu.Item key="2">
            <Badge count={props.unread} offset={[10, 0]}>
              审阅试卷
            </Badge>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub3"
          title={
            <span>
              <NotificationOutlined />
              公司管理
            </span>
          }
        >
          <Menu.Item key="9">
            <NavLink to="/company/info">公司信息管理</NavLink>
          </Menu.Item>
          <Menu.Item key="10">
            <NavLink to="/company/job">职位管理</NavLink>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default connect(mapStateToProps, null)(Side);
