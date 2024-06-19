"use client"

import { lockScroll, unlockScroll } from '@/utils/StopScorlling';
import { useState } from 'react';

const TestStopScrolling = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openPopup = () => {
        setIsOpen(true);
        lockScroll();
    };

    const closePopup = () => {
        setIsOpen(false);
        unlockScroll();
    };

    return (
        <div>
            <button onClick={openPopup} className="px-4 py-2 bg-blue-500 text-white rounded-lg">
                Open Popup
            </button>

            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-bold">Popup Content</h2>
                        <button onClick={closePopup} className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg">
                            Close Popup
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TestStopScrolling;
