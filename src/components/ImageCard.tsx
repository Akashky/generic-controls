import React from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../assets/css/ImageCard.css"

interface ImageCardProps {
    imageSrc: string;
    imageAlt?: string;
    icon: IconDefinition;
    header?: React.ReactNode;
    content: React.ReactNode;
    footer?: React.ReactNode;
    layout?: 'top' | 'bottom' | 'left' | 'right';
    className?: string;
}

const ImageCard: React.FC<ImageCardProps> = ({
    imageSrc,
    imageAlt = '',
    icon,
    header,
    content,
    footer,
    layout = 'top',
    className = '',
}) => {
    const layoutClass = `image-card-${layout}`;

    return (
        <div className={`image-card ${layoutClass} ${className}`}>
            {(layout === 'top' || layout === 'bottom') && (
                <>
                    {layout === 'top' && <img src={imageSrc} alt={imageAlt} className="image-card-image" />}
                    <div className="image-card-content">
                        <FontAwesomeIcon icon={icon} className="image-card-icon" />
                        {header && <div className="image-card-header">{header}</div>}
                        <div className="image-card-body">{content}</div>
                        {footer && <div className="image-card-footer">{footer}</div>}
                    </div>
                    {layout === 'bottom' && <img src={imageSrc} alt={imageAlt} className="image-card-image" />}
                </>
            )}
            {(layout === 'left' || layout === 'right') && (
                <div className="image-card-horizontal">
                    {layout === 'left' && <img src={imageSrc} alt={imageAlt} className="image-card-image" />}
                    <div className="image-card-content">
                        <FontAwesomeIcon icon={icon} className="image-card-icon" />
                        {header && <div className="image-card-header">{header}</div>}
                        <div className="image-card-body">{content}</div>
                        {footer && <div className="image-card-footer">{footer}</div>}
                    </div>
                    {layout === 'right' && <img src={imageSrc} alt={imageAlt} className="image-card-image" />}
                </div>
            )}
        </div>
    );
};

export default ImageCard;
