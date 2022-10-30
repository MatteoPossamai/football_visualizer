import { useState } from 'react';

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
    return (
        <header className="header">
            <header className='header-top-line'>
                <h1 className='header-title'>Football data Dashboard and Navigator</h1>
            </header>
            <nav className='header-navigator'>
                <button type='submit' className='header-button'>About</button>
                <button type='submit' className='header-button'>All Teams</button>
                <button type='submit' className='header-button'>All Players</button>
            </nav>
                <form className="search">
                    <input type="text"  value={search} onChange={(e) =>{setSearch(e.target.value)}} placeholder="Search..." />
                    <button type="submit">Search</button>
                </form>
        </header>
    )
}

export default Header;