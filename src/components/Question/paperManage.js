import React from "react";
import { Tabs } from "antd";

import PaperTable from "./paperTable";

const { TabPane } = Tabs;

const PaperManage = () => {
  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="未批阅试卷" key="1">
        <PaperTable type="unfinished" />
      </TabPane>
      <TabPane tab="已批阅试卷" key="2">
        <PaperTable type="finished" />
      </TabPane>
    </Tabs>
  );
};

export default PaperManage;
