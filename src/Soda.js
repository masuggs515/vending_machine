import { NavLink } from "react-router-dom";
import './Soda.css'

const Soda = () => {
    return (
        <div className='Soda'>
            <h1>Soda</h1>
            <NavLink exact to='/'><h1>Back To VendingMachine</h1></NavLink>
        </div>
    );
};

export default Soda;