import React from "react";
import {
  Button,
  Modal,
  Form,
  Input,
  Upload,
  Icon,
  message,
  Select,
  Descriptions,
} from "antd";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 10, span: 14 },
};

const mockData = [
  {
    title: "题目1",
    desc: "11111111111111",
    answer: "qqqqqqqqqqqqqq",
    score: "",
    quality: "",
    comments: "",
  },
  {
    title: "题目2",
    desc: "11111111111111",
    answer: "qqqqqqqqqqqqqq",
    score: "",
    quality: "",
    comments: "",
  },
  {
    title: "题目3",
    desc: "11111111111111",
    answer: "qqqqqqqqqqqqqq",
    score: "",
    quality: "",
    comments: "",
  },
];

const PaperReview = (props) => {
  console.log(props);
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <React.Fragment>
      <Form onFinish={onFinish}>
        {mockData.map((item, index) => (
          <React.Fragment key={index}>
            <Descriptions title={item.title}>
              <Descriptions.Item label="题目信息">
                {item.desc}
              </Descriptions.Item>
              <Descriptions.Item label="答案" span={3}>
                {item.answer}
              </Descriptions.Item>
            </Descriptions>
            <Form.Item label="分数" name={index + "score"}>
              <Input />
            </Form.Item>
            <Form.Item label="答案评价" name={index + "quality"}>
              <Input />
            </Form.Item>
            <Form.Item label="试题反馈" name={index + "review"}>
              <Input />
            </Form.Item>
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
