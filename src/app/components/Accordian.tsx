"use client"

import { useState } from 'react';

interface AccordionItemProps {
    title: string;
    content: string;
    isOpen: boolean;
    onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, isOpen, onClick }) => {
    return (
        <div className="border-b">
            <button
                onClick={onClick}
                className="w-full text-left p-4 focus:outline-none"
            >
                <h2 className="text-lg font-semibold">{title}</h2>
            </button>
            {isOpen && (
                <div className="p-4">
                    <p>{content}</p>
                </div>
            )}
        </div>
    );
};



const Accordion: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const items = [
        { title: 'Item 1', content: 'Content for item 1' },
        { title: 'Item 2', content: 'Content for item 2' },
        { title: 'Item 3', content: 'Content for item 3' },
    ];

    const handleItemClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="border rounded-lgs">
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    content={item.content}
                    isOpen={openIndex === index}
                    onClick={() => handleItemClick(index)}
                />
            ))}
        </div>
    );
};

export default Accordion;