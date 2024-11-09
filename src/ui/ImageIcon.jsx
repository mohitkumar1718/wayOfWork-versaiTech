import React from 'react'

export const ImageIcon = (props) => {

    const imagePos = `flex items-center justify-${props.position}`;
    return (
        // Images at side bar
        <div className={imagePos}>
            <img
                src={props.src}
                alt="Pic 1"
                className="w-12 sm:w-12 md:w-16 lg:w-20 border hover:shadow-lg hover:scale-150 transition duration-300"
            />
        </div>
    )
}
