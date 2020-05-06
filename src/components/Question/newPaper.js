import React from "react";
import { Button, Form, Input, message, Select } from "antd";
import NewPaperInfo from "./newPaperInfo";

const layout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 10 },
};
const tailLayout = {
  wrapperCol: { offset: 3, span: 14 },
};

const { Option } = Select;

const domains = [
  "哈希表",
  "队列&栈",
  "机器学习101",
  "递归",
  "数组和字符串",
  "二叉搜索树",
];

const NewPaper = () => {
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <React.Fragment>
      <Form
        {...layout}
        name="basic"
        //   initialValues={info}
        onFinish={onFinish}
        //   onFinishFailed={onFinishFailed}
      >
        <Form.Item label="试卷名称" name="title">
          <Input />
        </Form.Item>
        <Form.Item label="试题数" name="amount">
          <Input />
        </Form.Item>
        <Form.Item label="考试时间" name="time">
          <Input addonAfter="分钟" />
        </Form.Item>
        <Form.Item label="选择试题范围" name="domains">
          <Select mode="tags">
            {domains.map((item, index) => (
              <Option key={index} value={item}>
                {item}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
      <NewPaperInfo />
    </React.Fragment>
  );
};

export default NewPaper;
