import React from "react";
import { Button, Form, Input, message, Select, DatePicker } from "antd";
import QuestionApis from "../../apis/questionApis";
import { connect } from "react-redux";

const layout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 10 },
};
const tailLayout = {
  wrapperCol: { offset: 3, span: 14 },
};

const { Option } = Select;
const { RangePicker } = DatePicker;

const domains = [
  "哈希表",
  "队列&栈",
  "机器学习101",
  "递归",
  "数组和字符串",
  "二叉搜索树",
];

const mapStateToProps = (state) => ({
  msgId: state.msgId,
});

const NewPaper = (props) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const requestBody = {
      tittle: values.title,
      deadline: values.deadline.format("MMMM Do YYYY, h:mm:ss a"),
      time: values.time,
      domains: values.domains,
      description: "paper description",
      companyMessageId: props.msgId,
    };
    console.log(requestBody);
    const addTestPaper = QuestionApis.createTestPaper(requestBody);
    addTestPaper().then((response) => {
      if (response.status === 200) {
        console.log(response.data);
        message.success("新建成功");
        form.resetFields();
      }
    });
    form.resetFields();
    console.log(values);
  };
  return (
    <React.Fragment>
      <Form
        {...layout}
        form={form}
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
        <Form.Item label="考试时长" name="time">
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
        <Form.Item label="考试结束时间" name="deadline">
          <DatePicker showTime />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
      {/* <NewPaperInfo /> */}
    </React.Fragment>
  );
};

export default connect(mapStateToProps, null)(NewPaper);
