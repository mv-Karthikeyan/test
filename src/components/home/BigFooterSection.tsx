import React from 'react';

const BigFooterSection = () => {
    return (
        <div className='container-fluid'>
            <div className="relative">
                <img src="/section-join-community.png" alt="Background" className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex justify-between items-center container mx-auto px-12">
                    <div className="text-white">
                        <h2 className="text-2xl font-bold mb-4">Let’s Gather & Grow together!</h2>
                        <p>
                            Engage with industry leaders,
                            sharpen your skills & enhance your career with our collaborative learning hub.
                        </p>
                    </div>
                    <div className="text-start">
                        <button className="bg-white text-pink py-2 px-4 rounded-full font-bold">
                            Join For Free
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BigFooterSection;
