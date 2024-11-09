import React from 'react'

export const MainContent = () => {
    return (
        <div className="w-1/2 text-center">
            <div>
                <div className="flex justify-center">
                    <img src="image1.png" alt="logo" className="rounded-full hover:shadow-lg hover:scale-150 transition duration-300" />
                </div>
                {/* Title and Description of nav */}
                <div className="font-sans text-gray-800">
                    <div className="font-extrabold mt-4 text-xs md:text-lg lg:text-2xl leading-tight">
                        <span>Experience the swiftness of our best work</span>
                        <br />
                        <span>process as we prioritize efficiency and</span>
                        <br />
                        <span>excellence in every step.</span>
                    </div>
                    <p className="mt-2 font-light text-xs md:text-sm lg:text-base leading-relaxed">
                        We will explain the journey of translating concepts into intricate designs, utilizing methods such as
                        <br /> sketching, digital modeling, and prototyping. Witness the collaborative efforts of designers and
                        <br /> engineers refining ideas, considering elements like aesthetics, functionality, materials, and
                        <br /> manufacturing feasibility.
                    </p>
                </div>
            </div>
        </div>
    )
}
