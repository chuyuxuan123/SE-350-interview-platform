import Axios from "axios";
import { BACKEND_URL } from "./baseUrl";

const QuestionBase = Axios.create({
  baseURL: BACKEND_URL,
  headers: { "Content-Type": "application/json" },
});

const questionApis = {
  addQuestion: (requestBody) => async () => {
    const response = await QuestionBase.post("/addQuestion", requestBody);
    return response;
  },
  getAllQuestions: () => async () => {
    const resposne = await QuestionBase.get("/getQuestions");
    return resposne;
  },
  createTestPaper: (requestBody) => async () => {
    const response = await QuestionBase.post("/addTestPaper", requestBody);
    return response;
  },
  getAllPapers: () => async () => {
    const response = await QuestionBase.get("/getTestPapers");
    return response;
  },
  getTestPaperById: (paperId) => async () => {
    const response = await QuestionBase.get(`/getOnePaper?paperID=${paperId}`);
    return response;
  },
  reviewPaper: (requestBody) => async () => {
    const response = await QuestionBase.post("/gradePaper", requestBody);
    return response;
  },
};

export default questionApis;
