import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

interface AccordionItem {
    title?: string;
    content?: React.ReactNode;
}

interface AccordionProps {
    items: AccordionItem[];
    type?: 'single' | 'multi';
}

const Accordion: React.FC<AccordionProps> = ({ items, type = 'single' }) => {
    const [openedIndices, setOpenedIndices] = useState<number[]>([]);

    const toggleOpen = (index: number) => {
        if (type === 'single') {
            setOpenedIndices((prevIndices) =>
                prevIndices.includes(index) ? [] : [index]
            );
        } else {
            setOpenedIndices((prevIndices) =>
                prevIndices.includes(index)
                    ? prevIndices.filter((i) => i !== index)
                    : [...prevIndices, index]
            );
        }
    };

    return (
        <div className='accordion'>
            {items.map((item: AccordionItem, index: number) => (
                <div className='accordion-item' key={item.title ?? 'title' + index}>
                    <button
                        className={`accordion-button`}
                        onClick={() => toggleOpen(index)}
                    >
                        <p>{item.title}</p>
                        <FontAwesomeIcon
                            icon={
                                openedIndices.includes(index) ? faArrowUp : faArrowDown
                            }
                        />
                    </button>
                    <div className={`accordion-content ${openedIndices.includes(index) ? 'accordion-content--active' : 'accordion-content--inactive'}`}
                    >
                        {item.content}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;
