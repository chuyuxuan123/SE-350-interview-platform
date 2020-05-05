import React from "react";
import { Button, Table } from "antd";
import { NavLink, useHistory } from "react-router-dom";

const PaperTable = (props) => {
  const { type } = props;

  const columns = [
    {
      title: "编号",
      dataIndex: "paperId",
      key: "paperId",
    },
    {
      title: "完成时间",
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
          {type === "finished" && <Button type="link">查看</Button>}
        </React.Fragment>
      ),
    },
  ];

  const data = [
    {
      paperId: 12,
      createTime: new Date().toDateString(),
    },
  ];
  return <Table columns={columns} dataSource={data} />;
};

export default PaperTable;
