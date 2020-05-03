import Axios from "axios";
import { RMP_BASE_URL } from "./baseUrl";

const RmpBase = Axios.create({
  baseURL: RMP_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

const userApis = {
  register: (registerRequest) => async () => {
    const response = await RmpBase.post("Interviewer/", registerRequest);
    return response;
  },
  login: (phone, password) => async () => {
    const response = await RmpBase.get(
      "Interviewer/?Interviewer.interviewer_phone_number=" +
        phone +
        "&Interviewer.interviewer_password=" +
        password
    );
    return response;
  },
  getMsgId: (companyId) => async () => {
    const response = await RmpBase.get(
      "Papermsg/?Papermsg.company_id=" + companyId
    );
    return response;
  },
};

export default userApis;
