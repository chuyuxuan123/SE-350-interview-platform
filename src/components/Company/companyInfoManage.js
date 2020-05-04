import { Button, Form, Input, message } from "antd";
import React from "react";
import { connect } from "react-redux";
import IconUploader from "./iconUploader";
import userApis from "../apis/userApis";

const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 2, span: 16 },
};

const initValue = {
  name: "",
  website: "",
  intro: "",
  logoUrl: "",
};

const mapStateToProps = (state) => ({
  companyId: state.companyId,
});

const CompanyInfoManage = (props) => {
  const { companyId } = props;
  const [info, setInfo] = React.useState(initValue);
  const [companyEntityId, setCompanyEntityId] = React.useState(0);

  const formRef = React.createRef();

  React.useEffect(() => {
    const getCompanyInfo = userApis.getCompanyInfo(companyId);
    getCompanyInfo().then((response) => {
      if (response.status === 200) {
        if (typeof response.data.Company !== "undefined") {
          const data = {
            name: response.data.Company[0].company_name,
            website: response.data.Company[0].company_website,
            intro: response.data.Company[0].company_intro,
            logoUrl: "",
          };
          formRef.current.setFieldsValue({
            name: response.data.Company[0].company_name,
            website: response.data.Company[0].company_website,
            intro: response.data.Company[0].company_intro,
          });
          setInfo(data);
          setCompanyEntityId(response.data.Company[0].id);
          // console.log(response.data);
        }
      }
    });
  }, [companyId]);

  const onFinish = (values) => {
    if (companyEntityId === 0) {
      const requestBody = {
        company_id: companyId,
        company_name: values.name,
        company_website: values.website,
        company_intro: values.intro,
        company_logo_url: "",
      };
      const createCompanyInfo = userApis.createCompanyInfo(requestBody);
      createCompanyInfo().then((response) => {
        if (response.status === 200) {
          // console.log(response.data);
          setCompanyEntityId(response.data.id);
          message.success("修改成功");
        }
      });
    } else {
      const requestBody = {
        company_id: companyId,
        company_name: values.name,
        company_website: values.website,
        company_intro: values.intro,
        company_logo_url: "",
      };
      const modify = userApis.modifyCompanyInfo(companyEntityId, requestBody);
      modify().then((response) => {
        if (response.status === 200) {
          message.success("修改成功");
          // console.log(response.data);
        }
      });
    }
  };

  const onFinishFailed = (errorInfo) => {
    message.error("网络异常");
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={info}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      ref={formRef}
    >
      {companyEntityId !== 0 && (
        <Form.Item label="上传公司图标">
          <IconUploader companyEntityId={companyEntityId} />
        </Form.Item>
      )}

      <Form.Item
        label="公司名称"
        name="name"
        // rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="公司网站"
        name="website"
        // rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="公司描述"
        name="intro"
        // rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form.Item>
    </Form>
  );
};

export default connect(mapStateToProps, null)(CompanyInfoManage);
