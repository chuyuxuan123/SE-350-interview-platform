import { SolutionOutlined, HomeOutlined } from "@ant-design/icons";
import { Layout, Menu, Badge } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import "../../assets/layout.css";
import { connect } from "react-redux";
import { clearUnread } from "../../redux/action";

const { SubMenu } = Menu;
const { Sider } = Layout;

const mapStateToProps = (state) => ({
  login: state.login,
  unread: state.unreadMsg,
});

const mapDispatchToProps = {
  clearUnread,
};

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
              <SolutionOutlined />
              试题管理
            </span>
          }
        >
          <Menu.Item key="1">
            <NavLink to="/question">题库管理</NavLink>
          </Menu.Item>
          <Menu.Item
            key="2"
            onClick={() => {
              props.clearUnread();
            }}
          >
            <NavLink to="/paper">
              <Badge count={props.unread} offset={[10, 0]}>
                试卷管理
              </Badge>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="3">
            <NavLink to="/newpaper">新建试卷</NavLink>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub3"
          title={
            <span>
              <HomeOutlined />
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

export default connect(mapStateToProps, mapDispatchToProps)(Side);
