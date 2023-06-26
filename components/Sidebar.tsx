'use client'
import React from 'react';
import NewChat from "@/components/NewChat";
import {signOut, useSession} from "next-auth/react";
import {useCollection} from "react-firebase-hooks/firestore";
import {collection, orderBy, query} from "@firebase/firestore";
import {db} from "@/firebase";
import ChatRow from "@/components/ChatRow";

const Sidebar = () => {
    const {data: session} = useSession();
    const [chats, loading, error] = useCollection(
        session &&
        query(
            collection(db, 'users', session?.user?.email!, 'chats'),
            orderBy('createdAt', 'asc')
        )
    );
    console.log(chats);

    return (
        <div className={'p-2 flex flex-col h-screen'}>
            <div className={'flex-1'}>
                <div>
                    <NewChat/>
                    <div>
                        {/*mobile selection*/}
                    </div>
                    {/*map through the chatRows*/}
                    {
                        chats?.docs.map(chat=>(
                            <ChatRow key={chat.id} id={chat.id}/>
                        ))
                    }
                </div>
            </div>
            {
                session && (
                    <img
                        onClick={()=>signOut()}
                        src={session.user?.image} alt={""}
                         className={'h-12 w-12 cursor-pointer cursor-pointer mx-auto mb-2 hover:opacity-50 duration-300 transition-all'}
                    />
                )
            }
        </div>
    );
};

export default Sidebar;