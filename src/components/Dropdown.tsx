import React, { ChangeEventHandler } from 'react';
import "../assets/css/Dropdown.css"

interface Option {
    value: string;
    label: string;
}

interface DropdownProps {
    value: string;
    onChange: ChangeEventHandler<HTMLSelectElement>;
    options: Option[];
    placeholder?: string;
    disabled?: boolean;
    className?: string;
    size?: 'small' | 'medium' | 'large';
    id?: string;
    name?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
    value,
    onChange,
    options,
    placeholder = '',
    disabled = false,
    className = '',
    size = 'medium',
    id = '',
    name = ''
}) => {
    const dropdownClassName = `dropdown ${size} ${disabled ? 'disabled' : ''} ${className}`;

    return (
        <select
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            disabled={disabled}
            className={dropdownClassName}
        >
            {placeholder && <option value="" disabled>{placeholder}</option>}
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default Dropdown;
