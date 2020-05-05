import { Button, Table, Rate } from "antd";
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
    title: "分类",
    dataIndex: "domain",
    key: "domain",
  },
  {
    title: "难度",
    dataIndex: "difficulty",
    key: "difficulty",
    render: (difficulty) => <Rate disabled defaultValue={difficulty} />,
  },
  {
    title: "操作",
    render: () => <QuestionInfo />,
  },
];

const data = [
  { key: 1, title: "题目1", domain: "数据结构", difficulty: 1 },
  { key: 2, title: "题目1", domain: "数据结构", difficulty: 2 },
  { key: 3, title: "题目1", domain: "数据结构", difficulty: 4 },
  { key: 4, title: "题目1", domain: "数据结构", difficulty: 5 },
  { key: 5, title: "题目1", domain: "数据结构", difficulty: 2 },
];

const QuestionManage = () => {
  const [questionList, setQuestionList] = React.useState(data);
  return (
    <React.Fragment>
      <NewQuestion />
      <Table columns={columns} dataSource={data} />
    </React.Fragment>
  );
};

export default QuestionManage;
