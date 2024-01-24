import React from 'react';

export interface SortSelectProps extends React.ComponentPropsWithoutRef<'select'> {
  setSort: (value: string) => void;
}

export const SortSelect: React.FC<SortSelectProps> = ({ setSort, className, ...props }) => {

  const handleSelectChange = (e: { target: { value: string; }; }) => {
    setSort(e.target.value);
  };

  return (
    <select
      {...props}
      name='sort-select'
      className={`outline-0 p-2 text-sm cursor-pointer border-2 border-gray-400 font-bold ${className}`}
      onChange={handleSelectChange}>
      <option value="title">title</option>
      <option value="location">location</option>
    </select>
  );
}

