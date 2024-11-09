import React from 'react';
import { FadeBox } from '../ui/FadeBox';

export const Background = () => {
    return (
        <>
            <div className="absolute top-0 left-0 w-full h-screen -z-10 flex justify-center">
                <FadeBox width={"w-2/6"} />
                <FadeBox width={"w-80"} />
                <FadeBox width={"w-80"} />
                <FadeBox width={"w-80"} />
                <FadeBox width={"w-80"} />
                <FadeBox width={"w-2/6"} />
            </div>
        </>
    );
};
