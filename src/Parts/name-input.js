import React, { useState } from 'react'; 

function NameInputs() {
    const [name, setName] = useState('');
    const handleChange = (event) => {
        setName(event.target.value);
    };
    const handlesubmit = (event) => {
        event.preventDefault();
        if (name.length < 2) {
            alert('name must be atleast 2 characters long');
        } else {
            alert ('Name submitted succesfully!');
        }
    };
    
    return(
        <form onSubmit={handlesubmit}>
            <label htmlFor="name-input">Name:</label>
            <input type='text' id='name-input' value={name} onChange={handleChange} />
            
        </form>
    );
}

export default NameInputs;