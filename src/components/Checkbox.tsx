import React, { ChangeEventHandler } from 'react';
import "../assets/css/Checkbox.css"

interface CheckboxProps {
    checked: boolean;
    onChange: ChangeEventHandler<HTMLInputElement>;
    disabled?: boolean;
    label?: string;
    className?: string;
    size?: 'small' | 'medium' | 'large';
    id?: string;
    name?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, disabled = false, label = '', className = '', size = 'medium', id = '', name = '' }) => {
    const checkboxClassName = `checkbox ${size} ${disabled ? 'disabled' : ''} ${className}`;

    return (
        <label className={checkboxClassName}>
            <input
                id={id}
                name={name}
                type="checkbox"
                checked={checked}
                onChange={onChange}
                disabled={disabled}
            />
            {label && <span className="label">{label}</span>}
        </label>
    );
};

export default Checkbox;
