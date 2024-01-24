import React from 'react';

export interface ProgressProps {
    progress: number;
    label: string;
}

export const Progress: React.FC<ProgressProps> = ({ progress, label }) => {
    return (
        <div className="relative w-full bg-gray-200 dark:bg-gray-700">
            <div className=" h-4 bg-blue-600 p-0.5 leading-none"
                style={{
                    width: `${progress}%`
                }}
            />
            <div className='absolute text-xs font-medium text-blue-100 text-center m-auto left-0 right-0 top-0'>{label}</div>
        </div>
    )
}