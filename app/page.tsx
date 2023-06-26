import {ChatBubbleLeftRightIcon, ExclamationCircleIcon, BoltIcon} from "@heroicons/react/24/solid";

const Page = () => {
    return (
        <div className={'flex flex-col items-center justify-center h-screen text-white'}>
            <h1 className={'text-5xl font-bold mb-20'}>ASK-IT</h1>
            <div className={'flex space-x-2 text-center'}>
                <div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <ChatBubbleLeftRightIcon className={'h-8 w-8'}/>
                        <h2>Examples</h2>
                    </div>
                    <div className={'space-y-2'}>
                        <p className={'infoText'}>"Explain something to me"</p>
                        <p className={'infoText'}>
                            "What is the difference between an asteroid and a meteor"
                        </p>
                        <p className={'infoText'}>
                            "What is the color of the moon?"
                        </p>
                    </div>
                </div>
                <div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <BoltIcon className={'h-8 w-8'}/>
                        <h2>What can it do?</h2>
                    </div>
                    <div className={'space-y-2'}>
                        <p className={'infoText'}>"Explain something to me"</p>
                        <p className={'infoText'}>
                            "What is the difference between an asteroid and a meteor"
                        </p>
                        <p className={'infoText'}>
                            "What is the color of the moon?"
                        </p>
                    </div>
                </div>
                <div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <ExclamationCircleIcon className={'h-8 w-8'}/>
                        <h2>Limitations</h2>
                    </div>
                    <div className={'space-y-2'}>
                        <p className={'infoText'}>"Explain something to me"</p>
                        <p className={'infoText'}>
                            "What is the difference between an asteroid and a meteor"
                        </p>
                        <p className={'infoText'}>
                            "What is the color of the moon?"
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;