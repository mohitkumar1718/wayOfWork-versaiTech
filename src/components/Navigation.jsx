import React from 'react';
import {SideImages} from './SideImages';

import {MainContent} from './MainContent';

export const Navigation = () => {
    // Right side icons
    const rightIcons = [{
        id: 1,
        src: "../images/book.jpg",
        position: "end"
    },{
        id: 2,
        src: "../images/item.png",
        position: "start"
    },{
        id: 3,
        src: "../images/smile.png",
        position: "end"
    }];
    // Left side Icons
    const leftIcons = [{
        id: 1,
        src: "../images/smile.png",
        position: "start"
    },{
        id: 2,
        src: "../images/book.jpg",
        position: "end"
    },{
        id: 3,
        src: "../images/item.png",
        position: "start"
    }]
    return (
        <div className="relative z-10 flex justify-between items-center py-6">
            <SideImages icons={rightIcons}/>
            <MainContent />
            <SideImages icons={leftIcons} />
        </div>
    )
}
