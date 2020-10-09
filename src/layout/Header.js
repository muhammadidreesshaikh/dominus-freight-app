import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import '../assets/css/header.css'
// import logo from '../assets/img/logo_465x320.png'

function Header() {

    const [menuToggle, setMenuToggle] = useState(false);

    console.log(menuToggle);

    return(
        <div>

            

            <div className="header">

                <div className={"mobile-menu-toggle " + (menuToggle ? 'change' : '')} onClick={() => setMenuToggle(!menuToggle)}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>

                <div className="desktop-menu container">
                    <div className="row">

                        <div className="col-sm-4 col-md-4 col-lg-4">
                            <div className='logo'>
                                {/* <img src={logo} /> */}
                                <a href="#">Dominus Freight</a>
                            </div>
                        </div>

                        <div className="col-sm-8 col-md-8 col-lg-8">
                            <div className="nav">
                                 <ul>
                                    <li><Link to="/login">Login</Link></li>
                                    <li><Link to="/signup">Sign Up</Link></li>
                                    <li><Link to="/loadconfirmation">Load Confirmation</Link></li>
                                 </ul>
                            </div>
                        </div>
                       
                    </div>
                </div>

                <div className={"mobile-menu sidenav " + (menuToggle ? 'open' : 'close')}>
                    <Link to="/login" onClick={() => setMenuToggle(!menuToggle)}>Login</Link>
                    <Link to="/signup" onClick={() => setMenuToggle(!menuToggle)}>Sign Up</Link>
                    <Link to="/loadconfirmation" onClick={() => setMenuToggle(!menuToggle)}>Load Confirmation</Link>
                </div>

            </div>
        </div>
    );
}

export default Header;