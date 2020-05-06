import React from "react";
import { Button, Modal, Form, Input, Icon, message, Select, Rate } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const { TextArea } = Input;
const { Option } = Select;

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};
const tailLayout = {
  wrapperCol: { offset: 4, span: 20 },
};

const NewQuestion = (props) => {
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setComfirmLoading] = React.useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    form.resetFields();
    setVisible(false);
  };

  const handleOk = () => {
    form.submit();
    console.log("ok");
  };

  const onFinish = (values) => {
    // console.log("Success:", values);
    const newQuestion = {
      key: new Date().valueOf(),
      title: values.title,
      questionContent: values.info,
      questionSample: values.sample,
      domain: values.domain,
      difficulty: values.difficulty,
    };
    console.log(newQuestion);
    props.addQuestion(newQuestion);
    message.success("添加成功");
    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <React.Fragment>
      <Button
        type="primary"
        onClick={showModal}
        icon={<PlusOutlined />}
        size="large"
      >
        新建问题
      </Button>
      <Modal
        title="新建问题"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Form
          {...layout}
          name="basic"
          form={form}
          //   initialValues={info}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="题目名称"
            name="title"
            // rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="题目描述"
            name="info"
            // rules={[{ required: true, message: "Please input your username!" }]}
          >
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item
            label="样例"
            name="sample"
            // rules={[{ required: true, message: "Please input your username!" }]}
          >
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item label="领域" name="domain">
            <Select placeholder="选择试题类型" allowClear>
              <Option value="哈希表">哈希表</Option>
              <Option value="队列&栈">队列&栈</Option>
              <Option value="机器学习101">机器学习101</Option>
              <Option value="递归">递归</Option>
              <Option value="数组和字符串">数组和字符串</Option>
              <Option value="二叉搜索树">二叉搜索树</Option>
            </Select>
          </Form.Item>
          <Form.Item label="难度" name="difficulty">
            <Rate />
          </Form.Item>
        </Form>
      </Modal>
    </React.Fragment>
  );
};

export default NewQuestion;
