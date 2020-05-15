import React from "react";
import { Button, Table } from "antd";
import { NavLink, useHistory } from "react-router-dom";

import QuestionApis from "../../apis/questionApis";

const PaperTable = (props) => {
  const { type } = props;
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const getAllPapers = QuestionApis.getAllPapers();
    getAllPapers().then((response) => {
      if (response.status === 200) {
        const paperdata = [];
        console.log(response.data);
        if (type === "unfinished") {
          for (const paper of response.data) {
            if (paper.status === 1) {
              paperdata.push({
                paperId: paper.testPaperID,
                createTime: paper.create_time,
                title: paper.tittle,
              });
            }
          }
        } else if (type === "finished") {
          for (const paper of response.data) {
            if (paper.status === 2) {
              paperdata.push({
                paperId: paper.testPaperID,
                createTime: paper.create_time,
                title: paper.tittle,
              });
            }
          }
        } else if (type === "new") {
          for (const paper of response.data) {
            if (paper.status === 0) {
              console.log(1111);
              paperdata.push({
                paperId: paper.testPaperID,
                createTime: paper.create_time,
                title: paper.tittle,
              });
            }
          }
        }
        setData(paperdata);
      }
    });
  }, [type]);

  const columns = [
    {
      title: "编号",
      dataIndex: "paperId",
      key: "paperId",
    },
    {
      title: "创建时间",
      dataIndex: "createTime",
      key: "createTime",
    },
    {
      title: "操作",
      render: (item) => (
        <React.Fragment>
          {type === "unfinished" && (
            <Button type="link">
              <NavLink to={"/paper/review/" + item.paperId}>批阅</NavLink>
            </Button>
          )}
          {type === "finished" && (
            <Button type="link">
              <NavLink to={"/paper/reviewed/" + item.paperId}>查看</NavLink>
            </Button>
          )}
          {type === "new" && (
            <Button type="link">
              <NavLink to={"/paper/new/" + item.paperId}>查看</NavLink>
            </Button>
          )}
        </React.Fragment>
      ),
    },
  ];

  // const data = [
  //   {
  //     paperId: 12,
  //     createTime: new Date().toDateString(),
  //   },
  // ];
  return <Table rowKey="paperId" columns={columns} dataSource={data} />;
};

export default PaperTable;
