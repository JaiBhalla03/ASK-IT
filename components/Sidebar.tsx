import React from 'react';
import NewChat from "@/components/NewChat";

const Sidebar = () => {
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
        </div>
    );
};

export default Sidebar;