import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-sm shadow bg-body rounded'>
            <div className='container'>
                <Link className='navbar-brand' to='/' style={{color:'seagreen',fontWeight: '900'}}>MEGASTAR</Link>

                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbar1'>
                    <span className='navbar-toggler-icon'></span>
                </button>

                <div className='collapse navbar-collapse' id='navbar1'>
                    <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
                        <li className='nav-iteam'>
                            <Link className='nav-link active' to='/'>HOME</Link>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">SHOP</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>

                    </ul>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;