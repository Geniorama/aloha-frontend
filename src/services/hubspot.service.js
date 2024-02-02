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
    throw error;
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

// export const getContactByEmail = async (email) => {
//   try {
//     const url = 'https://api.hubapi.com/crm/v3/objects/contacts/search';
//     const res = await fetch(url, {
//       method: 'POST',
//       headers: {
//         Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN_HUBSPOT}`,
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         filterGroups:[
//           {
//             filters: [
//               {
//                 propertyName: 'email',
//                 operator: 'EQ',
//                 value: email,
//               },
//             ],
//           }
//         ]
//       }),
//     });
//     const data = await res.json();
//     if (data.results && data.results.length > 0) {
//       return data.results[0]; // Asumiendo un solo contacto con el correo electrónico
//     } else {
//       return null; // No se encontró ningún contacto con el correo electrónico especificado
//     }
//   } catch (error) {
//     console.error('Error al obtener el contacto:', error);
//     throw error; // Relanzar para permitir el manejo en la función de llamada
//   }
// };


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
