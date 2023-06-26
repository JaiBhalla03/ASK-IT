const Page = () => {
    return (
        <div className={'flex flex-col items-center justify-center h-screen text-white'}>
            <h1 className={'text-5xl font-bold mb-20'}>ASK-IT</h1>
            <div>
                <div>
                    <div className={'flex flex-col items-center justify-center'}>
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
            </div>
        </div>
    );
};

export default Page;