import React from "react";
import { Button, Modal, Form, Input, message, Select, Rate } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const { TextArea } = Input;

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};
const tailLayout = {
  wrapperCol: { offset: 4, span: 20 },
};

const { Option } = Select;

// const sample = {
//   key: 1,
//   title: "链表加法",
//   questionContent:
//     "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list." +
//     "You may assume the two numbers do not contain any leading zero, except the number 0 itself.\n",
//   questionSample:
//     "Input: (2 -> 4 -> 3) + (5 -> 6 -> 4) <br>" +
//     "Output: 7 -> 0 -> 8 <br>" +
//     "Explanation: 342 + 465 = 807.",
//   domain: "数据结构",
//   difficulty: 1,
// },

const QuestionInfo = (props) => {
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setComfirmLoading] = React.useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleOk = () => {
    setVisible(false);
    console.log("ok");
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <React.Fragment>
      <Button onClick={showModal} type="link">
        查看
      </Button>
      <Modal
        title="题目信息"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Form
          {...layout}
          name="basic"
          initialValues={props.question}
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
            label="题目信息"
            name="questionContent"
            // rules={[{ required: true, message: "Please input your username!" }]}
          >
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item
            label="样例"
            name="questionSample"
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

export default QuestionInfo;
