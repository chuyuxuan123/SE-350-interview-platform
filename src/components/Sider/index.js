import { NotificationOutlined, UserOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import "../../assets/layout.css";

const { SubMenu } = Menu;
const { Sider } = Layout;

const Side = () => {
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
          <Menu.Item key="2">审阅试卷</Menu.Item>
        </SubMenu>
        {/* <SubMenu
          key="sub2"
          title={
            <span>
              <LaptopOutlined />
              subnav 2
            </span>
          }
        >
          <Menu.Item key="5">option5</Menu.Item>
          <Menu.Item key="6">option6</Menu.Item>
          <Menu.Item key="7">option7</Menu.Item>
          <Menu.Item key="8">option8</Menu.Item>
        </SubMenu> */}
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

export default Side;
