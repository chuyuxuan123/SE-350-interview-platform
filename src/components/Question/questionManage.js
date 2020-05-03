import { Button, Table } from "antd";
import React from "react";

import NewQuestion from "./newQuestion";
import QuestionInfo from "./questionInfo";

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
    render: () => <QuestionInfo />,
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
  return (
    <React.Fragment>
      <NewQuestion />
      <Table columns={columns} dataSource={data} />
    </React.Fragment>
  );
};

export default QuestionManage;
