'use client'
import React from 'react';
import NewChat from "@/components/NewChat";
import {signOut, useSession} from "next-auth/react";

const Sidebar = () => {
    const {data: session} = useSession();

    return (
        <div className={'p-2 flex flex-col h-screen'}>
            <div className={'flex-1'}>
                <div>
                    {/*newchat*/}
                    <NewChat/>
                    <div>
                        {/*mobile selection*/}
                    </div>
                    {/*map through the chatRows*/}
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