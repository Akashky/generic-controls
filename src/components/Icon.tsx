import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition, SizeProp } from '@fortawesome/fontawesome-svg-core';
import "../assets/css/Icon.css"

interface IconProps {
    icon: IconDefinition;
    size?: 'small' | 'medium' | 'large';
    color?: string;
    className?: string;
}

const Icon: React.FC<IconProps> = ({
    icon,
    size = 'medium',
    color = '#000',
    className = '',
}) => {
    const sizeMap: { [key: string]: SizeProp } = {
        small: '1x',
        medium: '2x',
        large: '3x',
    };

    const iconSize = sizeMap[size];

    return (
        <FontAwesomeIcon
            icon={icon}
            size={iconSize}
            color={color}
            className={`icon ${className}`}
        />
    );
};

export default Icon;
