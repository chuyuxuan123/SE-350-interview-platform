import { Button, Table } from "antd";
import React from "react";

const columns = [
  {
    title: "题目名称",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "难度",
    dataIndex: "difficulty",
    key: "difficulty",
  },
  {
    title: "操作",
    render: () => <Button type="link">查看详情</Button>,
  },
];

const data = [
  { title: "题目1", difficulty: "难" },
  { title: "题目1", difficulty: "难" },
  { title: "题目1", difficulty: "难" },
  { title: "题目1", difficulty: "难" },
  { title: "题目1", difficulty: "难" },
];

const QuestionManage = () => {
  return <Table columns={columns} dataSource={data} />;
};

export default QuestionManage;
