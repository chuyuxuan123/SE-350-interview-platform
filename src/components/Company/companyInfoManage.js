import { Button, Form, Input } from "antd";
import React from "react";
import { connect } from "react-redux";
import IconUploader from "./iconUploader";

const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 2, span: 16 },
};

const initValue = {
  name: "",
  website: "",
  intro: "",
  logoUrl: "",
};

const mapStateToProps = (state) => ({
  companyId: state.companyId,
});

const CompanyInfoManage = (props) => {
  const { companyId } = props;
  const [info, setInfo] = React.useState(initValue);

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={info}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item label="上传公司图标">
        <IconUploader />
      </Form.Item>

      <Form.Item
        label="公司名称"
        name="name"
        // rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="公司网站"
        name="website"
        // rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="公司描述"
        name="intro"
        // rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form.Item>
    </Form>
  );
};

export default connect(mapStateToProps, null)(CompanyInfoManage);
