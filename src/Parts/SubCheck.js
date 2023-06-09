import React, { useState } from "react";

function SubCheck() {
    const [checkbox, setCheckedBox] = useState ({});

    const item = [
        {id: 1, value: 'Gluten Free Crust'}
    ]

    const handleChange = (event) => {
        setCheckedBox({
            ...checkbox,
            [event.target.name]: event.target.setCheckedBox, 
        });
    };
    return(
        <div>
            <label key={item.id}>
            <input 
                    type="checkbox"
                    name={item.value}
                    checked={checkbox[item.value]}
                    onChange={handleChange}
                />
                Gluten Free Crust
            </label>
        </div>
    );
}

export default SubCheck;