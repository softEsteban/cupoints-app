import { getBusinesses } from "../../../controllers/businesses.controller";
import { NextApiRequest, NextApiResponse } from "next";
import connectMongo from "../../../database/connection";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    connectMongo().catch(() =>
        res.status(405).json({ error: "Error in db connection" })
    );

    const { method } = req;
    switch (method) {
        case "GET":
            getBusinesses(req, res);
            break;
    }
}