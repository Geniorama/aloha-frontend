export const saveContact = async (payload) => {
  try {
    const res = await fetch(`/api/contact-hubspot`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN_HUBSPOT}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: payload.email }),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getContact = async () => {
  try {
    const res = await fetch(`${url}/crm/v3/objects/contacts`, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN_HUBSPOT}`,
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const saveDeal = async (payload) => {
  try {
    const res = await fetch(`http://localhost:3000/api/deal-hubspot`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN_HUBSPOT}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description: `Client: ${payload.email} Product: ${payload.productId} Refrence pay: ${payload.transaction}`,
      }),
    });
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
