import React from "react";
import { Link } from "react-router-dom";

const Confirmation = () => {
    return(
        <form>
        <h1>Lambda Eats</h1>
        <section>
            <div>
                <Link to="/">
                    <button>Home</button>
                </Link>
                <button>Help</button>
            </div>
            <div>
                <p>Congradulations Pizza Is On The Way!!</p>
            </div>
            <div>
                <h4>Pizza will make you happy!!</h4>
            </div>
        </section>

        </form>
    )
}

export default Confirmation; 