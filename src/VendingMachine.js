import { BrowserRouter, Route } from 'react-router-dom';
import './VendingMachine.css'
import Navbar from './Navbar';
import CandyBar from './CandyBar';
import Soda from './Soda';
import Chips from './Chips';
import Home from './Home'

const VendingMachine = () => {
    return (
        <div className='VendingMachine'>
        <BrowserRouter>
            <Navbar />
            <Route exact path='/'>
                <Home/>
            </Route>
            <Route exact path='/chips'>
                <Chips />
            </Route>
            <Route exact path='/soda'>
                <Soda />
            </Route>
            <Route exact path='/candybar'>
                <CandyBar />
            </Route>
        </BrowserRouter>
        </div>
        )
};

export default VendingMachine;