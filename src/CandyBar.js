import { NavLink } from "react-router-dom";
import './CandyBar.css'

const CandyBar = () =>{
    return (
        <div className='CandyBar'>
            <h1>CandyBar</h1>
            <NavLink exact to='/'><h1>Back To VendingMachine</h1></NavLink> 
        </div>
    );
};

export default CandyBar;