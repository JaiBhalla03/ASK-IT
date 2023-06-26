import openai from "@/lib/chatgpt";

const query = async (prompt: string, chatId: string, model:string)=>{
    const res = await openai.createCompletion({
        model,
        prompt,
        temperature:0.9,
        max_tokens: 10000,
        top_p:1,
        frequency_penalty:0,
        presence_penalty:0,
    })
        .then(res=>res.data.choices[0].text).catch(err=>`We were unable to generate the message`)
    return res;
}

export default query;