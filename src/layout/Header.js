import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import '../assets/css/header.css'
// import logo from '../assets/img/logo_465x320.png'

function Header() {

    const [menuToggle, setMenuToggle] = useState(false);
    const [headerTitle, setHeaderTitle] = useState('');

    console.log(menuToggle);

    return(
        <div>

            

            <div className="header">

                <div className={"mobile-menu-toggle " + (menuToggle ? 'change' : '')} onClick={() => setMenuToggle(!menuToggle)}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>

                <h4 className="header-title">{headerTitle}</h4>

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
                                    <li><Link to="/realtime">Real Time Tracking</Link></li> 
                                    <li><Link to="/yourloads">Your Loads</Link></li>
                                    <li><Link to="/loaddetails">Load Details</Link></li> 
                                    <li><Link to="/shipper">Shipper</Link></li> 
                                    <li><Link to="/allpayment">All Payment</Link></li>
                                    <li><Link to="/setting">Setting</Link></li>
                                 </ul>
                            </div>
                        </div>
                       
                    </div>
                </div>

                <div className={"mobile-menu sidenav " + (menuToggle ? 'open' : 'close')}>
                    <Link to="/login" 
                        onClick={() => { setMenuToggle(!menuToggle); setHeaderTitle('Login')} }>
                        Login
                    </Link>

                    <Link to="/signup" 
                        onClick={() => { setMenuToggle(!menuToggle); setHeaderTitle('Sign Up')}}>
                        Sign Up
                    </Link>

                    <Link to="/loadconfirmation" 
                        onClick={() => { setMenuToggle(!menuToggle); setHeaderTitle('Load Confirmation')}}>
                        Load Confirmation
                    </Link>
                    
                    <Link to="/realtime" 
                        onClick={() => { setMenuToggle(!menuToggle); setHeaderTitle('Real Time Tracking')}}>
                        Real Time Tracking
                    </Link>

                    <Link to="/yourloads" 
                        onClick={() => { setMenuToggle(!menuToggle); setHeaderTitle('Your Loads')}}>
                        Your Loads
                    </Link>

                    <Link to="/loaddetails" 
                        onClick={() => { setMenuToggle(!menuToggle); setHeaderTitle('Load Details')}}>
                        Load Details
                    </Link> 

                    <Link to="/shipper" 
                        onClick={() => { setMenuToggle(!menuToggle); setHeaderTitle('Shipper')}}>
                        Shipper 
                    </Link>

                    <Link to="/allpayment" 
                        onClick={() => { setMenuToggle(!menuToggle); setHeaderTitle('All Payment')}}> 
                        All Payment 
                    </Link>

                    <Link to="/setting" 
                        onClick={() => { setMenuToggle(!menuToggle); setHeaderTitle('Setting')}}> 
                        Setting 
                    </Link>

                    
                </div>

            </div>
        </div>
    );
}

export default Header;