import React from 'react';
import {RightImages} from './RightImages';
import {LeftImages} from './LeftImages';
import {MainContent} from './MainContent';

export const Navigation = () => {
    return (
        <div className="relative z-10 flex justify-between items-center py-6">
            <RightImages />
            <MainContent />
            <LeftImages />
        </div>
    )
}
