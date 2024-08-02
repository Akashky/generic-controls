import React, { useState } from 'react';
import { SignupForm } from '../forms';
import { Button, Modal } from '../components';

const About: React.FC = () => {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return (
        <>
            <Button onClick={handleShowModal} className='show-modal'>Show Modal</Button>
            <Modal
                show={showModal}
                // onClose={handleCloseModal}
                // onSave={handleSaveModal}
                showClose={handleCloseModal}  
                title="Modal Title"
            >
                <SignupForm onSubmit={handleCloseModal} />
            </Modal>
        </>
    );
};

export default About;
