import React, { useState } from "react";

class OrderBox extends React.Component {
    constructor(props) {
        super(props);
        this.state ={value: '', quantity: '', price: 0, total: 0};

        this.handleChange = this.handleChange.bind(this);
        this.handleChange = this.handleChange.bind(this); 
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'chekbox' ? target.checked : target.value; 
        const name = target.name;

        this.setState({
            [name]: value
        }); 
    }

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

export default OrderBox; 