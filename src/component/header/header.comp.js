import React from 'react'
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import { connect } from "react-redux";
import './header.style.scss'
import {auth} from "../../firebase/firebase.utils";

const Header =(props) =>{
    return (
        <div className="header">
            <Link to='/' className='logo-container'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link to='/shop' className='option'>SHOP</Link>
                <Link to='/contact' className='option'>CONTACT</Link>
                {
                    props.currentUser ?
                        <div className='option' onClick={()=> props.onLogout() }>SIGN OUT</div>:
                        <Link className='option' to='/signin'>SIGN IN</Link>
                }
            </div>
        </div>
    )
}
const mapState = state => ({
    currentUser: state.signin.currentUser
});

const mapDispatch = dispatch => ({
    onLogout: dispatch.signin.onLogout
});


export default connect(mapState,mapDispatch)(Header);