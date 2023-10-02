import { request } from "@/helpers/helpers";

const session_id = "4df34b802866b4c25dc764d67779e187";
const subaccountsession_id = "4df34b802866b4c25dc764d67779e187";
const subaccount_id = "82645722";

export const getSubaccounts = async () => {
  try {
    const response = await request("getSubaccounts", {
      session_id,
      subaccount_limit: 10,
      subaccount_offset: 0,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const createSubaccount = async (payload) => {
  try {
    const response = await request("createSubaccount", {
      session_id,
      ...payload,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const login = async (payload) => {
  try {
    const response = await request("loginAsUser", payload);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getSubscriptionOffers = async () => {
  try {
    const response = await request("getSubscriptionOffers", { subaccount_id });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getCreditStatus = async () => {
  try {
    const response = await request("getCreditStatus", {
      session_id,
      subaccount_id,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
