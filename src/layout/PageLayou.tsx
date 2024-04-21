import React from 'react';


const Page = ({ children }) => {

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-300">
            <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
                {children}
            </div>
        </div>
    )

};

export default Page;