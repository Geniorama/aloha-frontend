const hubspot = require("@hubspot/api-client");
const hubspotClient = new hubspot.Client({
  accessToken: process.env.ACCESS_TOKEN_HUBSPOT,
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log("si");
    const data = await hubspotClient.crm.deals.basicApi.create({
      properties: {
        dealname: req.body.description,
      },
    });
    res.status(200).json({ success: !!data.id });
  }
}
