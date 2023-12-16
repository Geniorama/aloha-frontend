import { request } from "@/helpers/helpers";

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
    const response = await request("createSubaccount", payload);
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
    const response = await request("getSubscriptionOffers");
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getCreditStatus = async (payload) => {
  try {
    const response = await request("getCreditStatus", payload);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const createSubaccountSubscription = async (payload) => {
  try {
    const response = await request("createSubaccountSubscription", payload);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getSubscriptions = async (payload) => {
  try {
    const response = await request("getSubscriptions", payload);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const updateSubaccount = async (payload) => {
  try {
    const response = await request("updateSubaccount", payload);
    return response;
  } catch (error) {
    console.log(error);
  }
};
