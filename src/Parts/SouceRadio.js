import React, { useState } from "react";

function SouceRadio() {
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div>
            <label>
                <input 
                    type="radio"
                    value="Original Red"
                    checked={selectedOption === 'Original Red'}
                    onChange={handleChange}
                />
                Original Red
            </label>
            <label>
                <input 
                    type="radio"
                    value="Garlic Red"
                    checked={selectedOption === 'Garlic Red'}
                    onChange={handleChange}
                />
                Garlic Red
            </label>
            <label>
                <input 
                    type="radio"
                    value="BBQ"
                    checked={selectedOption === 'BBQ'}
                    onChange={handleChange}
                />
                BBQ
            </label>
            <label>
                <input 
                    type="radio"
                    value="Spinach Alfredo"
                    checked={selectedOption === 'Spinach Alfredo'}
                    onChange={handleChange}
                />
                Spinach Alfredo
            </label>
        </div>
    );
}

export default SouceRadio; 