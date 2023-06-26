// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import query from "@/lib/queryApi";

type Data = {
    name: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const {prompt, chatId, model, session} = req.body;
    if(!prompt){
        res.status(400).json({answer: "Please provide a prompt"});
        return;
    }
    if(!chatId){
        res.status(405).json({answer: "Please provide a valid chat id"});
        return;
    }
    const response = await query(prompt, chatId, model);
}
