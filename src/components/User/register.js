import { Button, Col, Form, Input, Row, message } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";
import userApis from "../apis/userApis";

// style
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 10, span: 14 },
};

const RegisterForm = () => {
  const [loading, setLoading] = React.useState(false);

  const history = useHistory();

  const onFinish = (values) => {
    setLoading(true);
    const request = {
      interviewer_phone_number: values.phone,
      interviewer_email: values.email,
      interviewer_password: values.password,
      interviewer_company: values.companyName,
      interviewer_role: "",
      company_id: values.phone,
    };
    console.log(request);
    const register = userApis.register(request);
    register().then((response) => {
      if (response.status === 200) {
        console.log(response.data);
        const createPaperMsg = userApis.createPaperMsg({
          company_id: values.phone,
          version: 0,
        });
        createPaperMsg();
        message.info("注册成功!");
        setLoading(false);
        history.push("/login");
      }
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Row>
      <Col span={8} offset={7}>
        <div style={{ textAlign: "center" }}>
          <label>注册</label>
        </div>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="手机号"
            name="phone"
            rules={[{ required: true, message: "Please input your phone!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="确认密码"
            name="confirmPassword"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="电子邮件"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="公司名称"
            name="companyName"
            rules={[
              { required: true, message: "Please input your company name!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit" loading={loading}>
              提交
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default RegisterForm;
