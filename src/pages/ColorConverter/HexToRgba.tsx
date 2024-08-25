import React, { useState } from 'react';
import { HexToRgbaREG } from '../../shared/constants'; // Assuming the regex is defined in your constants file

const HexToRgba: React.FC = () => {
    const [hexColor, setHexColor] = useState('#');
    const [error, setError] = useState<string>('');
    const [submittedColor, setSubmittedColor] = useState<string>('');

    function hexToRgba(hex: string, alpha: number = 1): string {
        hex = hex.replace('#', '');

        if (hex.length === 3) {
            hex = hex.split('').map(char => char + char).join('');
        }

        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);

        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    const handleChange = (text: string) => {
        setHexColor(text);
    };

    const handleSubmit = () => {
        if (hexColor === '' || !HexToRgbaREG.test(hexColor)) {
            setError('Please enter a valid hex color.');
        } else {
            setSubmittedColor(hexToRgba(hexColor));
            setError('');
        }
    };

    return (
        <div className='rgba' style={{ background: submittedColor }}>
            <input
                type="text"
                className="rgba-input"
                value={hexColor}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e.target.value)}
                placeholder="#000000"
            />
            <button onClick={handleSubmit}>Submit</button>

            {error ? <div className="error-message" style={{ color: 'red' }}>{error}</div> : <p>{submittedColor}</p>}
        </div>
    );
};

export default HexToRgba;
