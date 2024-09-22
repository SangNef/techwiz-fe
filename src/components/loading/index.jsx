import React from 'react';

const Loading = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="flex flex-col items-center">
                <div className="loader border-t-4 border-b-4 border-gray-200 rounded-full w-16 h-16 animate-spin border-t-blue-500"></div>
                <p className="mt-4 text-lg text-gray-600">Loading...</p>
            </div>
            <style jsx>{`
                .loader {
                    animation: spin 1s linear infinite;
                }
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
};

export default Loading;
