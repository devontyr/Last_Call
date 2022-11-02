// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { saveFunction } from "../../lib/backend/database-utils";

const handler = async (req, res) => {
  try {
    console.log("in saveValue" , req.body)
    const data = await saveFunction(req.body.bodyData.currentName);
    console.log(data);
    res.status(200).end(JSON.stringify(data));
  } catch (e) {
    console.log(e);
    res.status(500).end("Something went wrong");
  }
};

export default handler;
