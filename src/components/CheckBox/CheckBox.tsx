import React, { useState } from 'react';

export interface CheckBoxProps {
    label: string;
    onChange(checked: boolean): void;
}
export const CheckBox: React.FC<CheckBoxProps> = ({ label, onChange }) => {
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        onChange(!checked);
        setChecked(!checked);
    }
    return (
        <button onClick={() => {
            handleChange()
        }} className="flex items-center outline-0 p-2 cursor-pointer border-2 border-gray-400 font-bold">
            <input
                id="bordered-checkbox-1"
                type="checkbox"
                checked={checked}
                onChange={handleChange}
                name="bordered-checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label
                htmlFor="bordered-checkbox-1"
                className="w-full ms-2 text-sm font-bold text-black-900 dark:text-black-300"
            >
                {label}
            </label>
        </button>
    )
}