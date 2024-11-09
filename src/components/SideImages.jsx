import React from 'react'
import { ImageIcon } from '../ui/ImageIcon'
import '../App.css';


export const SideImages = (props) => {
    return (
        // Display side images
        <div className="w-24 sm:w-28 md:w-40 lg:w-48 space-y-8">
            {props.icons.map((icon, index) =>(
                <ImageIcon key={index} position={icon.position} src={icon.src} />
            ))}          
        </div>
    )
}
