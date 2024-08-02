import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { Accordion, Button, Card, Icon, Image, ImageCard, Tabs, Toast, Tooltip } from '../components';

const Home: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [toastType, setToastType] = useState<'success' | 'error' | 'warning'>('success');

    const handleClick = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setToastMessage('Button clicked!');
            setToastType('success');
            setShowToast(true);
        }, 2000);
    };

    const handleToastClose = () => {
        setShowToast(false);
    };
    const accordionItems = [
        {
            title: 'ImageCard 1',
            content: <ImageCard
                imageSrc="https://via.placeholder.com/150"
                imageAlt="Placeholder"
                icon={faHome}
                header={<h2>Card Header</h2>}
                content={<p>This is the body of the card.</p>}
                footer={<button>Click Me</button>}
                layout="left"
                className="custom-card"
            />
        },
        {
            title: 'ImageCard 2',
            content: <ImageCard
                imageSrc="https://via.placeholder.com/150"
                imageAlt="Placeholder"
                icon={faHome}
                header={<h2>Card Header</h2>}
                content={<p>This is the body of the card.</p>}
                footer={<button>Click Me</button>}
                layout="right"
                className="custom-card"
            />
        },
        {
            title: 'ImageCard 3',
            content: <Image
                src="https://via.placeholder.com/600"
                alt="Placeholder"
                width="600px"
                height="400px"
                className="custom-image"
                placeholder="https://via.placeholder.com/150"
                errorImage="https://via.placeholder.com/600/FF0000/FFFFFF?text=Error"
            />
        },
    ];
    const tabs = [
        {
            label: 'Tab 1',
            content: <Card
                header={<h2>Card Header</h2>}
                body={<p>This is the body of the card.</p>}
                footer={<button>Click Me</button>}
                className="custom-card"
                onClick={() => alert('Card clicked!')}
            />
        },
        {
            label: 'Tab 2',
            content: <div>
                <Card
                    body={<p>This card has no header or footer.</p>}
                    className="custom-card"
                />
                <h2>Tooltip</h2>
                <Tooltip content="This is a tooltip">
                    <button>Hover me</button>
                </Tooltip>
            </div>
        },
        {
            label: 'Tab 3',
            content: <div>
                <Icon
                    icon={faHome}
                    size="large"
                    color="#007bff"
                    className="custom-icon"
                />
                <Icon
                    icon={faUser}
                    size="medium"
                    color="#ff5722"
                    className="custom-icon"
                />
                <Button onClick={handleClick} loading={loading}
                    variant="primary"
                    size="medium"
                    className="custom-secondary-button">
                    Click Me
                </Button>
                {showToast && (
                    <Toast message={toastMessage} type={toastType} onClose={handleToastClose} />
                )}
            </div>
        },
    ];

    return (
        <>
            <Tabs tabs={tabs} />
            <Accordion items={accordionItems} />
        </>
    );
};

export default Home;
