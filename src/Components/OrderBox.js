/* import axios from "axios";
import React, { useState } from "react";




    function OrderBox() {
        const [name, setName] = useState('');
        const [size, setSize] = useState('');
        const [toppings, setToppings] = useState([]);
        const [quantity, setQuantity] = useState (1);
        const [specialInstructions, setSpecialInstructions] = useState('');
        
    const handleNameChange = (event) => {
        setName(event.target.value); 
    };

    const handleSizeChange = (event) => {
        setSize(event.target.value);
    } 
    const handleToppingsChange = (event) => {
        const SelectedToppings = Array.from(
            event.target.selectedOptions,
            (option) => option.value
        );
        setToppings(SelectedToppings);
    }
   //handleSpecialInstructionsChange = (event) => {
       // setSpecialInstructions(event.target.value);
   
    const handleSubmit = (event) =>    {
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name-input">Name:</label>
          <input
            type="text"
            id="name-input"
            value={name}
            onChange={handleNameChange}
          />
          <label htmlFor="size-select">Size:</label>
          <select id="size-select" value={size} onChange={handleSizeChange}>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
          <label htmlFor="toppings-select">Toppings:</label>
          <select
            id="toppings-select"
            multiple
            value={toppings}
            onChange={handleToppingsChange}
          >
            <option value="pepperoni">Pepperoni</option>
            <option value="mushrooms">Mushrooms</option>
            <option value="onions">Onions</option>
            <option value="sausage">Sausage</option>
            <option value="bacon">Bacon</option>
          </select>
          <label htmlFor="special-instructions-input">
            Special Instructions:
          </label>
          <textarea
            id="special-instructions-input"
            value={specialInstructions}
            onChange={handleSpecialInstructionsChange}
          />
          <button type="submit" id="order-button">
            Add to Order
          </button>
        </form>
      );
    };

    export default OrderBox;

    /*constructor(props) {
        super(props);
        this.state ={value: '', quantity: '', price: 0, total: 0};

        this.handleChange = this.handleChange.bind(this);
        this.handleChange = this.handleChange.bind(this); 
    }

    handleChange(event) {
        event.preventDefault();
        const form = event.target;
        const data = new FormData(form); 
        const order = {
            name: data.get('name'),
            size: data.get('size'),
            toppings: {
                topping1: data.get('topping1'),
                topping2: data.get('topping2')
            },
            specialInstructions: data.get('specialInstructions')
        };
        axios.post('/api/orders', order)
        .then(response => {
            console.log(response.data);
        }) 
        .catch(error => {
            console.log(error);
        }); 
    }
// return database with recorder from info. 
    handleSubmit(event) {
        const total = parseFloat(this.state.price) * parseInt(this.state.quantity);
        this.setState({total: total});
        alert('A name was submitted:' + this.state.value + ' with quantity ' + this.state.quantity + ' and total price of $' + total.toFixed(2));
        event.preventDefault(); 
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Quantity:
                    <input type="number" name="quantity" value={this.state.quantity} onChange={this.handleChange} />
                </label>
                <br />
                <input type="submit" value="Order" />
            </form>
        );
    }
}

<form onSubmit={OrderBox}>
    <input type="text" name="name" />
    <input type="text" name="size" />
    <input type="checkbox" name="topping1" />
    <input type="checkbox" name="topping2" />
    <textarea name="specialInstructions"></textarea>
    <button type="submit" id="order-button">Add to Order</button>
</form>

export default OrderBox; 


handleChange(event) {
    const target = event.target;
    const value = target.type === 'chekbox' ? target.checked : target.value; 
    const name = target.name;

    this.setState({
        [name]: value
    }); 
    
}
*/