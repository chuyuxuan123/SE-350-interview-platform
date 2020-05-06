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
    render: (item) => <QuestionInfo question={item} />,
  },
];

const data = [
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
  },
  // { key: 3, title: "题目1", domain: "数据结构", difficulty: 4 },
  // { key: 4, title: "题目1", domain: "数据结构", difficulty: 5 },
  // { key: 5, title: "题目1", domain: "数据结构", difficulty: 2 },
];

const QuestionManage = () => {
  const [questionList, setQuestionList] = React.useState(data);

  const addQuestion = (newQuestion) => {
    setQuestionList([...questionList, newQuestion]);
  };

  return (
    <React.Fragment>
      <NewQuestion addQuestion={addQuestion} />
      <Table columns={columns} dataSource={questionList} />
    </React.Fragment>
  );
};

export default QuestionManage;
