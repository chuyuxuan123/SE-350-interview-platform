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
import QuestionApis from "../../apis/questionApis";

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

const NewPaperInfo = (props) => {
  const paperId = props.match.params.paperId;
  const [questions, setQuestions] = React.useState([]);

  React.useEffect(() => {
    const getPaperinfo = QuestionApis.getTestPaperById(paperId);
    getPaperinfo().then((response) => {
      if (response.status === 200) {
        // console.log(response.data);
        const tmp = [];
        for (const rawQ of response.data.questionList) {
          tmp.push({
            key: rawQ.question.id,
            title: rawQ.question.name,
            questionContent: rawQ.question.question_content,
            questionSample: rawQ.question.question_content,
            domain: rawQ.question.domain,
            difficulty: rawQ.question.difficulty,
          });
        }
        setQuestions(tmp);
      }
    });
  }, [paperId]);

  return (
    <React.Fragment>
      {questions.map((item, index) => (
        <div key={index}>
          <Descriptions
            title={"题目" + (index + 1).toString() + ": " + item.title}
            bordered
          >
            <Descriptions.Item label="题目信息" span={3}>
              {item.questionContent}
            </Descriptions.Item>
            <Descriptions.Item label="样例" span={3}>
              {item.questionSample}
            </Descriptions.Item>
            <Descriptions.Item label="难度" span={3}>
              <Rate disabled defaultValue={item.difficulty} />
            </Descriptions.Item>
          </Descriptions>
          {index !== questions.length - 1 && <Divider />}
        </div>
      ))}
    </React.Fragment>
  );
};

export default NewPaperInfo;
