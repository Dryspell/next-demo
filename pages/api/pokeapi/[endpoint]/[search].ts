// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    console.log("Method", req.method);
    console.log("Query", req.query);
    console.log("Body", req.body);

    const endpoint = req.query.endpoint || "pokemon";
    const search = req.query.search || "pikachu";

    const pokeData = await fetch(
        `https://pokeapi.co/api/v2/${endpoint}/${search}`,
        {
            method: "GET",
        }
    )
        .then((res: any) => res.json())
        .then((response: any) => {
            if (endpoint !== "pokemon") return response;
            const pokemon = {
                name: response.name,
                type: response.types.map((type: any) => type.type.name),
                height: response.height,
                abilities: response.abilities.map(
                    (ability: any) => ability.ability.name
                ),
                moves: response.moves.map((move: any) => move.move.name),
            };
            return pokemon;
        });

    res.status(200).json({ status: "success", pokeData: pokeData });
}
