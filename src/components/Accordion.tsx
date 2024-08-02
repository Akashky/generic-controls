import React, { useState } from 'react';
import '../assets/css/Accordion.css'

interface AccordionItemProps {
    title: string;
    content: React.ReactNode;
}

interface AccordionProps {
    items: AccordionItemProps[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="accordion">
            {items.map((item, index) => (
                <div key={index} className="accordion-item">
                    <div
                        className="accordion-header"
                        onClick={() => handleToggle(index)}
                    >
                        {item.title}
                    </div>
                    <div
                        className={`accordion-content ${
                            activeIndex === index ? 'active' : ''
                        }`}
                    >
                        {item.content}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;
