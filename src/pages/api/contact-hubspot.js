const hubspot = require("@hubspot/api-client");
const hubspotClient = new hubspot.Client({
  accessToken: process.env.ACCESS_TOKEN_HUBSPOT,
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = await hubspotClient.crm.contacts.basicApi.create({
      properties: {
        email: req.body.email,
      },
    });
    res.status(200).json({ success: !!data.id });
  }
}
