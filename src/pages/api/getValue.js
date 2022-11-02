// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getFunction } from "../../lib/backend/database-utils";

const handler = async (req, res) => {
  try {
    const data = await getFunction();
    console.log(data);
    res.status(200).end(JSON.stringify(data));
  } catch (e) {
    console.log(e);
    res.status(500).end("Something went wrong");
  }
};

export default handler;
