import React from "react";
import {
  Button,
  Form,
  Input,
  message,
  Divider,
  Descriptions,
  Rate,
} from "antd";

const layout = {
  // labelCol: { span: 1 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 10, span: 14 },
};

const mockData = [
  {
    key: 1,
    title: "链表加法",
    questionContent:
      "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list." +
      "You may assume the two numbers do not contain any leading zero, except the number 0 itself.\n",
    questionSample:
      "Input: (2 -> 4 -> 3) + (5 -> 6 -> 4) <br>" +
      "Output: 7 -> 0 -> 8 <br>" +
      "Explanation: 342 + 465 = 807.",
    domain: "数组和字符串",
    difficulty: 1,
    answer: "",
    score: 0,
    quality: 0,
    comment: "",
  },
  {
    key: 2,
    title: "链表乘法",
    questionContent:
      "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list." +
      "You may assume the two numbers do not contain any leading zero, except the number 0 itself.\n",
    questionSample:
      "Input: (2 -> 4 -> 3) + (5 -> 6 -> 4) <br>" +
      "Output: 7 -> 0 -> 8 <br>" +
      "Explanation: 342 + 465 = 807.",
    domain: "哈希表",
    difficulty: 2,
    answer: "",
    score: 0,
    quality: 0,
    comment: "",
  },
];

const PaperReview = (props) => {
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <React.Fragment>
      <Form {...layout} onFinish={onFinish}>
        {mockData.map((item, index) => (
          <React.Fragment key={index}>
            <Descriptions title={item.title} bordered>
              <Descriptions.Item label="题目信息" span={3}>
                {item.questionContent}
              </Descriptions.Item>
              <Descriptions.Item label="样例" span={3}>
                {item.questionSample}
              </Descriptions.Item>
              <Descriptions.Item label="答案" span={3}>
                {item.answer}
              </Descriptions.Item>
            </Descriptions>
            <Form.Item label="分数" name={index + "score"}>
              <Rate />
            </Form.Item>
            <Form.Item label="答案评价" name={index + "quality"}>
              <Input />
            </Form.Item>
            <Form.Item label="试题反馈" name={index + "review"}>
              <Rate />
            </Form.Item>
            {index !== mockData.length - 1 && <Divider />}
          </React.Fragment>
        ))}
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </React.Fragment>
  );
};

export default PaperReview;
