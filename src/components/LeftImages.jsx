import React from 'react'
import { ImageIcon } from '../ui/ImageIcon'

export const LeftImages = () => {
    return (
        <div className="w-24 sm:w-28 md:w-40 lg:w-48 space-y-8">
            <ImageIcon position="start" src="../images/smile.png" />
            <ImageIcon position="end" src="../images/book.jpg" />
            <ImageIcon position="start" src="../images/item.png" />
        </div>
    )
}
