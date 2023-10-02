import { request } from "@/helpers/helpers";

export const loginAsUser = async (login_user, login_password) => {
  try {
    const response = await request("loginAsUser", {
      login_user,
      login_password,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const registerNewUser = async (payload) => {
  try {
    const data = { user_info: { ...payload } };
    data.regist_user = payload.username;
    data.regist_email = payload.email;
    data.regist_password = payload.password;
    const response = await request("registerNewUser", data);
    return response;
  } catch (error) {
    console.log(error);
  }
};
