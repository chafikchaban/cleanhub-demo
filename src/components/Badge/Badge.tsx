import React from 'react';

export interface BadgeProps {
    label: string;
    color: string
}
export const Badge: React.FC<BadgeProps> = ({ label, color }) => {

    return (
        <span className={`
        bg-${color}-100 
        text-${color}-800 
        text-xs 
        font-medium 
        me-2 
        px-2.5 
        py-0.5 
        rounded 
        dark:bg-gray-700 
        dark:text-${color}-400 
        border 
        border-${color}-400`}
        >
            {label}
        </span>
    )
}
