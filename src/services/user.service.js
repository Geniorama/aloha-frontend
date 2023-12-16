import { request } from "@/helpers/helpers";
import { auth, login as signin } from "@/lib/auth";
import { saveUserCookie } from "@/pages/search/save-user-cookie";
import { setCookie } from "cookies-next";

export const login = async (
  login_user = "info@alohaimages.co",
  login_password = "123456"
) => {
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

export const loginAsUser = async (login_user, login_password) => {
  try {
    const response = await request("loginAsUser", {
      login_user,
      login_password,
    });
    if (response.userid && response.sessionid) signin(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getUserData = async (session_id, user_id) => {
  try {
    const response = await request("getUserData", {
      user_id,
      session_id,
    });
    saveUserCookie(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const registerNewUser = async (payload) => {
  try {
    const data = { user_info: { ...payload } };
    data.regist_user = payload.email;
    data.regist_email = payload.email;
    data.regist_password = payload.password;
    const response = await request("registerNewUser", data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const createSubaccount = async (payload) => {
  try {
    payload.subaccount_fname = payload.subaccount_email;
    payload.subaccount_lname = payload.subaccount_email;
    payload.subaccount_username = payload.subaccount_email;
    const response = await request("createSubaccount", payload);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const changePassword = async (payload) => {
  const response = await request("changePassword", payload);
  return response;
};
