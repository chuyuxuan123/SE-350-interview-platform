import { Button, Table } from "antd";
import React from "react";

const columns = [
  {
    title: "职位名称",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "职位描述",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "职位领域",
    dataIndex: "domain",
    key: "domain",
  },
  {
    title: "申请截止日期",
    dataIndex: "deadline",
    key: "deadline",
  },
  {
    title: "是否被申请",
    dataIndex: "appiled",
    key: "appiled",
    render: (appiled) => (appiled === "true" ? "是" : "否"),
  },
  {
    title: "申请人信息",
    render: (intervieweeId, appiled) =>
      appiled === "true" ? (
        <span>
          <Button type="link">查看</Button>
        </span>
      ) : (
        "--"
      ),
  },
  {
    title: "操作",
  },
];

const data = [
  {
    name: "name1",
    description: "desc1",
    domain: "domain1",
    deadline: "111",
    appiled: "false",
    intervieweeId: "",
  },
];

const JobPositionManage = () => {
  return <Table columns={columns} dataSource={data} />;
};

export default JobPositionManage;
