import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () =>{
    return (
        <div className='Navbar'>
            <NavLink exact to='/'>VendingMachine</NavLink>
            <NavLink exact to='/chips'>Chips</NavLink>
            <NavLink exact to='/candybar'>Candy Bar</NavLink>
            <NavLink exact to='/soda'>Soda</NavLink>
        </div>
    )
}

export default Navbar;