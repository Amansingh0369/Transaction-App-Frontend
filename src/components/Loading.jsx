import React from 'react';
import loadGif from "../assets/dollar.gif";

function Loading() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-900">
            {/* Loading Image */}
            <img
                src={loadGif}
                alt="Loading Image"
                className="h-48 w-48 sm:h-64 sm:w-64 animate-bounce"
            />
        </div>
    );
}

export default Loading;
