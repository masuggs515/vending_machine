import { NavLink } from 'react-router-dom'
import './Home.css'

const Home = () =>{
    return (
        <div className='Home'>
            <h1>Vending Machine</h1>
            <NavLink exact to='chips'>
                <h2>CHIPS</h2>
            </NavLink>
            <NavLink exact to='candybar'>
                <h2>CANDY BAR</h2>
            </NavLink>
            <NavLink exact to='soda'>
                <h2>SODA</h2>
            </NavLink>
        </div>
    );
};

export default Home;