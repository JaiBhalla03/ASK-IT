import React from 'react';

type props = {
    chatId: string;
};

const Chat = ({chatId}: props) => {
    return (
        <div className={'flex-1'}>
            chat
        </div>
    );
};

export default Chat;