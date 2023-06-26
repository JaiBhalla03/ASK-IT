'use client'
import {signIn} from "next-auth/react";
import {UserIcon} from "@heroicons/react/24/solid";

const Login = () => {
    return (
        <div className={'bg-[#161616] h-screen flex flex-col justify-center items-center text-white'}>
            <button
                onClick={()=>signIn('google')}
                className={'border-[#202020] border rounded-xl p-4 flex items-center hover:scale-105 duration-300 transition-all active:scale-95'}>
                <UserIcon className={'w-8 h-8'}/>
                <div className={'text-xl font-bold'}>
                    Sign In to use ASK-IT
                </div>
            </button>
        </div>
    );
};

export default Login;