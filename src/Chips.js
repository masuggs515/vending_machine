import './Chips.css'
import {NavLink} from 'react-router-dom'

const Chips = () =>{
    return (
        <div className='Chips'>
            <h1>Chips</h1>
            <NavLink exact to='/'><h1>Back To VendingMachine</h1></NavLink>            
        </div>
    );
};

export default Chips;