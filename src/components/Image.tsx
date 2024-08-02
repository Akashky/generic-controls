import React, { useState } from 'react';
import "../assets/css/Image.css"

interface ImageProps {
    src: string;
    alt?: string;
    width?: number | string;
    height?: number | string;
    className?: string;
    placeholder?: string;
    errorImage?: string;
}

const Image: React.FC<ImageProps> = ({
    src,
    alt = '',
    width = 'auto',
    height = 'auto',
    className = '',
    placeholder = '',
    errorImage = '',
}) => {
    const [imageSrc, setImageSrc] = useState<string>(placeholder || src);
    const [isError, setIsError] = useState<boolean>(false);

    const handleLoad = () => {
        if (placeholder) {
            setImageSrc(src);
        }
    };

    const handleError = () => {
        if (errorImage) {
            setImageSrc(errorImage);
        } else {
            setIsError(true);
        }
    };

    return (
        <img
            src={isError ? errorImage : imageSrc}
            alt={alt}
            width={width}
            height={height}
            className={className}
            onLoad={handleLoad}
            onError={handleError}
            style={{ display: isError ? 'none' : 'block' }}
        />
    );
};

export default Image;
