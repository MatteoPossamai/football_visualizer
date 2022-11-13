import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Header(){
    const [search, setSearch] = useState('');
    /* 
        Requirements:
        1. The header should be fixed
        2. Needs the following voices:
            - Resarch V
            - Teams 
            - Players
            - About 
    */

    let navigate = useNavigate();

    let navigation = (e: any, position: string) => {
        e.preventDefault();
        navigate(position);
    }
    
    return (
        <header className="header">
            <header className='header-top-line'>
                <img src="logo192.png" alt="logo" className='header-image first'/>
                <h1 className='header-title'>Football data Dashboard and Navigator</h1>
                <img src="logo192.png" alt="logo" className='header-image last'/>
            </header>
            <nav className='header-navigator'>
                <button className='header-button' onClick={(e) => navigation(e, '/about')} >About</button>
                <button type='submit' className='header-button'>Teams</button>
                <button type='submit' className='header-button'>Players</button>
            </nav>
                <form className="search">
                    <input type="text"  value={search} onChange={(e) =>{setSearch(e.target.value)}} placeholder="Search anything..." />
                    <button type="submit">Search</button>
                </form>
        </header>
    )
}

export default Header;