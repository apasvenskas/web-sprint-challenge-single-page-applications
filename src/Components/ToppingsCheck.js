import React, { useState } from "react";

function ToppingsCheck() {
    const [checkedBox, setCheckedBox] = useState({}); 

    const items = [
        { id: 1, value: 'Pepperoni'}, 
        { id: 2, value: 'Sausage'},
        { id: 3, value: 'Canadian Bacon'},
        { id: 4, value: 'Spicy Sausage'},
        { id: 5, value: 'Grilled Chicken'},
        { id: 6, value: 'Onions'},
        { id: 7, value: 'Green Peppers'},
        { id: 8, value: 'Diced Tomatos'},
        { id: 9, value: 'Black Olives'},
        { id: 10, value: 'Rousted Garlic'},
        { id: 11, value: 'Artichoke Hearts'},
        { id: 12, value: 'Three Cheese'},
        { id: 13, value: 'Pineaple'},
        { id: 14, value: 'Extra Cheese'}
    ];

    const handleChange = (event) => {
        setCheckedBox({
            ...checkedBox,
            [event.target.name]: event.target.checked,
        });
    };

    return (
        <div>
            {items.map((item) =>(
            <label key={item.id}>
                <input 
                    type="checkbox"
                    name={item.value}
                    checked={checkedBox[item.value]}
                    onChange={handleChange}
                />
                {item.value}
            </label>
            ))}
        </div>
    ); 
}

export default ToppingsCheck;