import React from 'react';

const BlogByteAI = () => {
    return (
        <div className='container-fluid mb-2'>
            <div className="relative">
                <img src="/ai-updates-img.png" alt="Blog Bytes" className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex justify-between items-center container mx-auto px-12">
                    <div className="text-white">
                        <h1 className="text-2xl font-bold mb-4">AI Updates</h1>
                        <p>Have a quick Byte under 50 words </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogByteAI;
