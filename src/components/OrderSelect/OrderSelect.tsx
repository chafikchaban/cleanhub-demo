import React from 'react';

export interface OrderSelectProps extends React.ComponentPropsWithoutRef<'select'> {
  setOrder: (value: string) => void;
}

export const OrderSelect: React.FC<OrderSelectProps> = ({ setOrder, className, ...props }) => {

  const handleSelectChange = (e: { target: { value: string; }; }) => {
    setOrder(e.target.value);
  };

  return (
    <select
      {...props}
      name='order-select'
      className={`outline-0 p-2 text-sm cursor-pointer border-2 border-gray-400 ${className} font-bold`}
      onChange={handleSelectChange}>
      <option value="asc">ascending</option>
      <option value="desc">descending</option>
    </select>
  );
}

