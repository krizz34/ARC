import './Navbar.css';
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';


function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () =>{ setClick(!click) }
    const closeMobileMenu = () =>{ setClick(false)}

    const showButton = () =>{
        if(window.innerWidth <= 960){
            setButton(false);
        }
        else{
            setButton(true);
        }
    }
    window.addEventListener('resize', showButton);

    useEffect(() =>{
        showButton()
    },[]);

  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo customLogo' onClick={closeMobileMenu}>
                    ARC
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li to='/' className='nav-item'>
                        <Link className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                        services
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                        products
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/signUp' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>
                </ul>
                {button && <Button className='btn--outline'>Sign Up</Button>}
            </div>
        </nav>
    </>
  )
}

export default Navbar
