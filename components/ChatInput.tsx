"use client";
import React, {FormEvent, useState} from 'react';
import {PaperAirplaneIcon} from "@heroicons/react/24/solid";
import {useSession} from "next-auth/react";
import {addDoc, collection, serverTimestamp} from "@firebase/firestore";
import {db} from "@/firebase";
import toast from "react-hot-toast";

type props = {
    chatId: string;
}

const ChatInput = ({chatId}: props) => {
    const [prompt, setPrompt] = useState("");
    const {data: session} = useSession();


    const model = "text-davinci-003";

    const sentMessage = async(e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(!prompt) return ;
        const input = prompt.trim();
        setPrompt("");
        const message: Message = {
            text: input,
            createdAt: serverTimestamp(),
            user:{
                _id: session?.user?.email!,
                name: session?.user?.name!,
                avatar: session?.user?.image!,
            }
        }
        await addDoc(
            collection(db, 'users', session?.user?.email!, 'chats', chatId, 'messages'),
            message
        )

        const notification = toast.loading('Generating your answer...');

        await fetch('/api/askQuestion', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prompt: input, chatId, model, session
            })
        }).then(()=>{
            //notification to say done
            toast.success('Answered', {
                id: notification,
            })
        })
    }
    return (
        <div className={'bg-gray-700/50 text-gray-400 rounded-lg text-sm'}>
            <form
                onSubmit={sentMessage}
                className={'py-2 px-4 space-x-5 flex'}>
                <input
                    value={prompt}
                    onChange={(e)=>setPrompt(e.target.value)}
                    type={"text"}
                    placeholder={"Ask your question...."}
                    className={'bg-transparent focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-300'}
                    disabled={!session}
                />
                <button
                    disabled={!prompt || !session} type={'submit'}
                    className={'hover:scale-110 active:scale-90 transition-all disabled:cursor-not-allowed disabled:opacity-50 duration-300 p-3 bg-[#191919] rounded-full'}
                >
                    <PaperAirplaneIcon className={'h-4 w-4'}/>
                </button>
            </form>

        </div>
    );
};

export default ChatInput;