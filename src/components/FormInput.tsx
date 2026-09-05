import React from 'react';

interface FormInputProps {
  label: string;
  type?: string;
  placeholder?: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  options?: string[];
  min?: number;
  max?: number;
}

export const FormInput: React.FC<FormInputProps> = ({
  label,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  options,
  min,
  max,
}) => {
  if (type === 'select' && options) {
    return (
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">{label}</label>
        <select
          className="input"
          value={value.toString()}
          onChange={(e) => onChange(e as unknown as React.ChangeEvent<HTMLInputElement>)}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  }

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">{label}</label>
      <input
        type={type}
        className="input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        min={min}
        max={max}
      />
    </div>
  );
};