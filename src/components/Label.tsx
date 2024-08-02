import React from 'react';
import "../assets/css/Label.css"

interface LabelProps {
    text: string;
    htmlFor?: string;
    className?: string;
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
}

const Label: React.FC<LabelProps> = ({
    text,
    htmlFor = '',
    className = '',
    size = 'medium',
    disabled = false,
}) => {
    const labelClassName = `label ${size} ${disabled ? 'disabled' : ''} ${className}`;

    return (
        <label htmlFor={htmlFor} className={labelClassName}>
            {text}
        </label>
    );
};

export default Label;
