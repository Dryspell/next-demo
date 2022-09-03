// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { faker } from "@faker-js/faker";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log("Method", req.method);
    console.log("Body", req.body);

    const count = req.query.count ? parseInt(req.query.count as string) : 10;
    let data: any[] = [];
    for (let i = 0; i < count; i++) {
        data.push({
            name: faker.name.fullName(),
            email: faker.internet.email(),
        });
    }
    console.log(data);

    return res.status(200).json(data);
}
