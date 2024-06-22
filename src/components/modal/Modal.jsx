import React, { useState } from 'react';
import WhatsAppFAB from '../WhatsAppFAB';


const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => setIsOpen(!isOpen);

    return (
        <>
            <button onClick={toggleModal}>Toggle Modal</button>
            {isOpen && (
                <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', zIndex: 1000 }}>
                    <button onClick={toggleModal}>Close</button>
                    <WhatsApp />
                </div>
            )}
            {isOpen && <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 999 }} onClick={toggleModal}></div>}
        </>
    );
};

export default Modal;