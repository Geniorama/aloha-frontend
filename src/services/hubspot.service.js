const url = "https://api.hubapi.com/crm/v3";

export const saveContact = async () => {
  try {
    const res = await fetch(`${url}/objects/contacts`, {
      headers: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN_HUBSPOT}`,
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getContact = async () => {
  try {
    const res = await fetch(`${url}/objects/contacts`);
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
