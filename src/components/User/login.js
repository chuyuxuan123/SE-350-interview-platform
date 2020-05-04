import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row, message } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import userApis from "../apis/userApis";
import "../../assets/login.css";
import { connect } from "react-redux";
import { setLogin, setCompanyId, setMsgId } from "../../redux/action";
// import { store } from "../../redux/store";

const mapDispatchToProps = {
  setMsgId,
  setLogin,
  setCompanyId,
};

const LoginForm = (props) => {
  const [loading, setLoading] = React.useState(false);
  const history = useHistory();

  const setMsg = (companyId) => {
    const getMsgId = userApis.getMsgId(companyId);
    getMsgId().then((response) => {
      if (response.status === 200) {
        console.log(response.data);
        if (response.data.Papermsg.length === 1) {
          const id = response.data.Papermsg[0].id;
          // console.log(id);
          props.setMsgId(id);
          // console.log(store.getState());
        }
      }
    });
  };

  const onFinish = (values) => {
    setLoading(true);
    const login = userApis.login(values.phone, values.password);
    login()
      .then((response) => {
        if (response.status === 200) {
          if (
            typeof response.data.Interviewer !== "undefined" &&
            response.data.Interviewer.length > 0
          ) {
            setLoading(false);
            props.setLogin(true);
            props.setCompanyId(response.data.Interviewer[0].company_id);
            setMsg(response.data.Interviewer[0].company_id);
            // console.log(store.getState());
            message.success("登录成功");
            history.push("/");
          } else {
            setLoading(false);
            message.error("用户名或密码错误");
          }
          setLoading(false);
          // console.log(response.data);
        }
      })
      .catch((err) => {
        setLoading(false);
        message.error("网络连接失败");
        console.log(err);
      });
    // console.log("Received values of form: ", values);
  };

  return (
    <Row>
      <Col span={6} offset={9} id="components-form-demo-normal-login">
        <div className="login-header">
          <label>登录</label>
        </div>
        <Form name="normal_login" className="login-form" onFinish={onFinish}>
          <Form.Item
            name="phone"
            rules={[
              {
                required: true,
                message: "请输入手机号码!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="请输入手机号"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "请输入密码!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="请输入密码"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              loading={loading}
            >
              登录
            </Button>
            或者 <NavLink to="/register">注册新账号</NavLink>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default connect(null, mapDispatchToProps)(LoginForm);
