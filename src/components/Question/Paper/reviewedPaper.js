import React from "react";
import { Divider, Descriptions, Rate } from "antd";

import QuestionApis from "../../apis/questionApis";

const ReviewdPaper = (props) => {
  const paperId = props.match.params.paperId;
  const [questions, setQuestions] = React.useState([]);
  React.useEffect(() => {
    const getPaperinfo = QuestionApis.getTestPaperById(paperId);
    getPaperinfo().then((response) => {
      if (response.status === 200) {
        console.log(response.data);
        const tmp = [];
        for (const rawQ of response.data.questionList) {
          tmp.push({
            key: rawQ.question.id,
            title: rawQ.question.name,
            questionContent: rawQ.question.question_content,
            questionSample: rawQ.question.question_content,
            domain: rawQ.question.domain,
            difficulty: rawQ.question.difficulty,
            answer: rawQ.answer_content,
            score: rawQ.score,
            comment: rawQ.comment,
          });
        }
        setQuestions(tmp);
      }
    });
  }, [paperId]);

  return (
    <React.Fragment>
      {questions.map((item, index) => (
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
            <Descriptions.Item label="分数" span={3}>
              <Rate disabled defaultValue={item.score} />
            </Descriptions.Item>
            <Descriptions.Item label="答案评价" span={3}>
              {item.comment}
            </Descriptions.Item>
          </Descriptions>
          {index !== questions.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};

export default ReviewdPaper;
