// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { faker } from "@faker-js/faker";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log("Method", req.method);
    console.log("Body", req.body);

    res.status(200).json({
        name: faker.name.fullName(),
        email: faker.internet.email(),
    });
}
