import React from 'react';
import { motion } from 'framer-motion';

const WorkProcess = () => {
  const steps = [
    {
      id: 1,
      title: "Approved Project",
      description:
        "Once the design receives final approval, the implementation phase commences. Explore the diverse techniques and technologies employed to bring the design to fruition. From traditional craftsmanship to cutting-edge manufacturing processes, skilled artisans, technicians, and engineers collaborate to transform raw materials into finished products.",
      image: "https://picsum.photos/600/400", // Placeholder grayscale image
    },
    {
      id: 2,
      title: "Construction",
      description:
        "Technological advancements have redefined the landscape of manufacturing. Discover how these innovations enable greater customization, expedited production, and improved functionality, pushing the boundaries of what's achievable in creating tangible objects.",
      image: "https://picsum.photos/600/400",
    },
    {
      id: 3,
      title: "Tangible Object",
      description:
        "Tangible objects serve as the bridge between imagination and reality, transforming ideas into physical forms that enhance our daily lives. From groundbreaking products to architectural wonders, these objects showcase the ingenuity, craftsmanship, and creativity inherent in human endeavors.",
      image: "https://picsum.photos/600/400",
    },
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="space-y-16 max-w-5xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            className={`grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-8 md:gap-12`}
            style={{ minHeight: '300px' }}
            initial={{ opacity: 0, y: 100 }} // Start off-screen with 0 opacity
            whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and original position
            transition={{ duration: 0.7, ease: 'easeOut' }} // Animation duration and easing
            viewport={{ once: true }} // Trigger animation only once when it enters the viewport
          >
            {/* Image Section with hover animation */}
            <motion.div
              className={`w-full ${index % 2 === 0 ? 'md:order-1' : 'md:order-3'} transition-transform duration-500 transform hover:scale-105`}
            >
              <img
                src={step.image}
                alt={step.title}
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
            </motion.div>

            {/* Middle Number */}
            <div className="w-16 flex mx-auto justify-center items-center md:order-2">
              <p className="text-5xl font-bold ">{`0${step.id}`}</p>
            </div>

            {/* Text Content with hover effect */}
            <motion.div
              className={`w-full ${index % 2 === 0 ? 'md:order-3' : 'md:order-1'} text-center md:text-left flex items-center transition-transform duration-500 transform hover:scale-105`}
            >
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WorkProcess;
